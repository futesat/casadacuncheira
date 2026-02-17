import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, useMap, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import GpxParser from 'gpxparser';
import 'leaflet/dist/leaflet.css';
import { Download, TrendingUp, Maximize2, Map as MapIcon, ArrowUpNarrowWide } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

// Fix for default marker icons in Leaflet with Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface ElevationPoint {
    distance: number;
    elevation: number;
    slope: number;
    color: string;
}

interface RouteMapProps {
    gpxPath: string;
    title?: string;
}

function ZoomToRoute({ positions }: { positions: [number, number][] }) {
    const map = useMap();
    useEffect(() => {
        if (positions.length > 0) {
            const bounds = L.latLngBounds(positions);
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [positions, map]);
    return null;
}

export function RouteMap({ gpxPath, title }: RouteMapProps) {
    const { t } = useLanguage();
    const [positions, setPositions] = useState<[number, number][]>([]);
    const [elevationData, setElevationData] = useState<ElevationPoint[]>([]);
    const [stats, setStats] = useState({ distance: 0, gain: 0, maxEle: 0 });
    const [startPoint, setStartPoint] = useState<[number, number] | null>(null);
    const [endPoint, setEndPoint] = useState<[number, number] | null>(null);

    const getSlopeColor = (slope: number) => {
        if (slope > 12) return '#ef4444'; // Steep (Red)
        if (slope > 6) return '#f97316';  // Moderate (Orange)
        if (slope > 2) return '#eab308';  // Easy (Yellow)
        if (slope < -2) return '#10b981'; // Descent (Green)
        return '#3b82f6';                 // Flat (Blue)
    };

    useEffect(() => {
        const fetchGPX = async () => {
            try {
                if (!gpxPath) return;
                const response = await fetch(gpxPath);
                const xml = await response.text();
                const gpx = new GpxParser();
                gpx.parse(xml);

                if (gpx.tracks && gpx.tracks.length > 0) {
                    const track = gpx.tracks[0];
                    const pts = track.points || [];
                    if (pts.length === 0) return;

                    const coords = pts.map((p: any) => [p.lat, p.lon] as [number, number]);
                    setPositions(coords);
                    setStartPoint(coords[0]);
                    setEndPoint(coords[coords.length - 1]);

                    let cumulativeDist = 0;
                    let totalGain = 0;
                    let maxEle = -Infinity;
                    const points: ElevationPoint[] = [];

                    pts.forEach((p: any, i: number) => {
                        const ele = p.ele || 0;
                        if (ele > maxEle) maxEle = ele;

                        let currentSlope = 0;
                        if (i > 0) {
                            const prev = pts[i - 1];
                            const d = haversine(prev.lat, prev.lon, p.lat, p.lon);
                            cumulativeDist += d;

                            const eDiff = ele - prev.ele;
                            if (eDiff > 0) totalGain += eDiff;

                            // Slope percentage = (rise / run) * 100
                            currentSlope = d > 0 ? (eDiff / d) * 100 : 0;
                        }

                        // Sampling for the chart
                        if (i % Math.max(1, Math.floor(pts.length / 150)) === 0 || i === pts.length - 1) {
                            points.push({
                                distance: Math.round(cumulativeDist),
                                elevation: Math.round(ele),
                                slope: Number(currentSlope.toFixed(1)),
                                color: getSlopeColor(currentSlope)
                            });
                        }
                    });

                    setElevationData(points);
                    setStats({
                        distance: Number((cumulativeDist / 1000).toFixed(1)),
                        gain: Math.round(totalGain || (track as any).stats?.posgain || 0),
                        maxEle: Math.round(maxEle !== -Infinity ? maxEle : 0)
                    });
                }
            } catch (error) {
                console.error('Error loading GPX:', error);
            }
        };

        fetchGPX();
    }, [gpxPath]);

    const haversine = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371e3;
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };

    // Generate gradient stops based on distance percentage
    const gradientStops = useMemo(() => {
        if (elevationData.length === 0) return null;
        const maxDist = elevationData[elevationData.length - 1].distance;
        return elevationData.map((p) => ({
            offset: `${(p.distance / maxDist) * 100}%`,
            color: p.color
        }));
    }, [elevationData]);

    return (
        <div className="space-y-8">
            <div className="relative group">
                <div className="h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-muted/20">
                    <MapContainer
                        center={[42.88, -9.12]}
                        zoom={13}
                        zoomControl={false}
                        style={{ height: '100%', width: '100%', filter: 'contrast(1.1) brightness(1.05)' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                            attribution="&copy; Google Maps"
                        />
                        <ZoomControl position="bottomright" />

                        {positions.length > 0 && (
                            <>
                                <Polyline
                                    positions={positions}
                                    pathOptions={{
                                        color: '#2563eb',
                                        weight: 5,
                                        opacity: 0.9,
                                        lineJoin: 'round'
                                    }}
                                />
                                {startPoint && (
                                    <Marker position={startPoint}>
                                        <Popup><div className="text-sm font-semibold">{t('nature.route.start')}</div></Popup>
                                    </Marker>
                                )}
                                {endPoint && (
                                    <Marker position={endPoint}>
                                        <Popup><div className="text-sm font-semibold">{t('nature.route.end')}</div></Popup>
                                    </Marker>
                                )}
                                <ZoomToRoute positions={positions} />
                            </>
                        )}
                    </MapContainer>
                </div>

                {/* Overlays */}
                <div className="absolute bottom-10 left-8 z-[400] flex flex-wrap gap-4">
                    <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-xl border border-white/20 flex flex-col gap-1 min-w-[140px] transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 text-primary/70">
                            <Maximize2 className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{t('nature.route.distance')}</span>
                        </div>
                        <span className="text-2xl font-bold text-foreground">{stats.distance} <small className="text-sm font-medium text-muted-foreground">{t('nature.route.km')}</small></span>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-xl border border-white/20 flex flex-col gap-1 min-w-[140px] transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 text-primary/70">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{t('nature.route.gain')}</span>
                        </div>
                        <span className="text-2xl font-bold text-foreground">+{stats.gain} <small className="text-sm font-medium text-muted-foreground">{t('nature.route.meters')}</small></span>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-xl border border-white/20 flex flex-col gap-1 min-w-[140px] transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 text-primary/70">
                            <ArrowUpNarrowWide className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{t('nature.route.max_ele')}</span>
                        </div>
                        <span className="text-2xl font-bold text-foreground">{stats.maxEle} <small className="text-sm font-medium text-muted-foreground">{t('nature.route.meters')}</small></span>
                    </div>
                </div>

                <div className="absolute top-8 right-8 z-[400]">
                    <a
                        href={gpxPath}
                        download
                        className="bg-primary text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 text-xs font-black hover:bg-primary/90 hover:scale-105 transition-all uppercase tracking-[0.2em]"
                    >
                        <Download className="w-5 h-5" />
                        {t('nature.route.download')}
                    </a>
                </div>
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-border/40 shadow-sm relative overflow-hidden group/chart">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-2xl text-primary transform group-hover/chart:rotate-12 transition-transform">
                            <MapIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-foreground tracking-tight">{t('nature.route.elevation_profile')}</h4>
                            <p className="text-sm text-muted-foreground">{t('nature.route.elevation_desc')}</p>
                        </div>
                    </div>
                </div>

                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={elevationData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="slopeGradient" x1="0" y1="0" x2="1" y2="0">
                                    {gradientStops?.map((stop, i) => (
                                        <stop key={i} offset={stop.offset} stopColor={stop.color} />
                                    ))}
                                </linearGradient>
                                <linearGradient id="solidFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="distance" hide />
                            <YAxis domain={['auto', 'auto']} hide />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        const data = payload[0].payload;
                                        return (
                                            <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 flex flex-col gap-1">
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t('nature.route.distance')}</p>
                                                <p className="text-lg font-bold text-slate-900">{(data.distance / 1000).toFixed(2)} km</p>
                                                <div className="h-px bg-slate-100 my-2" />
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t('nature.route.max_ele')}</p>
                                                <p className="text-lg font-bold text-primary">{data.elevation} m</p>
                                                <p className="text-[10px] font-bold mt-1" style={{ color: data.color }}>
                                                    {data.slope > 0 ? '↗' : '↘'} {Math.abs(data.slope)}%
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="elevation"
                                stroke="url(#slopeGradient)"
                                strokeWidth={4}
                                fill="url(#solidFill)"
                                isAnimationActive={true}
                                animationDuration={1200}
                                connectNulls
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-50 pt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                        <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-sans">{t('nature.route.steep')} (&gt;12%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#f97316]" />
                        <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-sans">{t('nature.route.moderate')} (6-12%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
                        <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-sans">{t('nature.route.flat')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                        <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider font-sans">{t('nature.route.descent')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
