import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function FloatingBookButton() {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const isBookingPage =
    normalizedPath === '/booking' ||
    normalizedPath === '/reservas' ||
    normalizedPath === '/reservar' ||
    normalizedPath.startsWith('/booking');

  const [isVisible, setIsVisible] = useState(isBookingPage);

  useEffect(() => {
    if (isBookingPage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsVisible(scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBookingPage]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        isBookingPage ? (
          <motion.a
            key="float-whatsapp"
            href={`https://wa.me/34607952250?text=${encodeURIComponent('Hola! Tengo una duda sobre la reserva en Casa da Cuncheira.')}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[800] flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all cursor-pointer font-semibold text-sm sm:text-base border border-white/20"
            aria-label={t('float.whatsapp')}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="inline">{t('float.whatsapp')}</span>
          </motion.a>
        ) : (
          <motion.button
            key="float-book"
            onClick={() => navigate('/booking')}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[800] flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full shadow-2xl hover:shadow-3xl transition-all cursor-pointer font-medium"
            aria-label={t('float.book')}
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">{t('float.book')}</span>
          </motion.button>
        )
      )}
    </AnimatePresence>
  );
}

