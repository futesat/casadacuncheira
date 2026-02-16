import { motion } from 'motion/react';
import { Mountain, Droplets, UtensilsCrossed, MapPin, Compass } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';

export function Location() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const places = [
    {
      title: t('location.carnota.title'),
      description: t('location.carnota.desc'),
      slug: 'praia-carnota',
      image: `${import.meta.env.BASE_URL}images/carnota_beach_optimized.webp`,
      icon: Droplets,
      category: 'nature',
    },
    {
      title: t('location.pindo.title'),
      description: t('location.pindo.desc'),
      slug: 'monte-pindo',
      image: `${import.meta.env.BASE_URL}images/moa_view_optimized.webp`,
      icon: Mountain,
      category: 'nature',
    },
    {
      title: t('location.louro.title'),
      description: t('location.louro.desc'),
      slug: 'monte-louro',
      image: `${import.meta.env.BASE_URL}images/monte_louro_optimized.webp`,
      icon: Mountain,
      category: 'nature',
    },
    {
      title: t('location.ezaro.title'),
      description: t('location.ezaro.desc'),
      slug: 'fervenza-do-ezaro',
      image: `${import.meta.env.BASE_URL}images/ezaro.webp`,
      icon: Droplets,
      category: 'nature',
    },
    {
      title: t('location.fisterra.title'),
      description: t('location.fisterra.desc'),
      slug: 'cabo-finisterre',
      image: `${import.meta.env.BASE_URL}images/fisterra_optimized.webp`,
      icon: Compass,
      category: 'nature',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <place.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl mb-3">{place.title}</h3>
                <p className="text-muted-foreground mb-6">{place.description}</p>
                <button
                  onClick={() => navigate(`/nature/${place.slug}`)}
                  className="text-primary font-medium hover:gap-2 transition-all flex items-center gap-1 group/btn"
                >
                  {t('experiences.more')}
                  <span className="group-hover/btn:translate-x-1 transition-transform">{'->'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
