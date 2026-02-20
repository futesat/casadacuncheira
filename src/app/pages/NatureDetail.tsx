import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Info, Camera, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { useEffect } from 'react';
import { RouteMap } from '../components/RouteMap';
import { getNatureData } from '../constants/nature';

export function NatureDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('location');
            if (element) {
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    };

    const natureData = getNatureData(t);
    const data = slug ? natureData[slug] : null;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <button onClick={() => navigate('/')} className="text-primary flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    {t('gastronomy.back')}
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button
                            onClick={handleBack}
                            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t('common.back')}
                        </button>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-light text-white mb-6 tracking-tight break-words">
                            {data.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-white/90 font-light flex-wrap text-sm sm:text-base">
                            <MapPin className="w-5 h-5 text-primary" />
                            {data.googleMaps ? (
                                <a
                                    href={data.googleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-1 group/loc"
                                >
                                    {data.location}
                                    <span className="text-xs opacity-0 group-hover/loc:opacity-100 transition-opacity translate-y-px">
                                        ↗
                                    </span>
                                </a>
                            ) : (
                                data.location
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-2xl font-light text-muted-foreground italic leading-relaxed">
                            "{data.summary}"
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {data.highlights.map((highlight: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-muted/50 p-8 rounded-2xl border border-border/50 text-center"
                            >
                                {index === 0 && <Info className="w-8 h-8 text-primary mx-auto mb-4" />}
                                {index === 1 && <Camera className="w-8 h-8 text-primary mx-auto mb-4" />}
                                {index === 2 && <Compass className="w-8 h-8 text-primary mx-auto mb-4" />}
                                <p className="text-foreground font-medium">{highlight}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-none text-muted-foreground leading-relaxed mb-16 text-lg"
                    >
                        {(() => {
                            const lines = data.description.split('\n');
                            const elements: React.ReactNode[] = [];
                            let currentList: string[] = [];

                            const flushList = (key: string | number) => {
                                if (currentList.length > 0) {
                                    elements.push(
                                        <ul key={`ul-${key}`} className="space-y-4 mb-8 ml-6">
                                            {currentList.map((item, li) => (
                                                <li key={li} className="flex gap-3 text-muted-foreground">
                                                    <span className="text-primary/60 mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                                                    <span className="font-light leading-relaxed">{item.replace('•', '').trim()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                    currentList = [];
                                }
                            };

                            lines.forEach((line: string, i: number) => {
                                const trimmedLine = line.trim();
                                if (!trimmedLine) {
                                    flushList(i);
                                    return;
                                }

                                // 1. Header detection (Main sections)
                                const isHeader = trimmedLine.length < 60 &&
                                    !trimmedLine.endsWith('.') &&
                                    !trimmedLine.endsWith(':') &&
                                    !trimmedLine.startsWith('•') &&
                                    !trimmedLine.startsWith('-');

                                // 2. List Header detection (e.g., "Otros lugares destacados:")
                                const isListHeader = trimmedLine.endsWith(':') && !trimmedLine.startsWith('•');

                                // 3. Bullet detection
                                const isBullet = trimmedLine.startsWith('•') || trimmedLine.startsWith('-');

                                if (isHeader) {
                                    flushList(i);
                                    elements.push(
                                        <h3 key={`h3-${i}`} className="text-2xl font-medium text-foreground mt-14 mb-8 first:mt-0 pb-3 border-b border-primary/10 tracking-tight">
                                            {trimmedLine}
                                        </h3>
                                    );
                                } else if (isListHeader) {
                                    flushList(i);
                                    elements.push(
                                        <p key={`lh-${i}`} className="text-foreground font-medium mb-4 mt-6">
                                            {trimmedLine}
                                        </p>
                                    );
                                } else if (isBullet) {
                                    currentList.push(trimmedLine);
                                } else {
                                    flushList(i);
                                    elements.push(
                                        <p key={`p-${i}`} className="mb-6 font-light leading-relaxed">
                                            {trimmedLine}
                                        </p>
                                    );
                                }
                            });
                            flushList('final');
                            return elements;
                        })()}
                    </motion.div>

                    {data.gpxPath && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-20"
                        >
                            <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
                                {t('nature.pindo.route_title')}
                            </h3>
                            <RouteMap gpxPath={data.gpxPath} title={data.title} />
                        </motion.div>
                    )}

                    {data.youtubeId && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border-border/50 border"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${data.youtubeId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 p-12 bg-secondary/30 rounded-3xl text-center"
                    >
                        <h2 className="text-3xl font-light mb-6">{t('gastronomy.cta.title')}</h2>
                        <p className="text-muted-foreground mb-8">{t('gastronomy.cta.desc')}</p>
                        <button
                            onClick={handleBack}
                            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-xl"
                        >
                            {t('common.back')}
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
