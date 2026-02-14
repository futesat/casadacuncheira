import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'gl' | 'en' | 'fr' | 'de';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { es: 'Inicio', gl: 'Inicio', en: 'Home', fr: 'Accueil', de: 'Startseite' },
  'nav.house': { es: 'La Casa', gl: 'A Casa', en: 'The House', fr: 'La Maison', de: 'Das Haus' },
  'nav.location': { es: 'El Entorno', gl: 'O Contorno', en: 'Location', fr: 'Le Lieu', de: 'Die Umgebung' },
  'nav.plans': { es: 'Planes', gl: 'Plans', en: 'Plans', fr: 'Plans', de: 'Pläne' },
  'nav.book': { es: 'Reservar', gl: 'Reservar', en: 'Book', fr: 'Réserver', de: 'Buchen' },
  'nav.contact': { es: 'Contacto', gl: 'Contacto', en: 'Contact', fr: 'Contact', de: 'Kontakt' },
  
  // Hero
  'hero.title': { 
    es: 'Tu refugio en la Costa da Morte', 
    gl: 'O teu refuxio na Costa da Morte', 
    en: 'Your retreat in Costa da Morte', 
    fr: 'Votre refuge sur la Costa da Morte', 
    de: 'Ihr Rückzugsort an der Costa da Morte' 
  },
  'hero.subtitle': { 
    es: 'Donde el Atlántico se encuentra con la tranquilidad', 
    gl: 'Onde o Atlántico atopa a tranquilidade', 
    en: 'Where the Atlantic meets tranquility', 
    fr: 'Où l\'Atlantique rencontre la tranquillité', 
    de: 'Wo der Atlantik auf Ruhe trifft' 
  },
  'hero.cta': { es: 'Descubrir', gl: 'Descubrir', en: 'Discover', fr: 'Découvrir', de: 'Entdecken' },
  
  // House
  'house.title': { es: 'Un hogar lejos de casa', gl: 'Un fogar lonxe da casa', en: 'A home away from home', fr: 'Une maison loin de chez soi', de: 'Ein Zuhause fern von Zuhause' },
  'house.description': { 
    es: 'Espacios diseñados para el descanso y la conexión. Luz natural, comodidad moderna y la esencia gallega en cada rincón.', 
    gl: 'Espazos deseñados para o descanso e a conexión. Luz natural, comodidade moderna e a esencia galega en cada recuncho.', 
    en: 'Spaces designed for rest and connection. Natural light, modern comfort, and Galician essence in every corner.', 
    fr: 'Espaces conçus pour le repos et la connexion. Lumière naturelle, confort moderne et essence galicienne dans chaque coin.', 
    de: 'Räume für Ruhe und Verbindung. Natürliches Licht, moderner Komfort und galizisches Flair in jeder Ecke.' 
  },
  'house.bedrooms': { es: 'habitaciones', gl: 'cuartos', en: 'bedrooms', fr: 'chambres', de: 'Schlafzimmer' },
  'house.bathrooms': { es: 'baños', gl: 'baños', en: 'bathrooms', fr: 'salles de bain', de: 'Badezimmer' },
  'house.capacity': { es: 'personas', gl: 'persoas', en: 'guests', fr: 'personnes', de: 'Personen' },
  
  // Location
  'location.title': { es: 'Naturaleza en estado puro', gl: 'Natureza en estado puro', en: 'Pure nature', fr: 'Nature pure', de: 'Reine Natur' },
  'location.description': { 
    es: 'Explora playas salvajes, montañas místicas y pueblos con alma. La Costa da Morte te espera.', 
    gl: 'Explora praias salvaxes, montañas místicas e pobos con alma. A Costa da Morte espérate.', 
    en: 'Explore wild beaches, mystical mountains, and soulful villages. Costa da Morte awaits.', 
    fr: 'Explorez plages sauvages, montagnes mystiques et villages authentiques. La Costa da Morte vous attend.', 
    de: 'Erkunden Sie wilde Strände, mystische Berge und authentische Dörfer. Die Costa da Morte wartet auf Sie.' 
  },
  
  // Plans
  'plans.title': { es: 'Experiencias únicas', gl: 'Experiencias únicas', en: 'Unique experiences', fr: 'Expériences uniques', de: 'Einzigartige Erlebnisse' },
  'plans.filter.all': { es: 'Todos', gl: 'Todos', en: 'All', fr: 'Tous', de: 'Alle' },
  'plans.filter.nature': { es: 'Naturaleza', gl: 'Natureza', en: 'Nature', fr: 'Nature', de: 'Natur' },
  'plans.filter.adventure': { es: 'Aventura', gl: 'Aventura', en: 'Adventure', fr: 'Aventure', de: 'Abenteuer' },
  'plans.filter.gastronomy': { es: 'Gastronomía', gl: 'Gastronomía', en: 'Gastronomy', fr: 'Gastronomie', de: 'Gastronomie' },
  'plans.filter.relax': { es: 'Relax', gl: 'Relax', en: 'Relax', fr: 'Détente', de: 'Entspannung' },
  'plans.filter.culture': { es: 'Cultura', gl: 'Cultura', en: 'Culture', fr: 'Culture', de: 'Kultur' },
  
  // Booking
  'booking.title': { es: 'Reserva tu escapada', gl: 'Reserva a túa fuxida', en: 'Book your escape', fr: 'Réservez votre escapade', de: 'Buchen Sie Ihren Aufenthalt' },
  'booking.checkin': { es: 'Entrada', gl: 'Entrada', en: 'Check-in', fr: 'Arrivée', de: 'Anreise' },
  'booking.checkout': { es: 'Salida', gl: 'Saída', en: 'Check-out', fr: 'Départ', de: 'Abreise' },
  'booking.guests': { es: 'Huéspedes', gl: 'Hóspedes', en: 'Guests', fr: 'Invités', de: 'Gäste' },
  'booking.name': { es: 'Nombre', gl: 'Nome', en: 'Name', fr: 'Nom', de: 'Name' },
  'booking.email': { es: 'Email', gl: 'Email', en: 'Email', fr: 'Email', de: 'E-Mail' },
  'booking.phone': { es: 'Teléfono', gl: 'Teléfono', en: 'Phone', fr: 'Téléphone', de: 'Telefon' },
  'booking.message': { es: 'Mensaje', gl: 'Mensaxe', en: 'Message', fr: 'Message', de: 'Nachricht' },
  'booking.submit': { es: 'Solicitar reserva', gl: 'Solicitar reserva', en: 'Request booking', fr: 'Demander une réservation', de: 'Buchung anfragen' },
  'booking.note': { es: 'Sin compromiso • Confirmación rápida', gl: 'Sen compromiso • Confirmación rápida', en: 'No commitment • Quick confirmation', fr: 'Sans engagement • Confirmation rapide', de: 'Ohne Verpflichtung • Schnelle Bestätigung' },
  
  // Contact
  'contact.title': { es: 'Estamos aquí para ayudarte', gl: 'Estamos aquí para axudarche', en: 'We\'re here to help', fr: 'Nous sommes là pour vous aider', de: 'Wir sind für Sie da' },
  'contact.description': { 
    es: 'Contacta con nosotros para cualquier pregunta. Responderemos lo antes posible.', 
    gl: 'Contacta connosco para calquera pregunta. Responderemos o antes posible.', 
    en: 'Contact us with any questions. We\'ll respond as soon as possible.', 
    fr: 'Contactez-nous pour toute question. Nous vous répondrons dès que possible.', 
    de: 'Kontaktieren Sie uns bei Fragen. Wir antworten so schnell wie möglich.' 
  },
  
  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', gl: 'Todos os dereitos reservados', en: 'All rights reserved', fr: 'Tous droits réservés', de: 'Alle Rechte vorbehalten' },
  
  // Floating button
  'float.book': { es: 'Reservar ahora', gl: 'Reservar agora', en: 'Book now', fr: 'Réserver maintenant', de: 'Jetzt buchen' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
