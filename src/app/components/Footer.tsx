import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { STATIC_TEXTS } from '../constants/static';

export function Footer() {
  const { t } = useLanguage();
  const { openSettings } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-xl mb-3 tracking-wide font-semibold">{STATIC_TEXTS.brand}</div>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="inline-block px-3 py-1 bg-white/10 rounded-md text-xs text-white/80 font-medium tracking-wide">
              {t('footer.license')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">{t('footer.linksTitle')}</h4>
            <div className="space-y-2.5 text-sm">
              <button
                onClick={() => document.getElementById('house')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              >
                {t('nav.house')}
              </button>
              <button
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              >
                {t('nav.location')}
              </button>
              <button
                onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              >
                {t('nav.experiences')}
              </button>
              <Link
                to="/gastronomy"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Gastronomía
              </Link>
              <a
                href="https://bookonline.pro/es/property/350327"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {t('nav.book')}
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">{t('footer.legalTitle')}</h4>
            <div className="space-y-2.5 text-sm">
              <Link
                to="/aviso-legal"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('footer.legalNotice')}
              </Link>
              <Link
                to="/privacidad"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/cookies"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {t('footer.cookies')}
              </Link>
              <button
                type="button"
                onClick={openSettings}
                className="block text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              >
                {t('footer.cookieSettings')}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">{t('nav.contact')}</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-light">{STATIC_TEXTS.location}</p>
              <p>
                <a href={`tel:${STATIC_TEXTS.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {STATIC_TEXTS.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${STATIC_TEXTS.email}`} className="hover:text-white transition-colors">
                  {STATIC_TEXTS.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} {STATIC_TEXTS.brand}. {t('footer.rights')}.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/aviso-legal" className="hover:text-white transition-colors">
              {t('footer.legalNotice')}
            </Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              {t('footer.cookies')}
            </Link>
            <button
              type="button"
              onClick={openSettings}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              {t('footer.cookieSettings')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}