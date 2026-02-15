import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'gl' | 'en' | 'fr' | 'de' | 'it' | 'pt';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { es: 'Inicio', gl: 'Inicio', en: 'Home', fr: 'Accueil', de: 'Startseite', it: 'Inizio', pt: 'Início' },
  'nav.house': { es: 'La Casa', gl: 'A Casa', en: 'The House', fr: 'La Maison', de: 'Das Haus', it: 'La Casa', pt: 'A Casa' },
  'nav.location': { es: 'El Entorno', gl: 'O Contorno', en: 'Location', fr: 'Le Lieu', de: 'Die Umgebung', it: 'Dintorni', pt: 'O Entorno' },
  'nav.experiences': { es: 'Experiencias', gl: 'Experiencias', en: 'Experiences', fr: 'Expériences', de: 'Erlebnisse', it: 'Esperienze', pt: 'Experiências' },
  'nav.book': { es: 'Reservar', gl: 'Reservar', en: 'Book', fr: 'Réserver', de: 'Buchen', it: 'Prenota', pt: 'Reservar' },
  'nav.contact': { es: 'Contacto', gl: 'Contacto', en: 'Contact', fr: 'Contact', de: 'Kontakt', it: 'Contatto', pt: 'Contacto' },
  'footer.description': {
    es: 'Tu refugio en el Atlántico gallego',
    gl: 'O teu refuxio no Atlántico galego',
    en: 'Your retreat in the Galician Atlantic',
    fr: 'Votre refuge dans l\'Atlantique galicien',
    de: 'Ihr Rückzugsort im galicischen Atlantik',
    it: 'Il tuo rifugio nell\'Atlantico galiziano',
    pt: 'O seu refúgio no Atlântico galego'
  },
  'footer.linksTitle': {
    es: 'Enlaces',
    gl: 'Ligazóns',
    en: 'Links',
    fr: 'Liens',
    de: 'Links',
    it: 'Link',
    pt: 'Links'
  },

  // Hero
  'hero.title': {
    es: 'Tu refugio en la Costa da Morte',
    gl: 'O teu refuxio na Costa da Morte',
    en: 'Your retreat in Costa da Morte',
    fr: 'Votre refuge sur la Costa da Morte',
    de: 'Ihr Rückzugsort an der Costa da Morte',
    it: 'Il tuo rifugio nella Costa da Morte',
    pt: 'O seu refúgio na Costa da Morte'
  },
  'hero.subtitle': {
    es: 'Donde el Atlántico se encuentra con la tranquilidad',
    gl: 'Onde o Atlántico atopa a tranquilidade',
    en: 'Where the Atlantic meets tranquility',
    fr: 'Où l\'Atlantique rencontre la tranquillité',
    de: 'Wo der Atlantik auf Ruhe trifft',
    it: 'Dove l\'Atlantico incontra la tranquillità',
    pt: 'Onde o Atlântico encontra a tranquilidade'
  },
  'hero.cta': { es: 'Descubrir', gl: 'Descubrir', en: 'Discover', fr: 'Découvrir', de: 'Entdecken', it: 'Scopri', pt: 'Descobrir' },

  // Features
  'features.atlantic.title': { es: 'Costa Atlántica', gl: 'Costa Atlántica', en: 'Atlantic Coast', fr: 'Côte Atlantique', de: 'Atlantikküste', it: 'Costa Atlantica', pt: 'Costa Atlântica' },
  'features.atlantic.desc': { es: 'Playas salvajes y acantilados impresionantes', gl: 'Praias salvaxes e acantilados impresionantes', en: 'Wild beaches and breathtaking cliffs', fr: 'Plages sauvages et falaises à couper le souffle', de: 'Wilde Strände und atemberaubende Klippen', it: 'Spiagge selvagge e scogliere mozzafiato', pt: 'Praias selvagens e falésias deslumbrantes' },
  'features.pindo.title': { es: 'Monte Pindo', gl: 'Monte Pindo', en: 'Mount Pindo', fr: 'Mont Pindo', de: 'Berg Pindo', it: 'Monte Pindo', pt: 'Monte Pindo' },
  'features.pindo.desc': { es: 'El Olimpo celta con vistas únicas', gl: 'O Olimpo celta con vistas únicas', en: 'The Celtic Olympus with unique views', fr: 'L\'Olympe celtique avec des vues uniques', de: 'Der keltische Olymp mit einzigartigen Aussichten', it: 'L\'Olimpo celtico con viste uniche', pt: 'O Olimpo celta com vistas únicas' },
  'features.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti magici', pt: 'Pôr do sol mágico' },
  'features.sunset.desc': { es: 'Las mejores puestas de sol de Galicia', gl: 'As mellores postas de sol de Galicia', en: 'The best sunsets in Galicia', fr: 'Les meilleurs couchers de soleil de Galice', de: 'Die besten Sonnenuntergänge in Galizien', it: 'I migliori tramonti della Galizia', pt: 'O melhor pôr do sol da Galiza' },
  'features.air.title': { es: 'Aire Puro', gl: 'Aire Puro', en: 'Fresh Air', fr: 'Grand Air', de: 'Frische Luft', it: 'Aria Pura', pt: 'Ar Puro' },
  'features.air.desc': { es: 'Naturaleza en estado puro', gl: 'Natureza en estado puro', en: 'Pure nature', fr: 'La nature à l\'état pur', de: 'Natur in ihrer reinsten Form', it: 'Natura allo stato puro', pt: 'Natureza em estado puro' },

  // House
  'house.title': { es: 'Un hogar lejos de casa', gl: 'Un fogar lonxe da casa', en: 'A home away from home', fr: 'Une maison loin de chez soi', de: 'Ein Zuhause fern von Zuhause', it: 'Una casa lontano da casa', pt: 'Um lar longe de casa' },
  'house.description': {
    es: 'Espacios diseñados para el descanso y la conexión. Luz natural, comodidad moderna y la esencia gallega en cada rincón.',
    gl: 'Espazos deseñados para o descanso e a conexión. Luz natural, comodidade moderna e a esencia galega en cada recuncho.',
    en: 'Spaces designed for rest and connection. Natural light, modern comfort, and Galician essence in every corner.',
    fr: 'Espaces conçus pour le repos et la connexion. Lumière naturelle, confort moderne et essence galicienne dans chaque coin.',
    de: 'Räume für Ruhe und Verbindung. Natürliches Licht, moderner Komfort und galizisches Flair in jeder Ecke.',
    it: 'Spazi pensati per il riposo e la connessione. Luce naturale, comfort moderno ed essenza galiziana in ogni angolo.',
    pt: 'Espaços pensados para o descanso e a ligação. Luz natural, conforto moderno e essência galega em cada canto.'
  },
  'house.bedrooms': { es: 'habitaciones', gl: 'cuartos', en: 'bedrooms', fr: 'chambres', de: 'Schlafzimmer', it: 'camere da letto', pt: 'quartos' },
  'house.bathrooms': { es: 'baños', gl: 'baños', en: 'bathrooms', fr: 'salles de bain', de: 'Badezimmer', it: 'bagni', pt: 'casas de banho' },
  'house.capacity': { es: 'personas', gl: 'persoas', en: 'guests', fr: 'personnes', de: 'Personen', it: 'persone', pt: 'pessoas' },
  'house.amenities.wifi': { es: 'Wifi', gl: 'Wifi', en: 'WiFi', fr: 'Wi-Fi', de: 'WLAN', it: 'Wi-Fi', pt: 'Wi-Fi' },
  'house.amenities.tv': { es: 'Smart TV', gl: 'Smart TV', en: 'Smart TV', fr: 'Smart TV', de: 'Smart TV', it: 'Smart TV', pt: 'Smart TV' },
  'house.amenities.kitchen': { es: 'Cocina', gl: 'Cociña', en: 'Kitchen', fr: 'Cuisine', de: 'Küche', it: 'Cucina', pt: 'Cozinha' },
  'house.amenities.heating': { es: 'Calefacción', gl: 'Calefacción', en: 'Heating', fr: 'Chauffage', de: 'Heizung', it: 'Riscaldamento', pt: 'Aquecimento' },
  'house.amenities.view': { es: 'Vistas al mar', gl: 'Vistas ao mar', en: 'Ocean View', fr: 'Vue sur la mer', de: 'Meerblick', it: 'Vista mare', pt: 'Vista para o mar' },

  // Location
  'location.title': { es: 'Naturaleza en estado puro', gl: 'Natureza en estado puro', en: 'Pure nature', fr: 'Nature pure', de: 'Reine Natur', it: 'Natura allo stato puro', pt: 'Natureza em estado puro' },
  'location.description': {
    es: 'Explora playas salvajes, montañas místicas y pueblos con alma. La Costa da Morte te espera.',
    gl: 'Explora praias salvaxes, montañas místicas e pobos con alma. A Costa da Morte espérate.',
    en: 'Explore wild beaches, mystical mountains, and soulful villages. Costa da Morte awaits.',
    fr: 'Explorez plages sauvages, montagnes mystiques et villages authentiques. La Costa da Morte vous attend.',
    de: 'Erkunden Sie wilde Strände, mystische Berge und authentische Dörfer. Die Costa da Morte wartet auf Sie.',
    it: 'Esplora spiagge selvagge, montagne mistiche e villaggi pieni di anima. La Costa da Morte ti aspetta.',
    pt: 'Explore praias selvagens, montanhas místicas e aldeias com alma. A Costa da Morte espera por si.'
  },

  // Experiences
  'experiences.title': { es: 'Experiencias únicas', gl: 'Experiencias únicas', en: 'Unique experiences', fr: 'Expériences uniques', de: 'Einzigartige Erlebnisse', it: 'Esperienze uniche', pt: 'Experiências únicas' },
  'experiences.filter.all': { es: 'Todos', gl: 'Todos', en: 'All', fr: 'Tous', de: 'Alle', it: 'Tutti', pt: 'Todos' },
  'experiences.filter.nature': { es: 'Naturaleza', gl: 'Natureza', en: 'Nature', fr: 'Nature', de: 'Natur', it: 'Natura', pt: 'Natureza' },
  'experiences.filter.adventure': { es: 'Aventura', gl: 'Aventura', en: 'Adventure', fr: 'Aventure', de: 'Abenteuer', it: 'Avventura', pt: 'Aventura' },
  'experiences.filter.gastronomy': { es: 'Gastronomía', gl: 'Gastronomía', en: 'Gastronomy', fr: 'Gastronomie', de: 'Gastronomie', it: 'Gastronomia', pt: 'Gastronomia' },
  'experiences.filter.relax': { es: 'Relax', gl: 'Relax', en: 'Relax', fr: 'Détente', de: 'Entspannung', it: 'Relax', pt: 'Relax' },
  'experiences.filter.culture': { es: 'Cultura', gl: 'Cultura', en: 'Culture', fr: 'Culture', de: 'Kultur', it: 'Cultura', pt: 'Cultura' },

  // Booking
  'booking.title': { es: 'Reserva tu escapada', gl: 'Reserva a túa fuxida', en: 'Book your escape', fr: 'Réservez votre escapade', de: 'Buchen Sie Ihren Aufenthalt', it: 'Prenota la tua fuga', pt: 'Reserve a sua escapadela' },
  'booking.checkin': { es: 'Entrada', gl: 'Entrada', en: 'Check-in', fr: 'Arrivée', de: 'Anreise', it: 'Arrivo', pt: 'Check-in' },
  'booking.checkout': { es: 'Salida', gl: 'Saída', en: 'Check-out', fr: 'Départ', de: 'Abreise', it: 'Partenza', pt: 'Check-out' },
  'booking.guests': { es: 'Huéspedes', gl: 'Hóspedes', en: 'Guests', fr: 'Invités', de: 'Gäste', it: 'Ospiti', pt: 'Hóspedes' },
  'booking.name': { es: 'Nombre', gl: 'Nome', en: 'Name', fr: 'Nom', de: 'Name', it: 'Nome', pt: 'Nome' },
  'booking.email': { es: 'Email', gl: 'Email', en: 'Email', fr: 'Email', de: 'E-Mail', it: 'Email', pt: 'E-mail' },
  'booking.phone': { es: 'Teléfono', gl: 'Teléfono', en: 'Phone', fr: 'Téléphone', de: 'Telefon', it: 'Telefono', pt: 'Telefone' },
  'booking.message': { es: 'Mensaje', gl: 'Mensaxe', en: 'Message', fr: 'Message', de: 'Nachricht', it: 'Messaggio', pt: 'Mensagem' },
  'booking.submit': { es: 'Solicitar reserva', gl: 'Solicitar reserva', en: 'Request booking', fr: 'Demander une réservation', de: 'Buchung anfragen', it: 'Richiedi prenotazione', pt: 'Solicitar reserva' },
  'booking.note': { es: 'Sin compromiso • Confirmación rápida', gl: 'Sen compromiso • Confirmación rápida', en: 'No commitment • Quick confirmation', fr: 'Sans engagement • Confirmation rapide', de: 'Ohne Verpflichtung • Schnelle Bestätigung', it: 'Senza impegno • Conferma rapida', pt: 'Sem compromisso • Confirmação rápida' },

  // Contact
  'contact.title': { es: 'Estamos aquí para ayudarte', gl: 'Estamos aquí para axudarche', en: 'We\'re here to help', fr: 'Nous sommes là pour vous aider', de: 'Wir sind für Sie da', it: 'Siamo qui per aiutarti', pt: 'Estamos aqui para ayudar' },
  'contact.description': {
    es: 'Contacta con nosotros para cualquier pregunta. Responderemos lo antes posible.',
    gl: 'Contacta connosco para calquera pregunta. Responderemos o antes posible.',
    en: 'Contact us with any questions. We\'ll respond as soon as possible.',
    fr: 'Contactez-nous pour toute question. Nous vous répondrons dès que possible.',
    de: 'Kontaktieren Sie uns bei Fragen. Wir antworten so schnell wie möglich.',
    it: 'Contattaci per qualsiasi domanda. Ti risponderemo il prima possibile.',
    pt: 'Contacte-nos para qualquer questão. Responderemos o mais breve possível.'
  },
  'contact.email': { es: 'Email', gl: 'Email', en: 'Email', fr: 'Email', de: 'E-Mail', it: 'Email', pt: 'E-mail' },
  'contact.phone': { es: 'Teléfono', gl: 'Teléfono', en: 'Phone', fr: 'Téléphone', de: 'Telefon', it: 'Telefono', pt: 'Telefone' },
  'contact.location': { es: 'Ubicación', gl: 'Ubicación', en: 'Location', fr: 'Localisation', de: 'Standort', it: 'Ubicazione', pt: 'Localização' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', gl: 'Todos os dereitos reservados', en: 'All rights reserved', fr: 'Tous droits réservés', de: 'Alle Rechte vorbehalten', it: 'Tutti i diritti riservati', pt: 'Todos os direitos reservados' },

  // Floating button
  'float.book': { es: 'Reservar ahora', gl: 'Reservar agora', en: 'Book now', fr: 'Réserver maintenant', de: 'Jetzt buchen', it: 'Prenota ora', pt: 'Reservar agora' },

  // Locations & Plans
  'location.carnota.title': { es: 'Playa de Carnota', gl: 'Praia de Carnota', en: 'Carnota Beach', fr: 'Plage de Carnota', de: 'Strand von Carnota', it: 'Spiaggia di Carnota', pt: 'Praia de Carnota' },
  'location.carnota.desc': { es: 'Una de las playas más largas de Galicia, perfecta para paseos infinitos', gl: 'Unha das praias máis longas de Galicia, perfecta para paseos infinitos', en: 'One of the longest beaches in Galicia, perfect for infinite walks', fr: 'L\'une des plus longues plages de Galice, parfaite pour des promenades infinies', de: 'Einer der längsten Strände Galiziens, perfekt für endlose Spaziergänge', it: 'Una delle spiagge più lunghe della Galizia, perfetta per passeggiate infinite', pt: 'Uma das praias mais longas da Galiza, perfeita para passeios infinitos' },
  'location.pindo.title': { es: 'Monte Pindo', gl: 'Monte Pindo', en: 'Mount Pindo', fr: 'Mont Pindo', de: 'Berg Pindo', it: 'Monte Pindo', pt: 'Monte Pindo' },
  'location.pindo.desc': { es: 'El Olimpo celta, con vistas espectaculares del Atlántico', gl: 'O Olimpo celta, con vistas espectaculares do Atlántico', en: 'The Celtic Olympus, with spectacular views of the Atlantic', fr: 'L\'Olympe celtique, avec des vues spectaculaires sur l\'Atlantique', de: 'Der keltische Olymp mit spektakulärem Blick auf den Atlantik', it: 'L\'Olimpo celtico, con viste spettacolari sull\'Atlantico', pt: 'O Olimpo celta, com vistas espetaculares do Atlântico' },
  'location.gastronomy.title': { es: 'Gastronomía Local', gl: 'Gastronomía Local', en: 'Local Gastronomy', fr: 'Gastronomie Locale', de: 'Lokale Gastronomie', it: 'Gastronomia Locale', pt: 'Gastronomia Local' },
  'location.gastronomy.desc': { es: 'Pulpo, percebes, mariscos frescos del Atlántico', gl: 'Polbo, percebes, mariscos frescos do Atlántico', en: 'Octopus, barnacles, fresh Atlantic seafood', fr: 'Poulpe, pouces-pieds, fruits de mer frais de l\'Atlantique', de: 'Oktopus, Entenmuscheln, frische Atlantik-Meeresfrüchte', it: 'Polpo, percebes, pesce fresco dell\'Atlantico', pt: 'Polvo, percebes, marisco fresco do Atlântico' },
  'location.villages.title': { es: 'Pueblos Históricos', gl: 'Pobos Históricos', en: 'Historic Villages', fr: 'Villages Historiques', de: 'Historische Dörfer', it: 'Borghi Storici', pt: 'Aldeias Históricas' },
  'location.villages.desc': { es: 'Muros, Cee, pueblos marineros con encanto auténtico', gl: 'Muros, Cee, pobos mariñeiros con encanto auténtico', en: 'Muros, Cee, seafaring villages with authentic charm', fr: 'Muros, Cee, villages de pêcheurs au charme authentique', de: 'Muros, Cee, Seefahrerdörfer mit authentischem Charme', it: 'Muros, Cee, villaggi marinari dal fascino autentico', pt: 'Muros, Cee, aldeias marítimas com charme autêntico' },

  'experiences.hiking.title': { es: 'Senderismo por el Monte Pindo', gl: 'Sendeirismo polo Monte Pindo', en: 'Hiking Mount Pindo', fr: 'Randonnée au Mont Pindo', de: 'Wandern auf den Berg Pindo', it: 'Escursionismo sul Monte Pindo', pt: 'Caminhadas pelo Monte Pindo' },
  'experiences.hiking.desc': { es: 'Ruta de 3 horas por el monte sagrado celta', gl: 'Ruta de 3 horas polo monte sagrado celta', en: '3-hour route through the sacred Celtic mountain', fr: 'Itinéraire de 3 heures à travers la montagne sacrée celtique', de: '3-stündige Route durch den heiligen keltischen Berg', it: 'Percorso di 3 ore attraverso la sacra montagna celtica', pt: 'Percurso de 3 horas pela montanha sagrada celta' },
  'experiences.surf.title': { es: 'Surf en la Costa da Morte', gl: 'Surf na Costa da Morte', en: 'Surf in Costa da Morte', fr: 'Surf sur la Costa da Morte', de: 'Surfen an der Costa da Morte', it: 'Surf nella Costa da Morte', pt: 'Surf na Costa da Morte' },
  'experiences.surf.desc': { es: 'Clases de surf en las mejores olas del Atlántico', gl: 'Clases de surf nas mellores ondas do Atlántico', en: 'Surf lessons in the best waves of the Atlantic', fr: 'Cours de surf dans las meilleures vagues de l\'Atlantique', de: 'Surfkurse in den besten Wellen des Atlantiks', it: 'Lezioni di surf nelle migliori onde dell\'Atlantico', pt: 'Aulas de surf nas melhores ondas do Atlântico' },
  'experiences.gastro.title': { es: 'Ruta Gastronómica', gl: 'Ruta Gastronómica', en: 'Gastronomic Route', fr: 'Route Gastronomique', de: 'Gastronomische Route', it: 'Percorso Gastronomico', pt: 'Rota Gastronómica' },
  'experiences.gastro.desc': { es: 'Degustación de pulpo, percebes y vinos gallegos', gl: 'Degustación de polbo, percebes e viños galegos', en: 'Tasting of octopus, barnacles, and Galician wines', fr: 'Dégustation de poulpe, pouces-pieds et vins galiciens', de: 'Verkostung von Oktopus, Entenmuscheln und galizischen Weinen', it: 'Degustazione di polpo, percebes e vini galiziani', pt: 'Degustação de polvo, percebes e vinhos galegos' },
  'experiences.kayak.title': { es: 'Kayak por la Costa', gl: 'Kaiak pola Costa', en: 'Coastal Kayaking', fr: 'Kayak Côtier', de: 'Küsten-Kajakfahren', it: 'Kayak sulla Costa', pt: 'Kayak pela Costa' },
  'experiences.kayak.desc': { es: 'Explora acantilados y cuevas marinas', gl: 'Explora acantilados e covas mariñas', en: 'Explore cliffs and sea caves', fr: 'Explorez les falaises et les govtes marines', de: 'Erkunden Sie Klippen und Meereshöhlen', it: 'Esplora scogliere e grotte marine', pt: 'Explore falésias e cavernas marinhas' },
  'experiences.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil Magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti Magici', pt: 'Pôr do sol Mágico' },
  'experiences.sunset.desc': { es: 'Observa las mejores puestas de sol de Galicia', gl: 'Observa as mellores postas de sol de Galicia', en: 'Watch the best sunsets in Galicia', fr: 'Observez les meilleurs couchers de soleil de Galice', de: 'Beobachten Sie die besten Sonnenuntergänge in Galizien', it: 'Guarda i migliori tramonti della Galizia', pt: 'Veja os mejores pores do sol da Galiza' },
  'experiences.villages.title': { es: 'Pueblos Marineros', gl: 'Pobos Mariñeiros', en: 'Seafaring Villages', fr: 'Villages de Pêcheurs', de: 'Seefahrerdörfer', it: 'Villaggi Marinari', pt: 'Aldeias de Pescadores' },
  'experiences.villages.desc': { es: 'Visita Muros, Cee y otros pueblos con historia', gl: 'Visita Muros, Cee e outros pobos con historia', en: 'Visit Muros, Cee, and other historic villages', fr: 'Visitez Muros, Cee et d\'autres villages chargés d\'histoire', de: 'Besuchen Sie Muros, Cee und andere geschichtsträchtige Dörfer', it: 'Visita Muros, Cee e altri borghi storici', pt: 'Visite Muros, Cee e outras aldeias históricas' },
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
