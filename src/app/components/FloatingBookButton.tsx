import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

export function FloatingBookButton() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const lang = language === 'gl' ? 'es' : (language || 'es');
    window.open(`https://bookonline.pro/${lang}/property/350327`, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-[800] flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline">{t('float.book')}</span>
    </motion.button>
  );
}
