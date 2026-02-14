import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { House } from './components/House';
import { Location } from './components/Location';
import { Plans } from './components/Plans';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-['Inter',sans-serif]">
        <Header />
        <main>
          <Hero />
          <Features />
          <House />
          <Location />
          <Plans />
          <Testimonials />
          <FAQ />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <FloatingBookButton />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}