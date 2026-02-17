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
import { Gastronomy } from './pages/Gastronomy';
import { NatureDetail } from './pages/NatureDetail';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero onDiscover={() => { }} />
      <Features />
      <House />
      <Location />
      <Experiences onNavigateToGastronomy={() => navigate('/gastronomy')} />
      <WeatherWidget />

    </>
  );
}

/*
    <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
*/

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

  const currentView = location.pathname === '/gastronomy' ? 'gastronomy' : 'home';

  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header onNavigateHome={() => navigate('/')} currentView={currentView} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gastronomy" element={<GastronomyPage />} />
          <Route path="/nature/:slug" element={<NaturePage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

/*
      <FloatingBookButton />
*/

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}