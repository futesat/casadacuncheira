import { motion } from 'motion/react';
import { Mountain, Droplets, Compass, Anchor, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';

export function Location() {
  const { t } = useLanguage();

  const places = [
    {
      title: t('location.carnota.title'),
      description: t('location.carnota.desc'),
      slug: 'praia-carnota',
      image: `${(import.meta as any).env.BASE_URL}images/carnota_beach_optimized.webp`,
      icon: Droplets,
    },
    {
      title: t('location.pindo.title'),
      description: t('location.pindo.desc'),
      slug: 'monte-pindo',
      image: `${(import.meta as any).env.BASE_URL}images/moa_view_optimized.webp`,
      icon: Mountain,
    },
    {
      title: t('location.lira.title'),
      description: t('location.lira.desc'),
      slug: 'lira-carnota',
      image: `${(import.meta as any).env.BASE_URL}images/lira_beach_optimized.webp`,
      icon: Anchor,
    },
    {
      title: t('location.carnota_guide.title'),
      description: t('location.carnota_guide.desc'),
      slug: 'que-ver-en-carnota',
      image: `${(import.meta as any).env.BASE_URL}images/carnota_hórreo_optimized.webp`,
      icon: Sparkles,
    },
    {
      title: t('location.ezaro.title'),
      description: t('location.ezaro.desc'),
      slug: 'fervenza-do-ezaro',
      image: `${(import.meta as any).env.BASE_URL}images/ezaro.webp`,
      icon: Droplets,
    },
    {
      title: t('location.louro.title'),
      description: t('location.louro.desc'),
      slug: 'monte-louro',
      image: `${(import.meta as any).env.BASE_URL}images/monte_louro_optimized.webp`,
      icon: Mountain,
    },
    {
      title: t('location.fisterra.title'),
      description: t('location.fisterra.desc'),
      slug: 'cabo-finisterre',
      image: `${(import.meta as any).env.BASE_URL}images/fisterra_optimized.webp`,
      icon: Compass,
    },
  ];

  return (
    <section id="location" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            {t('location.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            {t('location.description')}
          </p>
        </motion.div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div>
                <div className="relative h-60 overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                    <place.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {place.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3">
                    {place.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/nature/${place.slug}`}
                  aria-label={`${t('experiences.more')}: ${place.title}`}
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1.5 group/btn text-sm"
                >
                  <span>Guía y cómo llegar</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
