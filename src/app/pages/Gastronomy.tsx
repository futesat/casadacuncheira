import { motion } from 'motion/react';
import { UtensilsCrossed, ArrowLeft, Star, MapPin, Globe, Phone, Map } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { getRestaurants, Restaurant } from '../constants/restaurants';

interface GastronomyProps {
    onBack: () => void;
}

export function Gastronomy({ onBack }: GastronomyProps) {
    const { t } = useLanguage();

    const restaurants: Restaurant[] = getRestaurants(t);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/casadacuncheira/images/gastronomy_hero.png"
                        alt="Gastronomy Hero"
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
                            onClick={onBack}
                            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t('common.back')}
                        </button>
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                            {t('gastronomy.pageTitle')}
                        </h1>
                        <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                            {t('gastronomy.pageSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {restaurants.map((rest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <ImageWithFallback
                                        src={rest.image}
                                        alt={rest.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                                        {rest.type}
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-sm">
                                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                        {rest.rating}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-light mb-3 group-hover:text-primary transition-colors">
                                        {rest.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                        <MapPin className="w-4 h-4" />
                                        {rest.location}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                        {rest.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {rest.phone && (
                                            <a
                                                href={`tel:${rest.phone.replace(/\s+/g, '')}`}
                                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <Phone className="w-4 h-4" />
                                                {rest.phone}
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto">
                                        <a
                                            href={rest.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                                        >
                                            <Globe className="w-4 h-4" />
                                            {t('gastronomy.website')}
                                        </a>
                                        {rest.googleMaps && (
                                            <a
                                                href={rest.googleMaps}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                                            >
                                                <Map className="w-4 h-4" />
                                                {t('gastronomy.googleMaps')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-secondary/30 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    <h2 className="text-3xl font-light mb-8">{t('gastronomy.cta.title')}</h2>
                    <p className="text-muted-foreground mb-12">{t('gastronomy.cta.desc')}</p>
                    <button
                        onClick={() => {
                            onBack();
                            setTimeout(() => {
                                const element = document.getElementById('experiences');
                                if (element) {
                                    const headerHeight = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }, 100);
                        }}
                        className="px-12 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        {t('gastronomy.back')}
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
