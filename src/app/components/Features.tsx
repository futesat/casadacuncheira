import { motion } from 'motion/react';
import { Waves, Mountain, Sun, Compass, Users, Bed, Bath, Wifi, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const badges = [
    { icon: Users, label: t('features.badge.guests') },
    { icon: Bed, label: t('features.badge.bedrooms') },
    { icon: Bath, label: t('features.badge.bathrooms') },
    { icon: Wifi, label: t('features.badge.wifi') },
    { icon: Waves, label: t('features.badge.views') },
    { icon: Sun, label: t('features.badge.terrace') },
    { icon: Wind, label: t('features.badge.ac') },
  ];

  const highlights = [
    {
      icon: Compass,
      title: t('features.lira.title'),
      description: t('features.lira.desc'),
    },
    {
      icon: Waves,
      title: t('features.carnota.title'),
      description: t('features.carnota.desc'),
    },
    {
      icon: Mountain,
      title: t('features.pindo.title'),
      description: t('features.pindo.desc'),
    },
    {
      icon: Sun,
      title: t('features.sunset.title'),
      description: t('features.sunset.desc'),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Descriptive Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t('features.intro.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            {t('features.intro.desc')}
          </p>
        </motion.div>

        {/* Verified Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16"
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border/60 text-sm font-medium text-foreground/90 shadow-xs"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* 4 Location & Surrounding Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-muted/40 border border-border/40 hover:bg-muted/70 hover:shadow-md transition-all text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
