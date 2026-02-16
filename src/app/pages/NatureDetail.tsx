import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Info, Camera, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { useEffect } from 'react';

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

    const natureData: Record<string, any> = {
        'praia-carnota': {
            title: t('location.carnota.title'),
            description: t('location.carnota.longDesc'),
            image: `${import.meta.env.BASE_URL}images/carnota_beach_optimized.webp`,
            location: 'Carnota, A Coruña',
            highlights: [
                t('nature.carnota.h1'),
                t('nature.carnota.h2'),
                t('nature.carnota.h3')
            ]
        },
        'monte-pindo': {
            title: t('location.pindo.title'),
            description: t('location.pindo.longDesc'),
            image: `${import.meta.env.BASE_URL}images/moa_view_optimized.webp`,
            location: 'Carnota, A Coruña',
            highlights: [
                t('nature.pindo.h1'),
                t('nature.pindo.h2'),
                t('nature.pindo.h3')
            ]
        },
        'monte-louro': {
            title: t('location.louro.title'),
            description: t('location.louro.longDesc'),
            image: `${import.meta.env.BASE_URL}images/monte_louro_optimized.webp`,
            location: 'Louro, Muros',
            highlights: [
                t('nature.louro.h1'),
                t('nature.louro.h2'),
                t('nature.louro.h3')
            ]
        },
        'fervenza-do-ezaro': {
            title: t('location.ezaro.title'),
            description: t('location.ezaro.longDesc'),
            image: `${import.meta.env.BASE_URL}images/ezaro.webp`,
            location: 'Ézaro, Dumbría',
            highlights: [
                t('nature.ezaro.h1'),
                t('nature.ezaro.h2'),
                t('nature.ezaro.h3')
            ],
            youtubeId: 'zNO89I471V4'
        },
        'cabo-finisterre': {
            title: t('location.fisterra.title'),
            description: t('location.fisterra.longDesc'),
            image: `${import.meta.env.BASE_URL}images/fisterra_optimized.webp`,
            location: 'Fisterra, A Coruña',
            highlights: [
                t('nature.fisterra.h1'),
                t('nature.fisterra.h2'),
                t('nature.fisterra.h3')
            ]
        }
    };

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
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                            {data.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-white/90 font-light">
                            <MapPin className="w-5 h-5 text-primary" />
                            {data.location}
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
                        className="prose prose-lg max-w-none text-muted-foreground leading-relaxed italic mb-16 text-center text-xl"
                    >
                        "{data.description}"
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
