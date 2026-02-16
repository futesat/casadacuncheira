import { useState, useEffect } from 'react';
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

export default function App() {
  const [view, setView] = useState<'home' | 'gastronomia'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-['Inter',sans-serif]">
        <Header />
        <main>
          {view === 'home' ? (
            <>
              <Hero onDiscover={() => setView('home')} />
              <Features />
              <House />
              <Location />
              <Experiences onNavigateToGastronomy={() => setView('gastronomia')} />
              <WeatherWidget />
              <Testimonials />
              <FAQ />
              <Booking />
              <Contact />
            </>
          ) : (
            <Gastronomy onBack={() => setView('home')} />
          )}
        </main>
        <Footer />
        <FloatingBookButton />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}