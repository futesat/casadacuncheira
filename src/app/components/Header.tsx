import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FOOTER_TEXTS } from '../constants/footer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'es', name: 'ES', flag: `${import.meta.env.BASE_URL}images/flags/es.png` },
    { code: 'gl', name: 'GL', flag: `${import.meta.env.BASE_URL}images/flags/gl.svg` },
    { code: 'en', name: 'EN', flag: `${import.meta.env.BASE_URL}images/flags/en.png` },
    { code: 'fr', name: 'FR', flag: `${import.meta.env.BASE_URL}images/flags/fr.png` },
    { code: 'de', name: 'DE', flag: `${import.meta.env.BASE_URL}images/flags/de.png` },
    { code: 'it', name: 'IT', flag: `${import.meta.env.BASE_URL}images/flags/it.png` },
    { code: 'pt', name: 'PT', flag: `${import.meta.env.BASE_URL}images/flags/pt.png` },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setShowMobileMenu(false);

      // Small delay to allow the menu animation to start and avoid layout conflicts
      setTimeout(() => {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl tracking-wide hover:opacity-70 transition-opacity z-10 ${isScrolled ? 'text-foreground' : 'text-white'
              }`}
          >
            {FOOTER_TEXTS.brand}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('house')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {t('nav.house')}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {t('nav.location')}
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {t('nav.experiences')}
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {t('nav.book')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Right Side - Language & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isScrolled
                  ? 'hover:bg-secondary/50'
                  : 'hover:bg-white/20 text-white'
                  }`}
              >
                <Globe className="w-4 h-4" />
                <img
                  src={languages.find(l => l.code === language)?.flag}
                  alt={language}
                  className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                />
                <span className="uppercase text-sm font-medium">{language}</span>
              </button>

              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[100px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-secondary transition-colors text-foreground flex items-center gap-3 ${language === lang.code ? 'bg-secondary' : ''
                        }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                      />
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled
                ? 'hover:bg-secondary/50'
                : 'hover:bg-white/20 text-white'
                }`}
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('house')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t('nav.house')}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t('nav.location')}
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t('nav.experiences')}
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t('nav.book')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}