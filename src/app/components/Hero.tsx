import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';

const homeImage = `${import.meta.env.BASE_URL}images/hero_optimized.webp`;

interface HeroProps {
  onDiscover?: () => void;
}

export function Hero({ onDiscover }: HeroProps) {
  const { t } = useLanguage();

  const scrollToNext = () => {
    const element = document.getElementById('house');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={homeImage}
          alt="Casa da Cuncheira - Alojamiento vacacional en Lira, Carnota con vistas al mar"
          width="1920"
          height="1080"
          // @ts-ignore
          fetchpriority="high"
          className="w-full h-full object-cover"
          style={{ filter: 'contrast(1.1) saturate(1.2)' }}
        />
        {/* Stronger overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1
              className="text-4xl sm:text-6xl md:text-7xl mb-6 text-white tracking-tight font-bold leading-tight"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
            >
              {t('hero.title')}
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 font-medium max-w-2xl mx-auto leading-relaxed"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={scrollToNext}
                className="w-full sm:w-auto px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero.cta')}
              </motion.button>
              <motion.a
                href="https://bookonline.pro/es/property/350327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero.bookDirect')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
