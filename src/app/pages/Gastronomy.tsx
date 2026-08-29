import { motion } from 'motion/react';
import { UtensilsCrossed, ArrowLeft, Star, MapPin, Globe, Phone, Map, ChevronRight, Home, CalendarCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { getRestaurants, Restaurant } from '../constants/restaurants';
import { SEOHead } from '../components/SEOHead';
import { useMemo } from 'react';

interface GastronomyProps {
    onBack: () => void;
}

export function Gastronomy({ onBack }: GastronomyProps) {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const restaurants: Restaurant[] = getRestaurants(t);

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
                'name': t('seo.gastronomyTitle') || 'Gastronomía en Carnota y Lira',
                'item': 'https://www.casadacuncheira.com/gastronomy'
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={t('seo.gastronomyTitle')}
                description={t('seo.gastronomyDescription')}
                canonicalUrl="https://www.casadacuncheira.com/gastronomy"
                ogImage="https://www.casadacuncheira.com/images/gastronomy_hero.png"
                ogType="article"
                structuredData={breadcrumbsSchema}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${(import.meta as any).env.BASE_URL}images/gastronomy_hero.png`}
                        alt={t('gastronomy.pageTitle')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button
                            onClick={onBack}
                            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto group cursor-pointer"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t('common.back')}
                        </button>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight break-words">
                            {t('gastronomy.pageTitle')}
                        </h1>
                        <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                            {t('gastronomy.pageSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-b border-border/40 py-3 px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-3.5 h-3.5" />
                        <span>{t('nav.home')}</span>
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                    <span className="text-foreground font-medium">{t('gastronomy.breadcrumb')}</span>
                </nav>
            </div>

            {/* Local Context Intro */}
            <section className="py-12 bg-white border-b border-border/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-primary text-xs uppercase font-semibold tracking-wider mb-2 block">
                        {t('gastronomy.intro.tag')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                        {t('gastronomy.intro.title')}
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
                        {t('gastronomy.intro.desc')}
                    </p>
                </div>
            </section>

            {/* Restaurants Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {restaurants.map((rest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="relative h-72 overflow-hidden">
                                        <ImageWithFallback
                                            src={rest.image}
                                            alt={rest.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                            {rest.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                            <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                                            <span className="line-clamp-1">{rest.location}</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 font-light text-sm sm:text-base">
                                            {rest.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 pt-0">
                                    <div className="space-y-3 mb-6">
                                        {rest.phone && (
                                            <a
                                                href={`tel:${rest.phone.replace(/\s+/g, '')}`}
                                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <Phone className="w-4 h-4 text-primary" />
                                                {rest.phone}
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                        {rest.website && (
                                            <a
                                                href={rest.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium text-sm"
                                            >
                                                <Globe className="w-4 h-4" />
                                                {t('gastronomy.website')}
                                            </a>
                                        )}
                                        {rest.googleMaps && (
                                            <a
                                                href={rest.googleMaps}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium text-sm ml-auto"
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

                    {/* Related Exploration Guides */}
                    <div className="mt-20 pt-12 border-t border-border/40">
                        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-primary" />
                            {t('gastronomy.explore.title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link
                                to="/nature/lira-carnota"
                                className="p-6 rounded-2xl bg-white border border-border/60 hover:border-primary/40 hover:shadow-md transition-all flex items-center justify-between group"
                            >
                                <div>
                                    <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                        {t('gastronomy.explore.lira.title')}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {t('gastronomy.explore.lira.desc')}
                                    </p>
                                </div>
                                <span className="text-primary group-hover:translate-x-1 transition-transform ml-4">→</span>
                            </Link>
                            <Link
                                to="/nature/que-ver-en-carnota"
                                className="p-6 rounded-2xl bg-white border border-border/60 hover:border-primary/40 hover:shadow-md transition-all flex items-center justify-between group"
                            >
                                <div>
                                    <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                        {t('gastronomy.explore.carnota.title')}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {t('gastronomy.explore.carnota.desc')}
                                    </p>
                                </div>
                                <span className="text-primary group-hover:translate-x-1 transition-transform ml-4">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contextual Accommodation CTA */}
            <section className="py-20 bg-slate-900 text-white text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <UtensilsCrossed className="w-12 h-12 text-primary mx-auto mb-6 opacity-70" />
                    <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs uppercase tracking-widest text-primary-foreground font-medium mb-4">
                        {t('nature.cta.badge')}
                    </span>
                    <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                        {t('gastronomy.stay.title')}
                    </h2>
                    <p className="text-slate-300 mb-8 font-light text-base sm:text-lg leading-relaxed">
                        {t('gastronomy.stay.desc')}
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
                        <Link
                            to="/booking"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <CalendarCheck className="w-4 h-4" />
                            {t('nature.cta.book')}
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
