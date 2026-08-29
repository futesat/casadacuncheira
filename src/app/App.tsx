import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { House } from './components/House';
import { Location } from './components/Location';
import { Experiences } from './components/Experiences';
import { WeatherWidget } from './components/WeatherWidget';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import { CookieBanner } from './components/CookieBanner';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';
import { SEOHead } from './components/SEOHead';

const Gastronomy = lazy(() => import('./pages/Gastronomy').then(m => ({ default: m.Gastronomy })));
const NatureDetail = lazy(() => import('./pages/NatureDetail').then(m => ({ default: m.NatureDetail })));
const Booking = lazy(() => import('./pages/Booking').then(m => ({ default: m.Booking })));
const LegalNotice = lazy(() => import('./pages/LegalNotice').then(m => ({ default: m.LegalNotice })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        canonicalUrl="https://www.casadacuncheira.com/"
        ogType="website"
      />
      <Hero onDiscover={() => { }} />
      <Features />
      <House />
      <Location />
      <Experiences onNavigateToGastronomy={() => navigate('/gastronomy')} />
      <Testimonials />
      <FAQ />
      <Contact />
      <WeatherWidget />
    </>
  );
}

function GastronomyPage() {
  const navigate = useNavigate();

  return <Gastronomy onBack={() => navigate('/')} />;
}

function NaturePage() {
  return <NatureDetail />;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentView = location.pathname === '/' ? 'home' : 'other';

  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif] overflow-x-hidden">
      <Header onNavigateHome={() => navigate('/')} currentView={currentView} />
      <main>
        <Suspense fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gastronomy" element={<GastronomyPage />} />
            <Route path="/nature/:slug" element={<NaturePage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/reservas" element={<Navigate to="/booking" replace />} />
            <Route path="/reservar" element={<Navigate to="/booking" replace />} />
            <Route path="/lira-carnota" element={<Navigate to="/nature/lira-carnota" replace />} />
            <Route path="/que-ver-en-carnota" element={<Navigate to="/nature/que-ver-en-carnota" replace />} />
            <Route path="/praia-carnota" element={<Navigate to="/nature/praia-carnota" replace />} />
            <Route path="/monte-pindo" element={<Navigate to="/nature/monte-pindo" replace />} />
            <Route path="/monte-louro" element={<Navigate to="/nature/monte-louro" replace />} />
            <Route path="/fervenza-do-ezaro" element={<Navigate to="/nature/fervenza-do-ezaro" replace />} />
            <Route path="/cabo-finisterre" element={<Navigate to="/nature/cabo-finisterre" replace />} />
            
            {/* Legal Routes */}
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            
            {/* Legacy & Synonym Redirects */}
            <Route path="/legal" element={<Navigate to="/aviso-legal" replace />} />
            <Route path="/aviso-legal-y-privacidad" element={<Navigate to="/aviso-legal" replace />} />
            <Route path="/politica-de-privacidad" element={<Navigate to="/privacidad" replace />} />
            <Route path="/politica-de-cookies" element={<Navigate to="/cookies" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingBookButton />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <BrowserRouter basename={(import.meta as any).env.BASE_URL}>
          <AppContent />
        </BrowserRouter>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}