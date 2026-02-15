import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl mb-4 tracking-wide">{STATIC_TEXTS.brand}</div>
            <p className="text-white/70 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('footer.linksTitle')}</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => document.getElementById('house')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('nav.house')}
              </button>
              <button
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('nav.location')}
              </button>
              <button
                onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('nav.experiences')}
              </button>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('nav.book')}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{t('nav.contact')}</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>{STATIC_TEXTS.owner}</p>
              <p>{STATIC_TEXTS.phone}</p>
              <p>{STATIC_TEXTS.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {currentYear} {STATIC_TEXTS.brand}. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}