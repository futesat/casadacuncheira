import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { House } from './components/House';
import { Location } from './components/Location';
import { Experiences } from './components/Experiences';
import { WeatherWidget } from './components/WeatherWidget';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';
import { SEOHead } from './components/SEOHead';

const Gastronomy = lazy(() => import('./pages/Gastronomy').then(m => ({ default: m.Gastronomy })));
const NatureDetail = lazy(() => import('./pages/NatureDetail').then(m => ({ default: m.NatureDetail })));
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })));

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

function LegalPage() {
  return <Legal />;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentView = location.pathname === '/' ? 'home' : 'other';

  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
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
            <Route path="/aviso-legal" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingBookButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={(import.meta as any).env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}