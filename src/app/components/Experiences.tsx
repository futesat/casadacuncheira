import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Waves, Mountain, UtensilsCrossed, Sparkles, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';

type Category = 'all' | 'nature' | 'adventure' | 'gastronomy' | 'relax' | 'culture';

interface ExperiencesProps {
  onNavigateToGastronomy: () => void;
}

export function Experiences({ onNavigateToGastronomy }: ExperiencesProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const experiences = [
    {
      title: t('experiences.hiking.title'),
      description: t('experiences.hiking.desc'),
      image: `${(import.meta as any).env.BASE_URL}images/moa_view_optimized.webp`,
      category: 'nature' as Category,
      duration: t('experiences.hiking.duration'),
      slug: 'monte-pindo',
    },
    {
      title: t('experiences.surf.title'),
      description: t('experiences.surf.desc'),
      image: 'https://images.unsplash.com/photo-1644773357253-86decfe52166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwYXRsYXRpYyUyMG9jZWFuJTIwd2F2ZXN8ZW58MXx8fHwxNzcxMTA0Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'adventure' as Category,
      duration: t('experiences.surf.duration'),
      externalLink: 'https://areasurf.es/',
    },
    {
      title: t('experiences.rentals.title'),
      description: t('experiences.rentals.desc'),
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      category: 'adventure' as Category,
      duration: t('experiences.rentals.duration'),
      externalLink: 'https://abellago.com/alquiler',
    },
    {
      title: t('experiences.gastro.title'),
      description: t('experiences.gastro.desc'),
      image: `${(import.meta as any).env.BASE_URL}images/gastronomy_hero.png`,
      category: 'gastronomy' as Category,
      duration: t('experiences.gastro.duration'),
    },
    {
      title: t('experiences.sunset.title'),
      description: t('experiences.sunset.desc'),
      image: `${(import.meta as any).env.BASE_URL}images/fisterra_sunset_optimized.webp`,
      category: 'relax' as Category,
      duration: t('experiences.sunset.duration'),
    },
    {
      title: t('experiences.villages.title'),
      description: t('experiences.villages.desc'),
      image: 'https://images.unsplash.com/photo-1582144103470-08865b44e454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxpY2lhJTIwZm9yZXN0JTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzcxMTA0NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'culture' as Category,
      duration: t('experiences.villages.duration'),
    },
  ];

  const filters = [
    { id: 'all', icon: Sparkles, label: t('experiences.filter.all') },
    { id: 'nature', icon: Mountain, label: t('experiences.filter.nature') },
    { id: 'adventure', icon: Waves, label: t('experiences.filter.adventure') },
    { id: 'gastronomy', icon: UtensilsCrossed, label: t('experiences.filter.gastronomy') },
    { id: 'relax', icon: Sparkles, label: t('experiences.filter.relax') },
    { id: 'culture', icon: Landmark, label: t('experiences.filter.culture') },
  ];

  const filteredExperiences = activeFilter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section id="experiences" className="py-24 bg-white">
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
            {t('experiences.title')}
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as Category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${activeFilter === filter.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-secondary hover:bg-secondary/70'
                }`}
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Experiences Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {experience.duration && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                      {experience.duration}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  {experience.externalLink ? (
                    <a
                      href={experience.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:gap-2 transition-all flex items-center gap-1 group/btn"
                    >
                      {t('experiences.more')}
                      <span className="group-hover/btn:translate-x-1 transition-transform">{'->'}</span>
                    </a>
                  ) : experience.category === 'gastronomy' ? (
                    <button
                      onClick={onNavigateToGastronomy}
                      className="text-primary font-medium hover:gap-2 transition-all flex items-center gap-1 group/btn"
                    >
                      {t('experiences.more')}
                      <span className="group-hover/btn:translate-x-1 transition-transform">{'->'}</span>
                    </button>
                  ) : experience.slug ? (
                    <button
                      onClick={() => navigate(`/nature/${experience.slug}`)}
                      className="text-primary font-medium hover:gap-2 transition-all flex items-center gap-1 group/btn"
                    >
                      {t('experiences.more')}
                      <span className="group-hover/btn:translate-x-1 transition-transform">{'->'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const element = document.getElementById('booking');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {t('experiences.more')} {'->'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
