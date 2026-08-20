import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CloudSun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WeatherWidget() {
    const { t, language } = useLanguage();
    const [isNearViewport, setIsNearViewport] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Map app languages to Windy supported languages (best effort)
    const windyLang = language === 'gl' ? 'es' : language;

    useEffect(() => {
        if (!containerRef.current) return;

        // Use IntersectionObserver to lazy load the iframe only when user scrolls near
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsNearViewport(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="weather" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
                        {t('weather.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        {t('weather.description')}
                    </p>
                </motion.div>

                <div
                    ref={containerRef}
                    className="relative w-full h-[250px] md:h-[185px] rounded-3xl overflow-hidden shadow-xl border border-border bg-muted/30"
                >
                    {isNearViewport ? (
                        <iframe
                            key={windyLang}
                            src={`https://embed.windy.com/embed.html?type=forecast&location=coordinates&detail=true&detailLat=42.822&detailLon=-9.082&metricTemp=default&metricRain=default&metricWind=default&language=${windyLang}`}
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Previsión meteorológica de Lira y Carnota en Windy"
                        ></iframe>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/60 gap-3">
                            <CloudSun className="w-8 h-8 animate-pulse text-primary/60" />
                            <span className="text-sm font-light">Cargando radar meteorológico en tiempo real...</span>
                        </div>
                    )}

                    {/* Subtle Overlay to match premium aesthetic */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                </div>
            </div>
        </section>
    );
}
