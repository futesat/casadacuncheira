import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, MapPin, Info, Camera, Compass, ChevronRight, Home, CalendarCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { useEffect, useMemo } from 'react';
import { RouteMap } from '../components/RouteMap';
import { getNatureData } from '../constants/nature';
import { SEOHead } from '../components/SEOHead';

export function NatureDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { language, t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

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

    const bookingUrl = useMemo(() => {
        const urlMap: Record<string, string> = {
            es: 'https://bookonline.pro/es/property/350327',
            gl: 'https://bookonline.pro/es/property/350327',
            en: 'https://bookonline.pro/en/property/350327',
            fr: 'https://bookonline.pro/fr/property/350327',
            de: 'https://bookonline.pro/de/property/350327',
            it: 'https://bookonline.pro/it/property/350327',
            pt: 'https://bookonline.pro/pt/property/350327',
        };
        return urlMap[language] || urlMap['es'];
    }, [language]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <button onClick={() => navigate('/')} className="text-primary flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    {t('common.back')}
                </button>
            </div>
        );
    }

    const breadcrumbsSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Casa da Cuncheira',
                'item': 'https://www.casadacuncheira.com/'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': data.title,
                'item': `https://www.casadacuncheira.com/nature/${slug}`
            }
        ]
    };

    const relatedPlaces = (data.relatedSlugs || ['praia-carnota', 'monte-pindo', 'lira-carnota'])
        .filter(s => s !== slug && natureData[s])
        .slice(0, 3)
        .map(s => ({
            slug: s,
            ...natureData[s]
        }));

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={data.metaTitle || `${data.title} | Entorno de Casa da Cuncheira (Carnota)`}
                description={data.metaDescription || data.summary || `${data.title} en Carnota, Costa da Morte. Descubre este lugar imprescindible alojándote en Casa da Cuncheira.`}
                canonicalUrl={`https://www.casadacuncheira.com/nature/${slug}`}
                ogImage={data.image ? `https://www.casadacuncheira.com${data.image}` : undefined}
                ogType="article"
                structuredData={breadcrumbsSchema}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button
                            onClick={handleBack}
                            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto group cursor-pointer"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t('common.back')}
                        </button>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight break-words">
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

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-b border-border/40 py-3 px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-3.5 h-3.5" />
                        <span>Inicio</span>
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                    <button onClick={handleBack} className="hover:text-primary transition-colors cursor-pointer">
                        Entorno
                    </button>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                    <span className="text-foreground font-medium truncate">{data.title}</span>
                </nav>
            </div>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-xl sm:text-2xl font-light text-muted-foreground italic leading-relaxed">
                            "{data.summary}"
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
                        {data.highlights.map((highlight: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-muted/50 p-6 sm:p-8 rounded-2xl border border-border/50 text-center"
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

                                const isHeader = trimmedLine.length < 70 &&
                                    !trimmedLine.endsWith('.') &&
                                    !trimmedLine.endsWith(':') &&
                                    !trimmedLine.startsWith('•') &&
                                    !trimmedLine.startsWith('-');

                                const isListHeader = trimmedLine.endsWith(':') && !trimmedLine.startsWith('•');
                                const isBullet = trimmedLine.startsWith('•') || trimmedLine.startsWith('-');

                                if (isHeader) {
                                    flushList(i);
                                    elements.push(
                                        <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl font-semibold text-foreground mt-14 mb-6 first:mt-0 pb-3 border-b border-primary/10 tracking-tight">
                                            {trimmedLine}
                                        </h2>
                                    );
                                } else if (isListHeader) {
                                    flushList(i);
                                    elements.push(
                                        <p key={`lh-${i}`} className="text-foreground font-semibold mb-4 mt-6">
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
                            className="mt-16 mb-20"
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
                            className="mt-16 mb-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border-border/50 border"
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

                    {/* Related Internal Guides */}
                    {relatedPlaces.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 pt-12 border-t border-border/40"
                        >
                            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-primary" />
                                {t('nature.related.title')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPlaces.map((place) => (
                                    <Link
                                        key={place.slug}
                                        to={`/nature/${place.slug}`}
                                        className="group bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-5 border border-border/60 transition-all flex flex-col justify-between hover:shadow-md"
                                    >
                                        <div>
                                            <div className="h-36 rounded-xl overflow-hidden mb-4">
                                                <ImageWithFallback
                                                    src={place.image}
                                                    alt={place.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                                {place.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2">
                                                {place.summary}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-medium text-primary">
                                            <span>Ver guía completa</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Contextual Accommodation CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs uppercase tracking-widest text-primary-foreground font-medium mb-4">
                                Alojamiento en Lira, Carnota
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
                                {t('nature.cta.title')}
                            </h3>
                            <p className="text-slate-300 mb-8 font-light text-base sm:text-lg leading-relaxed">
                                {t('nature.cta.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => {
                                        navigate('/');
                                        setTimeout(() => {
                                            const el = document.getElementById('house');
                                            if (el) {
                                                const headerHeight = 80;
                                                const elementPosition = el.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                            }
                                        }, 100);
                                    }}
                                    className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-medium transition-all cursor-pointer"
                                >
                                    {t('nature.cta.house')}
                                </button>
                                <a
                                    href={bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <CalendarCheck className="w-4 h-4" />
                                    {t('nature.cta.book')}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
