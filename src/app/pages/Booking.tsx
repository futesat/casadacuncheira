import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Users,
  ShieldCheck,
  Sparkles,
  Lock,
  ExternalLink,
  Phone,
  MessageCircle,
  Home,
  CheckCircle2,
  Clock,
  MapPin,
  RefreshCw,
  Waves,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { STATIC_TEXTS } from '../constants/static';

const AVAIBOOK_CHECKOUT_URL = 'https://www.avaibook.com/reservas/nueva_reserva.php';
const BASE_ENGINE_URL = 'https://bookonline.pro';
const PROPERTY_ID = '350327';
const UNIT_ID = '426498';

// Utility helper to format Date as YYYY-MM-DD
function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function Booking() {
  const { language, t } = useLanguage();
  const iframeBlockRef = useRef<HTMLDivElement>(null);

  const scrollToIframeBlock = useCallback(() => {
    if (iframeBlockRef.current) {
      const headerOffset = 90; // offset for fixed header
      const elementPosition = iframeBlockRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  }, []);

  // Calculate default dates (+3 days for checkin, +10 days for checkout)
  const defaultDates = useMemo(() => {
    const today = new Date();
    const checkinDate = new Date(today);
    checkinDate.setDate(today.getDate() + 3);

    const checkoutDate = new Date(today);
    checkoutDate.setDate(today.getDate() + 10);

    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 1);

    return {
      checkin: formatDate(checkinDate),
      checkout: formatDate(checkoutDate),
      minCheckin: formatDate(minDate),
    };
  }, []);

  const [checkin, setCheckin] = useState(defaultDates.checkin);
  const [checkout, setCheckout] = useState(defaultDates.checkout);
  const guests = '2';
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(1);

  // Safety fallback: ensure loading overlay unmounts even if mobile browser delays onLoad
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIframeLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [iframeKey]);

  // Synchronize language for AvaiBook engine (gl -> es fallback for widget)
  const engineLang = useMemo(() => {
    if (language === 'gl') return 'es';
    return language || 'es';
  }, [language]);

  // Handle checkin change and keep checkout valid
  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckin = e.target.value;
    setCheckin(newCheckin);

    // If new checkin is after or same as current checkout, push checkout ahead by 3 days
    if (newCheckin >= checkout) {
      const parts = newCheckin.split('-').map(Number);
      const nextDate = new Date(parts[0], parts[1] - 1, parts[2] + 3);
      setCheckout(formatDate(nextDate));
    }
    scrollToIframeBlock();
  };

  const handleCheckoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckout(e.target.value);
    scrollToIframeBlock();
  };

  const handleRefreshIframe = () => {
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
    scrollToIframeBlock();
  };

  // Construct iframe embed URL directly with AvaiBook checkout engine
  const iframeSrc = useMemo(() => {
    const queryParams = new URLSearchParams({
      cod_alojamiento: PROPERTY_ID,
      cod_unidad_alojativa: UNIT_ID,
      f_ini: checkin,
      f_fin: checkout,
      capacidad: guests,
      adults: guests,
      children: '0',
      babies: '0',
      lang: engineLang,
    });
    return `${AVAIBOOK_CHECKOUT_URL}?${queryParams.toString()}`;
  }, [engineLang, checkin, checkout, guests, iframeKey]);

  // Direct external booking link
  const directBookingUrl = useMemo(() => {
    const queryParams = new URLSearchParams({
      cod_alojamiento: PROPERTY_ID,
      cod_unidad_alojativa: UNIT_ID,
      f_ini: checkin,
      f_fin: checkout,
      capacidad: guests,
      adults: guests,
      children: '0',
      babies: '0',
      lang: engineLang,
    });
    return `${AVAIBOOK_CHECKOUT_URL}?${queryParams.toString()}`;
  }, [engineLang, checkin, checkout, guests]);

  const bookingStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Casa da Cuncheira',
            item: 'https://www.casadacuncheira.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('seo.bookingTitle') || 'Reserva Directa',
            item: 'https://www.casadacuncheira.com/booking',
          },
        ],
      },
      {
        '@type': 'LodgingBusiness',
        name: 'Casa da Cuncheira',
        description: 'Vivienda de Uso Turístico en Lira, Carnota (A Coruña) - VUT-CO-002236',
        url: 'https://www.casadacuncheira.com/booking',
        telephone: STATIC_TEXTS.phone,
        email: STATIC_TEXTS.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Aldea Carballal, 70',
          addressLocality: 'Lira, Carnota',
          addressRegion: 'A Coruña',
          postalCode: '15292',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 42.8033613,
          longitude: -9.1235535,
        },
        priceRange: '€€',
        maximumAttendeeCapacity: 6,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('seo.bookingTitle')}
        description={t('seo.bookingDescription')}
        canonicalUrl="https://www.casadacuncheira.com/booking"
        ogImage="https://www.casadacuncheira.com/images/hero_optimized.webp"
        ogType="website"
        structuredData={bookingStructuredData}
      />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={`${(import.meta as any).env.BASE_URL}images/house/terrace_6.webp`}
            alt="Casa da Cuncheira Terraza y Vistas al Mar"
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-background" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Casa da Cuncheira</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className="text-white font-semibold">{t('nav.book')}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-blue-200 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{t('reservas.hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {t('reservas.hero.title')}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed max-w-2xl mx-auto font-light">
              {t('reservas.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Interactive Floating Date & Guest Control Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card text-card-foreground rounded-2xl sm:rounded-3xl shadow-2xl border border-border/80 p-6 md:p-8 backdrop-blur-xl mb-12"
        >
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {t('reservas.selector.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            {/* Check-in */}
            <div>
              <label htmlFor="booking-checkin" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {t('reservas.selector.checkin')}
              </label>
              <div className="relative">
                <input
                  id="booking-checkin"
                  type="date"
                  value={checkin}
                  min={defaultDates.minCheckin}
                  onChange={handleCheckinChange}
                  aria-label={t('reservas.selector.checkin')}
                  className="w-full px-4 py-3.5 bg-muted/60 hover:bg-muted border border-border rounded-xl font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* Check-out */}
            <div>
              <label htmlFor="booking-checkout" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {t('reservas.selector.checkout')}
              </label>
              <div className="relative">
                <input
                  id="booking-checkout"
                  type="date"
                  value={checkout}
                  min={checkin || defaultDates.minCheckin}
                  onChange={handleCheckoutChange}
                  aria-label={t('reservas.selector.checkout')}
                  className="w-full px-4 py-3.5 bg-muted/60 hover:bg-muted border border-border rounded-xl font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                type="button"
                onClick={handleRefreshIframe}
                className="w-full py-3.5 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <RefreshCw className={`w-4 h-4 ${isIframeLoading ? 'animate-spin' : ''}`} />
                <span>{t('reservas.selector.updateBtn')}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Embedded Booking Engine Frame Container */}
        <div ref={iframeBlockRef} id="booking-frame" className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden mb-10 scroll-mt-24">
          {/* Header Bar of the Frame Container */}
          <div className="bg-muted/60 px-6 py-4 border-b border-border flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span>AvaiBook Secure Engine • {STATIC_TEXTS.license}</span>
            </div>
            <a
              href={directBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
            >
              <span>{t('reservas.iframe.fullscreenBtn')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Iframe Viewport with Skeleton Loader */}
          <div className="relative w-full min-h-[650px] md:min-h-[800px] bg-white">
            <AnimatePresence>
              {isIframeLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center p-8 space-y-4 pointer-events-none"
                >
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm font-medium text-slate-600 animate-pulse text-center">
                    {t('reservas.iframe.loading')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              key={iframeKey}
              src={iframeSrc}
              title="AvaiBook Booking Engine"
              onLoad={() => setIsIframeLoading(false)}
              className="w-full h-[700px] md:h-[850px] border-0 bg-white"
              allow="payment; fullscreen"
            />
          </div>

          {/* Frame Help Footer */}
          <div className="bg-slate-50 border-t border-border px-6 py-4 text-center text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>{t('reservas.iframe.help')}</span>
            <a
              href={directBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:opacity-80 inline-flex items-center gap-1"
            >
              {t('reservas.iframe.fullscreenBtn')} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Guarantees Badges Grid (Moved below booking engine) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-card/70 border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t('reservas.guarantees.bestPrice.title')}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('reservas.guarantees.bestPrice.desc')}
              </p>
            </div>
          </div>

          <div className="bg-card/70 border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t('reservas.guarantees.securePayment.title')}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('reservas.guarantees.securePayment.desc')}
              </p>
            </div>
          </div>

          <div className="bg-card/70 border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t('reservas.guarantees.directHost.title')}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('reservas.guarantees.directHost.desc')}
              </p>
            </div>
          </div>

          <div className="bg-card/70 border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {t('reservas.guarantees.instant.title')}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('reservas.guarantees.instant.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* House Highlights & Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* House Features Card */}
          <div className="lg:col-span-2 bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('reservas.house.title')}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t('reservas.house.subtitle')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/50 flex items-start gap-3">
                <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium leading-snug">
                  {t('reservas.house.featureCapacity')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/50 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium leading-snug">
                  {t('reservas.house.featureLocation')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/50 flex items-start gap-3">
                <Waves className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium leading-snug">
                  {t('reservas.house.featureGarden')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/50 flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium leading-snug">
                  {t('reservas.house.featureCheckin')}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Support & WhatsApp Card */}
          <div className="bg-gradient-to-br from-primary/5 via-card to-secondary/30 rounded-3xl border border-primary/20 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t('reservas.contact.title')}
              </h3>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                {t('reservas.contact.desc')}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/34607952250?text=${encodeURIComponent('Hola! Me gustaría consultar disponibilidad para Casa da Cuncheira.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('reservas.contact.whatsapp')}</span>
              </a>

              <a
                href={`tel:${STATIC_TEXTS.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 bg-card hover:bg-muted text-foreground text-xs sm:text-sm font-semibold rounded-xl border border-border transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{t('reservas.contact.call')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
