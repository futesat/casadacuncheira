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
  'nav.faq': { es: 'FAQ', gl: 'FAQ', en: 'FAQ', fr: 'FAQ', de: 'FAQ', it: 'FAQ', pt: 'FAQ' },
  'nav.contact': { es: 'Contacto', gl: 'Contacto', en: 'Contact', fr: 'Contact', de: 'Kontakt', it: 'Contatto', pt: 'Contacto' },
  'footer.description': {
    es: 'Tu refugio na Costa da Morte',
    gl: 'O teu refuxio na Costa da Morte',
    en: 'Your retreat in Costa da Morte',
    fr: 'Votre refuge sur la Costa da Morte',
    de: 'Ihr Rückzugsort an der Costa da Morte',
    it: 'Il tuo rifugio nella Costa da Morte',
    pt: 'O seu refúgio na Costa da Morte'
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
    es: 'Tu refugio na Costa da Morte',
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
  'features.atlantic.desc': { es: 'Playas salvajes y horizontes infinitos', gl: 'Praias salvaxes e horizontes infinitos', en: 'Wild beaches and infinite horizons', fr: 'Plages sauvages et horizons infinis', de: 'Wilde Strände und unendliche Horizonte', it: 'Spiagge selvagge e orizzonti infiniti', pt: 'Praias selvagens e horizontes infinitos' },
  'features.pindo.title': { es: 'Monte Pindo', gl: 'Monte Pindo', en: 'Monte Pindo', fr: 'Monte Pindo', de: 'Monte Pindo', it: 'Monte Pindo', pt: 'Monte Pindo' },
  'features.pindo.desc': { es: 'El Olimpo celta con vistas únicas', gl: 'O Olimpo celta con vistas únicas', en: 'The Celtic Olympus with unique views', fr: 'L\'Olympe celtique avec des vues uniques', de: 'Der keltische Olymp mit einzigartigen Aussichten', it: 'L\'Olimpo celtico con viste uniche', pt: 'O Olimpo celta com vistas únicas' },
  'features.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti magici', pt: 'Pôr do sol mágico' },
  'features.sunset.desc': { es: 'Las mejores puestas de sol de Galicia', gl: 'As mellores postas de sol de Galicia', en: 'The best sunsets in Galicia', fr: 'Les meilleurs couchers de soleil de Galice', de: 'Die besten Sonnenuntergänge in Galizien', it: 'I migliori tramonti della Galizia', pt: 'O melhor pôr do sol da Galiza' },
  'features.air.title': { es: 'Naturaleza en estado puro', gl: 'Natureza en estado puro', en: 'Pure nature', fr: 'La nature à l\'état pur', de: 'Natur in ihrer reinsten Form', it: 'Natura allo stato puro', pt: 'Natureza em estado puro' },
  'features.air.desc': { es: 'Un destino esculpido por el mar', gl: 'Un destino esculpido polo mar', en: 'A destination sculpted by the sea', fr: 'Une destination sculptée par la mer', de: 'Ein vom Meer geformtes Reiseziel', it: 'Una destinazione scolpita dal mare', pt: 'Um destino esculpido pelo mar' },

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
  'house.amenities.kitchen': { es: 'Cocina equipada', gl: 'Cociña equipada', en: 'Fully equipped kitchen', fr: 'Cuisine équipée', de: 'Voll ausgestattete Küche', it: 'Cucina attrezzata', pt: 'Cozinha equipada' },
  'house.amenities.heating': { es: 'Calefacción', gl: 'Calefacción', en: 'Heating', fr: 'Chauffage', de: 'Heizung', it: 'Riscaldamento', pt: 'Aquecimento' },
  'house.amenities.view': { es: 'Vistas al mar', gl: 'Vistas ao mar', en: 'Ocean View', fr: 'Vue sur la mer', de: 'Meerblick', it: 'Vista mare', pt: 'Vista para o mar' },
  'house.amenities.ac': { es: 'Aire acondicionado', gl: 'Aire acondicionado', en: 'Air conditioning', fr: 'Climatisation', de: 'Klimaanlage', it: 'Aria condizionata', pt: 'Ar condicionado' },
  'house.amenities.garden': { es: 'Jardín', gl: 'Xardín', en: 'Garden', fr: 'Jardin', de: 'Garten', it: 'Giardino', pt: 'Jardim' },

  // Location
  'location.title': { es: 'Naturaleza en estado puro', gl: 'Natureza en estado puro', en: 'Pure nature', fr: 'Nature pure', de: 'Reine Natur', it: 'Natura allo stato puro', pt: 'Natureza em estado puro' },
  'location.description': {
    es: 'Allí donde la memoria del océano habita en la roca y la tierra abraza el eterno latido del Atlántico.',
    gl: 'Alí onde a memoria do océano habita na rocha e a terra abraza o eterno latexo do Atlántico.',
    en: "There where the ocean's memory dwells in the rock and the land embraces the eternal heartbeat of the Atlantic.",
    fr: "Là où la mémoire de l'océan habite la roche et la terre embrasse le battement éternel de l'Atlantique.",
    de: 'Dort, wo das Gedächtnis des Ozeans im Fels wohnt und die Erde den ewigen Herzschlag des Atlantiks umarmt.',
    it: "Lì dove la memoria dell'oceano abita nella roccia e la terra abbraccia l'eterno battito dell'Atlantico.",
    pt: 'Ali onde a memória do oceano habita na rocha e a terra abraça o eterno pulsar do Atlântico.'
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
  'contact.mapTitle': {
    es: 'Ubicación de Casa da Cuncheira',
    gl: 'Ubicación de Casa da Cuncheira',
    en: 'Location of Casa da Cuncheira',
    fr: 'Emplacement de Casa da Cuncheira',
    de: 'Standort von Casa da Cuncheira',
    it: 'Posizione di Casa da Cuncheira',
    pt: 'Localização de Casa da Cuncheira'
  },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', gl: 'Todos os dereitos reservados', en: 'All rights reserved', fr: 'Tous droits réservés', de: 'Alle Rechte vorbehalten', it: 'Tutti i diritti riservati', pt: 'Todos os direitos reservados' },

  // Floating button
  'float.book': { es: 'Reservar ahora', gl: 'Reservar agora', en: 'Book now', fr: 'Réserver maintenant', de: 'Jetzt buchen', it: 'Prenota ora', pt: 'Reservar agora' },

  // Locations & Plans
  'location.carnota.title': { es: 'Playa de Carnota', gl: 'Praia de Carnota', en: 'Carnota Beach', fr: 'Plage de Carnota', de: 'Strand von Carnota', it: 'Spiaggia di Carnota', pt: 'Praia de Carnota' },
  'location.carnota.desc': { es: 'Una de las playas más largas de Galicia, perfecta para paseos infinitos', gl: 'Unha das praias máis longas de Galicia, perfecta para paseos infinitos', en: 'One of the longest beaches in Galicia, perfect for infinite walks', fr: 'L\'une des plus longues plages de Galice, parfaite pour des promenades infinies', de: 'Einer der längsten Strände Galiziens, perfekt für endlose Spaziergänge', it: 'Una delle spiagge più lunghe della Galizia, perfetta per passeggiate infinite', pt: 'Uma das praias mais longas da Galiza, perfeita para passeios infinitos' },
  'location.carnota.longDesc': {
    es: 'Con sus más de 7 kilómetros de extensión, la playa de Carnota no solo es la más grande de Galicia, sino también un ecosistema virgen de dunas y marismas de valor incalculable.',
    gl: 'Con máis de 7 quilómetros de extensión, a praia de Carnota non só é a máis grande de Galicia, senón tamén un ecosistema virxe de dunas e marismas de valor incalculable.',
    en: 'With over 7 kilometers in length, Carnota Beach is not only the largest in Galicia but also an invaluable pristine ecosystem of dunes and marshes.',
    fr: 'Avec plus de 7 kilomètres de long, la plage de Carnota n\'est pas seulement la plus grande de Galice, mais aussi un écosistema vierge de dunes et de marais inestimable.',
    de: 'Mit einer Länge von über 7 Kilometern ist der Strand von Carnota nicht nur der größte Galiciens, sondern auch ein unschätzbares, unberührtes Ökosystem aus Dünen und Sümpfen.',
    it: 'Con i suoi oltre 7 chilometri di lunghezza, la spiaggia di Carnota non è solo la più grande della Galizia, ma anche un inestimabile ecosistema incontaminato di dune e paludi.',
    pt: 'Com mais de 7 quilómetros de extensão, a praia de Carnota não é apenas a maior da Galiza, mas também um ecossistema virgem de dunas e pântanos de valor incalculável.'
  },
  'nature.carnota.h1': { es: '7km de arena blanca', gl: '7km de area branca', en: '7km of white sand', fr: '7km de sable blanc', de: '7km weißer Sand', it: '7km di sabbia bianca', pt: '7km de areia branca' },
  'nature.carnota.h2': { es: 'Marismas de Caldebarcos', gl: 'Marismas de Caldebarcos', en: 'Caldebarcos Marshes', fr: 'Marais de Caldebarcos', de: 'Caldebarcos-Sümpfe', it: 'Paludi di Caldebarcos', pt: 'Pântanos de Caldebarcos' },
  'nature.carnota.h3': { es: 'Boca do Río', gl: 'Boca do Río', en: 'Boca do Río River Mouth', fr: 'Embouchure de Boca do Río', de: 'Flussmündung Boca do Río', it: 'Foce del Boca do Río', pt: 'Foz do Boca do Río' },

  'location.pindo.title': { es: 'Monte Pindo', gl: 'Monte Pindo', en: 'Monte Pindo', fr: 'Monte Pindo', de: 'Monte Pindo', it: 'Monte Pindo', pt: 'Monte Pindo' },
  'location.pindo.desc': { es: 'El Olimpo celta, con vistas espectaculares del Atlántico', gl: 'O Olimpo celta, con vistas espectaculares do Atlántico', en: 'The Celtic Olympus, with spectacular views of the Atlantic', fr: 'L\'Olympe celtique, avec des vues spectaculaires sur l\'Atlantique', de: 'Der keltische Olymp mit spektakulärem Blick auf den Atlantik', it: 'L\'Olimpo celtico, con vistas espectaculares sull\'Atlantico', pt: 'O Olimpo celta, con vistas espetaculares do Atlántico' },
  'location.pindo.longDesc': {
    es: `El Monte Pindo, conocido como el “Olimpo Celta”, es uno de los parajes más emblemáticos de A Costa da Morte, junto a la playa de Carnota y la cascada de Ézaro. Este macizo granítico se sitúa entre Dumbría, Carnota y Mazaricos (A Coruña) y forma parte de la Red Natura 2000 como Zona Especial de Conservación. Abarca también terrenos de Cee y cuenta con 4.628,87 hectáreas, de las que 438 son marinas.

Cómo llegar
La forma más sencilla de acceder es por la carretera AC-550 (Cee–Carnota) hasta la localidad de O Pindo, donde comienza la ruta más popular. El punto de salida está junto a la iglesia del pueblo, donde hay panel informativo y aparcamiento.

La subida a A Moa
La ruta más conocida conduce a A Moa (627 m), la cima del monte. Es de dificultad media, con tramos de pendiente pronunciada desde el nivel del mar. La subida dura entre 2 y 2,5 horas (la bajada, alrededor de 1,5 horas). El recorrido está señalizado con balizas blancas y verdes. Como referencia, si hay niebla o dudas, conviene mantener el mar a la izquierda.

Se recomienda llevar calzado adecuado, agua, protección solar y ropa cómoda. El primer tramo atraviesa una zona más húmeda y con vegetación; después predominan las pendientes abiertas y las formaciones rocosas.

Paisaje y puntos de interés
Desde la cima se obtienen vistas panorámicas de la ría de Cee y Corcubión, el cabo Fisterra y la playa de Carnota, la más extensa de Galicia. El granito, modelado por la erosión, forma figuras singulares como O Xigante.

Otros lugares destacados:
• A Moa: el punto más alto y uno de los mejores miradores de la comarca.
• Las murallas: restos de construcciones pétreas, posiblemente de los siglos IV-VI.
• Castillo de San Xurxo: antigua torre defensiva del siglo X, hoy desaparecida, vinculada a la defensa frente a incursiones marítimas.
• Chan de Lourenzo: pradera cercana a la cima con restos de una antigua mina de wolframio.

Naturaleza
El entorno destaca por su biodiversidad: se han catalogado 625 especies de flora, fauna y hongos. Entre ellas sobresale el roble enano (Quercus lusitanica), que tiene aquí su único hábitat en Galicia.

El Monte Pindo es, en definitiva, una visita imprescindible para quienes recorren A Costa da Morte: naturaleza singular, panorámicas espectaculares y un paisaje cargado de historia y leyenda.`,
    gl: `O Monte Pindo, coñecido como o “Olimpo Celta”, é unha das paraxes máis emblemáticas da Costa da Morte, xunto á praia de Carnota e a fervenza do Ézaro. Este macizo granítico sitúase entre Dumbría, Carnota e Mazaricos (A Coruña) e forma parte da Rede Natura 2000 como Zona Especial de Conservación. Abarca tamén terreos de Cee e conta con 4.628,87 hectáreas, das que 438 son mariñas.

Como chegar
A forma máis sinxela de acceder é pola estrada AC-550 (Cee–Carnota) ata a localidade do Pindo, onde comeza a ruta máis popular. O punto de saída está a carón da igrexa do pobo, onde hai panel informativo e aparcadoiro.

A subida á Moa
A ruta máis coñecida conduce á Moa (627 m), a cima do monte. É de dificultade media, con treitos de pendente pronunciada desde o nivel do mar. A subida dura entre 2 e 2,5 horas (a baixada, arredor de 1,5 horas). O percorrido está sinalizado con balizas brancas e verdes. Como referencia, se hai néboa ou dúbidas, convén manter o mar á esquerda.

Recoméndase levar calzado adecuado, auga, protección solar e roupa cómoda. O primeiro treito atravesa unha zona máis húmida e con vexetación; despois predominan as pendentes abertas e as formacións rochosas.

Paisaxe e puntos de interese
Desde a cima obtéñense vistas panorámicas da ría de Cee e Corcubión, o cabo Fisterra e a praia de Carnota, a máis extensa de Galicia. O granito, modelado pola erosión, forma figuras singulares como O Xigante.

Outros lugares destacados:
• A Moa: o punto máis alto e un dos mellores miradoiros da comarca.
• As murallas: restos de construcións pétreas, posiblemente dos séculos IV-VI.
• Castelo de San Xurxo: antiga torre defensiva do século X, hoxe desaparecida, vinculada á defensa fronte a incursións marítimas.
• Chan de Lourenzo: pradeira próxima á cima con restos dunha antiga mina de wolframio.

Natureza
O contorno destaca pola súa biodiversidade: foron catalogadas 625 especies de flora, fauna e fungos. Entre elas sobresae o carballo anano (Quercus lusitanica), que ten aquí o seu único habitar en Galicia.

O Monte Pindo é, en definitiva, unha visita imprescindible para quen percorre a Costa da Morte: natureza singular, panorámicas espectaculares e unha paisaxe cargada de historia e lenda.`,
    en: `Mount Pindo, known as the "Celtic Olympus," is one of the most emblematic spots in Costa da Morte, alongside Carnota Beach and the Ézaro Waterfall. This granite massif is located between Dumbría, Carnota, and Mazaricos (A Coruña) and is part of the Natura 2000 Network as a Special Conservation Area. It also covers land in Cee and spans 4,628.87 hectares, of which 438 are marine.

How to get there
The easiest way to access it is via the AC-550 road (Cee–Carnota) to the town of O Pindo, where the most popular route begins. The starting point is next to the town church, where there is an information board and parking.

The climb to A Moa
The most famous route leads to A Moa (627 m), the mountain's peak. It is of medium difficulty, with sections of steep incline starting from sea level. The climb takes between 2 and 2.5 hours (the descent takes about 1.5 hours). The path is marked with white and green markers. As a reference, if there is fog or doubt, it is advisable to keep the sea to your left.

It is recommended to wear suitable footwear, bring water, use sun protection, and wear comfortable clothing. The first section passes through a more humid area with vegetation; afterward, open slopes and rocky formations predominate.

Landscape and points of interest
From the summit, you get panoramic views of the Cee and Corcubión estuary, Cape Finisterre, and Carnota Beach, the longest in Galicia. The granite, shaped by erosion, creates unique figures such as "O Xigante" (The Giant).

Other notable places:
• A Moa: the highest point and one of the best viewpoints in the region.
• The walls: remains of stone constructions, possibly from the 4th-6th centuries.
• San Xurxo Castle: an ancient defensive tower from the 10th century, now gone, linked to defense against maritime raids.
• Chan de Lourenzo: a meadow near the summit with remains of an old tungsten mine.

Nature
The environment stands out for its biodiversity: 625 species of flora, fauna, and fungi have been cataloged. Among them, the dwarf oak (Quercus lusitanica) stands out, which has its only habitat in Galicia here.

Mount Pindo is, ultimately, an essential visit for those traveling through Costa da Morte: unique nature, spectacular panoramas, and a landscape steeped in history and legend.`,
    fr: `Le mont Pindo, connu sous le nom d'« Olympe celtique », est l'un des lieux les plus emblématiques de la Costa da Morte, aux côtés de la plage de Carnota et de la cascade d'Ézaro. Ce massif granitique est situé entre Dumbría, Carnota et Mazaricos (A Coruña) et fait partie du réseau Natura 2000 en tant que zone spéciale de conservation. Il s'étend également sur les terres de Cee et couvre 4 628,87 hectares, dont 438 sont marins.

Comment s'y rendre
Le moyen le plus simple d'y accéder est de emprunter la route AC-550 (Cee-Carnota) jusqu'à la ville d'O Pindo, où commence l'itinéraire le plus populaire. Le point de départ se trouve à côté de l'église du village, où vous trouverez un panneau d'information et un parking.

La montée vers A Moa
L'itinéraire le plus célèbre mène à A Moa (627 m), le point culminant de la montagne. La difficulté est moyenne, avec des sections à forte pente depuis le niveau de la mer. La montée dure entre 2h et 2h30 (la descente environ 1h30). L'itinéraire est balisé par des balises blanches et vertes. A titre de référence, s'il y a du brouillard ou des doutes, il convient de garder la mer à gauche.

Il est recommandé de porter des chaussures adaptées, d'apporter de l'eau, une protection solaire et des vêtements confortables. La première partie traverse une zone plus humide et plus végétalisée ; ensuite, les pentes ouvertes et les formations rocheuses prédominent.

Paysage et points d'intérêt
Du sommet, vous obtenez des vues panoramiques sur l'estuaire de Cee et Corcubión, le cap Finisterre et la plage de Carnota, la plus longue de Galice. Le granit, façonné par l'érosion, forme des figures uniques comme O Xigante (Le Géant).

Autres lieux notables :
• A Moa : le point culminant et l'un des meilleurs points de vue de la région.
• Les murailles : restes de constructions en pierre, datant peut-être des IVe-VIe siècles.
• Château de San Xurxo : ancienne tour défensive du Xe siècle, aujourd'hui disparue, liée à la défense contre les incursions maritimes.
• Chan de Lourenzo : prairie proche du sommet avec les restes d'une ancienne mine de tungstène.

Nature
L'environnement se distingue par sa biodiversité : 625 espèces de flore, faune et champignons ont été répertoriées. Parmi elles, se distingue le chêne nain (Quercus lusitanica), qui a ici son seul habitat en Galice.

Le mont Pindo est, en somme, une visite incontournable pour ceux qui visitent la Costa da Morte : une nature unique, des panoramas spectaculaires et un paysage chargé d'histoire et de légendes.`,
    de: `Der Monte Pindo, bekannt als der „keltische Olymp“, ist einer der emblematischsten Orte an der Costa da Morte, neben dem Strand von Carnota und dem Wasserfall von Ézaro. Dieses Granitmassiv liegt zwischen Dumbría, Carnota und Mazaricos (A Coruña) und ist Teil des Natura-2000-Netzwerks als besonderes Schutzgebiet. Er umfasst auch Gebiete von Cee und erstreckt sich über 4.628,87 Hektar, von denen 438 Hektar Meeresfläche sind.

Wie man dorthin kommt
Der einfachste Zugang erfolgt über die Straße AC-550 (Cee–Carnota) bis zum Ort O Pindo, wo die beliebteste Route beginnt. Der Ausgangspunkt befindet sich neben der Dorfkirche, wo es eine Informationstafel und Parkplätze gibt.

Der Aufstieg zur A Moa
Der bekannteste Weg führt zur A Moa (627 m), dem Gipfel des Berges. Er ist von mittlerem Schwierigkeitsgrad, mit steilen Abschnitten ab Meereshöhe. Der Aufstieg dauert zwischen 2 und 2,5 Stunden (der Abstieg etwa 1,5 Stunden). Die Strecke ist mit weiß-grünen Markierungen gekennzeichnet. Als Orientierungshilfe bei Nebel oder Zweifeln empfiehlt es sich, das Meer zur Linken zu behalten.

Es wird empfohlen, geeignetes Schuhwerk, Wasser, Sonnenschutz und bequeme Kleidung mitzubringen. Der erste Abschnitt führt durch ein feuchteres Gebiet mit Vegetation, danach dominieren offene Hänge und Felsformationen.

Landschaft und Sehenswürdigkeiten
Vom Gipfel aus hat man einen Panoramablick auf die Bucht von Cee und Corcubión, das Kap Finisterre und den Strand von Carnota, den längsten Galiciens. Der Granit, durch Erosion geformt, bildet einzigartige Figuren wie O Xigante (Der Riese).

Weitere Höhepunkte:
• A Moa: der höchste Punkt und einer der besten Aussichtspunkte der Region.
• Die Mauern: Reste von Steinbauten, möglicherweise aus dem 4. bis 6. Jahrhundert.
• Burg von San Xurxo: alter Verteidigungsturm aus dem 10. Jahrhundert, heute verschwunden, verbunden mit der Verteidigung gegen Seeüberfälle.
• Chan de Lourenzo: Wiese in Gipfelnähe mit Resten einer alten Wolframmine.

Natur
Die Umgebung zeichnet sich durch ihre Artenvielfalt aus: 625 Arten von Flora, Fauna und Pilzen wurden katalogisiert. Unter ihnen sticht die Zwergeiche (Quercus lusitanica) hervor, die hier ihren einzigen Lebensraum in Galicien hat.

Der Monte Pindo ist definitiv ein Muss für jeden Besucher der Costa da Morte: einzigartige Natur, spektakuläre Ausblicke und eine Landschaft voller Geschichte und Legenden.`,
    it: `Monte Pindo, conosciuto come l'“Olimpo Celtico”, è uno dei luoghi più emblematici della Costa da Morte, insieme alla spiaggia di Carnota e alla cascata dell'Ézaro. Questo massiccio granitico si trova tra Dumbría, Carnota e Mazaricos (La Coruña) e fa parte della Rete Natura 2000 come Zona Speciale di Confederazione. Comprende anche terreni di Cee e dispone di 4.628,87 ettari, di cui 438 marini.

Come arrivare
Il modo più semplice per accedere è attraverso la strada AC-550 (Cee–Carnota) fino alla località di O Pindo, dove inizia il percorso più popolare. Il punto di partenza è vicino alla chiesa del paese, dove si trova un pannello informativo e un parcheggio.

La salita ad A Moa
Il percorso più famoso porta ad A Moa (627 m), la cima del monte. È di media difficoltà, con tratti di forte pendenza a partire dal livello del mare. La salita dura tra le 2 e le 2,5 ore (la discesa circa 1,5 ore). Il percorso è segnalato con segnavia bianchi e verdi. Come riferimento, in caso di nebbia o dubbi, conviene tenere il mare sulla sinistra.

Si consiglia di indossare calzature adeguate, portare acqua, protezione solare e abbigliamento comodo. Il primo tratto attraversa una zona più umida e con vegetazione; successivamente predominano pendii aperti e formazioni rocciose.

Paesaggio e punti di interesse
Dalla vetta si ottengono viste panoramiche sull'estuario di Cee e Corcubión, sul capo Finisterre e sulla spiaggia di Carnota, la più estesa della Galizia. Il granito, modellato dall'erosione, forma figure singolari come O Xigante (Il Gigante).

Altri luoghi degni di nota:
• A Moa: il punto più alto e uno dei migliori punti panoramici della regione.
• Le mura: resti di costruzioni in pietra, probabilmente risalenti ai secoli IV-VI.
• Castello di San Xurxo: antica torre difensiva del X secolo, oggi scomparsa, legata alla difesa contro le incursioni marittime.
• Chan de Lourenzo: prato vicino alla vetta con i resti di un'antica miniera di tungsteno.

Naturalezza
L'ambiente si distingue per la sua biodiversità: sono state catalogate 625 specie tra flora, fauna e funghi. Tra queste spicca la quercia nana (Quercus lusitanica), che qui ha il suo unico habitat in Galizia.

Il Monte Pindo è, in definitiva, una visita imperdibile per chi percorre la Costa da Morte: natura singolare, panorami spettacolari e un paesaggio carico di storia e leggenda.`,
    pt: `O Monte Pindo, conhecido como o “Olimpo Celta”, é um dos lugares mais emblemáticos da Costa da Morte, junto à praia de Carnota e à cascata do Ézaro. Este maciço granítico situa-se entre Dumbría, Carnota e Mazaricos (A Coruña) e faz parte da Rede Natura 2000 como Zona Especial de Conservação. Abrange também terrenos de Cee e conta com 4.628,87 hectares, dos quais 438 são marinhos.

Como chegar
A forma mais fácil de aceder é pola estrada AC-550 (Cee–Carnota) até á localidade do Pindo, onde começa a rota mais popular. O ponto de partida é junto à igreja da vila, onde existe um painel informativo e estacionamento.

A subida à Moa
A rota mais conhecida leva à Moa (627 m), o cume do monte. É de dificuldade média, com trechos de declive acentuado desde o nível do mar. A subida dura entre 2 e 2,5 horas (a descida, cerca de 1,5 horas). O percurso está sinalizado com balizas brancas e verdes. Como referência, se houver nevoeiro ou dúvidas, convém manter o mar à esquerda.

Recomenda-se levar calzado adequado, água, proteção solar e roupa confortável. O primeiro trecho atraviesa uma zona mais húmida e com vegetación; depois predominam as encostas abertas e as formações rochosas.

Paisagem e pontos de interesse
Do cume obtêm-se vistas panorámicas da ria de Cee e Corcubión, do cabo Fisterra e da praia de Carnota, a mais extensa da Galiza. O granito, moldado pela erosão, forma figuras singulares como O Xigante.

Outros lugares de destaque:
• A Moa: o ponto mais alto e um dos melhores miradouros da região.
• As muralhas: restos de construções de pedra, possivelmente dos séculos IV-VI.
• Castelo de San Xurxo: antiga torre defensiva do século X, hoje desaparecida, ligada à defesa contra incursões marítimas.
• Chan de Lourenzo: pradeira próxima ao cume com restos de uma antiga mina de tungsténio.

Naturaleza
O ambiente destaca-se pela sua biodiversidade: foram catalogadas 625 espécies de flora, fauna e fungos. Entre elas sobressai o carvalho-anão (Quercus lusitanica), que tem aqui o seu único habitat na Galiza.

O Monte Pindo é, em suma, uma visita essencial para quem percorre a Costa da Morte: natureza singular, panorâmicas espetaculares e uma paisagem carregada de história e lenda.`
  },
  'nature.pindo.h1': { es: 'Cima de A Moa (627m)', gl: 'Cima de A Moa (627m)', en: 'A Moa Peak (627m)', fr: 'Sommet d\'A Moa (627m)', de: 'A Moa Gipfel (627m)', it: 'Cima di A Moa (627m)', pt: 'Pico de A Moa (627m)' },
  'nature.pindo.h2': { es: 'Leyendas Celtas', gl: 'Lendas Celtas', en: 'Celtic Legends', fr: 'Légendes Celtiques', de: 'Keltische Legenden', it: 'Leggende Celtiche', pt: 'Lendas Celtas' },
  'nature.pindo.h3': { es: 'Geología de Granito Rosa', gl: 'Xeoloxía de Granito Rosa', en: 'Pink Granite Geology', fr: 'Géologie de Granit Rose', de: 'Rosa Granitgeologie', it: 'Geologia del Granito Rosa', pt: 'Geologia do Granito Rosa' },
  'nature.pindo.route_title': { es: 'Ruta de ascenso a A Moa', gl: 'Ruta de ascenso á Moa', en: 'A Moa ascent route', fr: 'Itinéraire d\'ascension d\'A Moa', de: 'Aufstiegsroute zur A Moa', it: 'Percorso di ascesa ad A Moa', pt: 'Rota de ascensão à Moa' },
  'nature.route.distance': { es: 'Distancia', gl: 'Distancia', en: 'Distance', fr: 'Distance', de: 'Entfernung', it: 'Distanza', pt: 'Distância' },
  'nature.route.gain': { es: 'Desnivel', gl: 'Desnivel', en: 'Elevation gain', fr: 'Dénivelé', de: 'Höhenmeter', it: 'Dislivello', pt: 'Desnível' },
  'nature.route.max_ele': { es: 'Alt. Máx', gl: 'Alt. Máx', en: 'Max Alt.', fr: 'Alt. Max', de: 'Max. Höhe', it: 'Alt. Max', pt: 'Alt. Máx' },
  'nature.route.elevation_profile': { es: 'Perfil de Elevación', gl: 'Perfil de Elevación', en: 'Elevation Profile', fr: 'Profil d\'élévation', de: 'Höhenprofil', it: 'Profilo altimetrico', pt: 'Perfil de Elevação' },
  'nature.route.elevation_desc': { es: 'Altitud acumulada del recorrido', gl: 'Altitude acumulada do percorrido', en: 'Cumulative elevation of the route', fr: 'Élévation cumulée du parcours', de: 'Kumulierte Höhe der Route', it: 'Elevazione cumulata del percorso', pt: 'Elevação acumulada do percurso' },
  'nature.route.download': { es: 'Descargar GPX', gl: 'Descargar GPX', en: 'Download GPX', fr: 'Télécharger GPX', de: 'GPX Herunterladen', it: 'Scarica GPX', pt: 'Descarregar GPX' },
  'nature.route.start': { es: 'Inicio', gl: 'Inicio', en: 'Start', fr: 'Départ', de: 'Start', it: 'Inizio', pt: 'Início' },
  'nature.route.end': { es: 'Fin', gl: 'Fin', en: 'Finish', fr: 'Arrivée', de: 'Ziel', it: 'Fine', pt: 'Fim' },
  'nature.route.meters': { es: 'm', gl: 'm', en: 'm', fr: 'm', de: 'm', it: 'm', pt: 'm' },
  'nature.route.km': { es: 'km', gl: 'km', en: 'km', fr: 'km', de: 'km', it: 'km', pt: 'km' },
  'nature.route.steep': { es: 'Fuerte', gl: 'Forte', en: 'Steep', fr: 'Raide', de: 'Steil', it: 'Ripido', pt: 'Forte' },
  'nature.route.moderate': { es: 'Moderado', gl: 'Moderado', en: 'Moderate', fr: 'Modéré', de: 'Mittel', it: 'Moderato', pt: 'Moderado' },
  'nature.route.flat': { es: 'Llano', gl: 'Chai', en: 'Flat', fr: 'Plat', de: 'Flach', it: 'Piano', pt: 'Plano' },
  'nature.route.descent': { es: 'Descenso', gl: 'Descenso', en: 'Descent', fr: 'Descente', de: 'Abstieg', it: 'Discesa', pt: 'Descida' },

  'location.louro.title': { es: 'Monte Louro', gl: 'Monte Louro', en: 'Monte Louro', fr: 'Monte Louro', de: 'Monte Louro', it: 'Monte Louro', pt: 'Monte Louro' },
  'location.louro.desc': { es: 'El guardián de piedra que vigila la entrada de la ría y el océano.', gl: 'O gardián de pedra que vixía a entrada da ría e o océano.', en: 'The stone guardian watching over the entrance of the estuary and the ocean.', fr: 'Le gardien de pierre qui surveille l\'entrée de l\'estuaire et de l\'océan.', de: 'Der steinerne Wächter, der über den Eingang des Ästuars und des Ozeans wacht.', it: 'Il guardiano di pietra che veglia sull\'ingresso dell\'estuario e dell\'oceano.', pt: 'O guardião de pedra que vigia a entrada da ria e do oceano.' },
  'location.louro.longDesc': {
    es: `El Monte Louro, con su icónica silueta de dos picos, se levanta majestuoso en la desembocadura de la Ría de Muros y Noia. Es un espacio natural protegido de una belleza singular, donde el granito, el agua dulce y la arena del Atlántico conviven en perfecta armonía.

El entorno
A sus pies se encuentra la Lagoa de Xalfas, una laguna costera de agua dulce separada del mar por un imponente complejo de dunas. Este ecosistema es un refugio vital para numerosas especies de aves migratorias y flora endémica, creando un paisaje de contrastes únicos entre el azul del mar y el verde de la vegetación lacustre.

Puntos de interés
• La cima: Los dos picos graníticos ofrecen una de las mejores panorámicas de las Rías Baixas y la entrada de la Ría de Muros y Noia.
• Lagoa de Xalfas: Un ecosistema lagunar protegido de gran valor ecológico que invita a la contemplación y al avistamiento de aves.
• Praia de Area Maior: Una playa salvaje de arena blanca y aguas cristalinas que se extiende a los pies del monte, ideal para los amantes de la naturaleza en estado puro.

Actividades recomendadas
La subida al monte, aunque requiere calzado adecuado para terreno rocoso, compensa con creces por las vistas. También es muy recomendable el paseo circular que rodea la laguna y atraviesa el sistema dunar, permitiendo apreciar la biodiversidad de este enclave privilegiado.`,
    gl: `O Monte Louro, coa súa icónica silueta de dous picos, érguese maxestoso na desembocadura da Ría de Muros e Noia. É un espazo natural protexido dunha beleza singular, onde o granito, a auga doce e a area do Atlántico conviven en perfecta harmonía.

O contorno
Aos seus pés atópase a Lagoa de Xalfas, unha lagoa costeira de auga doce separada do mar por un impoñente complexo de dunas. Este ecosistema é un refuxio vital para numerosas especies de aves migratorias e flora endémica, creando unha paisaxe de contrastes únicos entre o azul do mar e o verde da vexetación lacustre.

Puntos de interese
• O cume: Os dous picos graníticos ofrecen unha das mellores panorámicas das Rías Baixas e a entrada da Ría de Muros e Noia.
• Lagoa de Xalfas: Un ecosistema lagunar protexido de gran valor ecolóxico que convida á contemplación e ao avistamento de aves.
• Praia de Area Maior: Unha praia salvaxe de area branca e augas cristalinas que se estende aos pés do monte, ideal para os amantes da natureza en estado puro.

Actividades recomendadas
A subida ao monte, aínda que require calzado axeitado para terreo rochoso, compensa con creces polas vistas. Tamén é moi recomendable o paseo circular que rodea a lagoa e atravesa o sistema dunar, permitindo apreciar a biodiversidade deste enclave privilexiado.`,
    en: `Mount Louro, with its iconic twin-peak silhouette, stands majestic at the mouth of the Muros and Noia Estuary. A unique natural space where the mountain meets a freshwater lagoon and wild dunes.`,
    fr: `Le Mont Louro, avec son icónica silueta de deux picos, se dresse majestueusement à l'embouchure de l'estuaire de Muros et Noia.`,
    de: `Der Berg Louro mit seiner ikonischen Zwillingsspitzen-Silhouette erhebt sich majestätisch an der Mündung der Ría de Muros und Noia.`,
    it: `Il Monte Louro, con la sua iconica silhouette a due cime, si erge maestoso alla foce dell'estuario di Muros e Noia.`,
    pt: `O Monte Louro, com a sua icónica silhueta de dois picos, ergue-se majestoso na foz da Ria de Muros e Noia.`
  },
  'nature.louro.h1': { es: 'Lagoa de Louro', gl: 'Lagoa de Louro', en: 'Louro Lagoon', fr: 'Lagune de Louro', de: 'Louro-Lagune', it: 'Laguna di Louro', pt: 'Lagoa do Louro' },
  'nature.louro.h2': { es: 'Vistas de la Ría', gl: 'Vistas da Ría', en: 'Estuary Views', fr: 'Vues sur l\'Estuaire', de: 'Blick auf die Mündung', it: 'Viste dell\'Estuario', pt: 'Vistas da Ria' },
  'nature.louro.h3': { es: 'Playa de Area Maior', gl: 'Praia de Area Maior', en: 'Area Maior Beach', fr: 'Plage d\'Area Maior', de: 'Strand von Area Maior', it: 'Spiaggia di Area Maior', pt: 'Praia de Area Maior' },

  'location.ezaro.title': { es: 'Cascada do Ézaro', gl: 'Fervenza do Ézaro', en: 'Ézaro Waterfall', fr: 'Cascade d\'Ézaro', de: 'Ézaro Wasserfall', it: 'Cascata dell\'Ézaro', pt: 'Cascata do Ézaro' },
  'location.ezaro.desc': { es: 'La única cascada de Europa que desemboca directamente en el mar.', gl: 'A única fervenza de Europa que desemboca directamente no mar.', en: 'The only waterfall in Europe that flows directly into the sea.', fr: 'La seule cascade d\'Europe qui se jette directement dans la mer.', de: 'Der einzige Wasserfall in Europa, der direkt ins Meer mündet.', it: 'L\'unica cascata in Europa che sfocia direttamente nel mare.', pt: 'A única cascata da Europa que desagua directamente no mar.' },
  'location.ezaro.longDesc': {
    es: `La cascada del Ézaro, situada en el municipio de Dumbría, es uno de los tesoros naturales más impactantes de Galicia. Su singularidad reside en ser la única cascada de Europa continental que desemboca directamente en el océano Atlántico en forma de catarata.

El entorno
El río Xallas, tras recorrer tierras coruñesas, se precipita al mar en la ensenada de Ézaro. La caída, de más de 40 metros de altura, golpea las paredes graníticas del monte Pindo antes de mezclarse con el agua salada. El estruendo del agua y el vapor que se levanta crean una atmósfera mágica, especialmente en épocas de lluvias abundantes.

Puntos de interés
• El Mirador: Situado sobre la cascada, ofrece una vista aérea inigualable de la desembocadura y de la inmensidad del océano.
• Pasarelas de madera: Un cómodo recorrido a pie permite acercarse a la base de la cascada con total seguridad, disfrutando de la fuerza del agua desde cerca.
• Iluminación nocturna: Durante los meses de verano y en fechas especiales, la cascada se ilumina con juegos de luces de colores, convirtiendo el lugar en un escenario de película.
• Museo de la Electricidad: Junto a la cascada se encuentra una antigua central hidroeléctrica que hoy alberga un centro de interpretación sobre la energía y el agua.

Actividades recomendadas
Una de las experiencias más populares es alquilar un kayak para remontar la ensenada y ver la cascada desde el mar, permitiéndote sentir los salpicones de agua dulce mientras navegas por el Atlántico.`,
    gl: `A fervenza do Ézaro, situada no concello de Dumbría, é un dos tesouros naturais máis impactantes de Galicia. A súa singularidade reside en ser a única fervenza de Europa continental que desemboca directamente no océano Atlántico en forma de catarata.

O contorno
O río Xallas, tras percorrer terras coruñesas, precipítase ao mar na ensenada do Ézaro. A caída, de máis de 40 metros de altura, golpea as paredes graníticas do monte Pindo antes de mesturarse coa auga salgada. O estrondo da auga e o vapor que se levanta crean unha atmosfera máxica, especialmente en épocas de choivas abundantes.

Puntos de interese
• O Miradoiro: Situado sobre a fervenza, ofrece unha vista aérea inigualable da desembocadura e da inmensidade do océano.
• Pasarelas de madeira: Un cómodo percorrido a pé permite achegarse á base da fervenza con total seguridade, gozando da forza da auga desde preto.
• Iluminación nocturna: Durante os meses de verán e en datas especiais, a fervenza ilumínase con xogos de luces de fores, convertendo o lugar nun escenario de película.
• Museo da Electricidade: Xunto á fervenza atópase unha antiga central hidroeléctrica que hoxe alberga un centro de interpretación sobre a enerxía e a auga.

Actividades recomendadas
Unha das experiencias máis populares é alugar un kaiak para remontar a ensenada e ver a fervenza desde o mar, permitíndoche sentir os salpicos de auga doce mentres navegas polo Atlántico.`,
    en: `The Ézaro waterfall is the only one in continental Europe that flows directly into the Atlantic Ocean.`,
    fr: `La cascade d'Ézaro est unique en Europe continentale.`,
    de: `Der Ézaro-Wasserfall ist einzigartig in Kontinentaleuropa.`,
    it: `La cascata dell'Ézaro è unica nell'Europa continentale.`,
    pt: `A cascata do Ézaro é única na Europa continental.`
  },
  'nature.ezaro.h1': { es: 'Río Xallas', gl: 'Río Xallas', en: 'Xallas River', fr: 'Fleuve Xallas', de: 'Fluss Xallas', it: 'Fiume Xallas', pt: 'Rio Xallas' },
  'nature.ezaro.h2': { es: 'Única en Europa', gl: 'Única en Europa', en: 'Unique in Europe', fr: 'Unique in Europe', de: 'Einzigartig in Europa', it: 'Unica in Europa', pt: 'Única na Europa' },
  'nature.ezaro.h3': { es: 'Espectáculo Nocturno', gl: 'Espectáculo Nocturno', en: 'Night Show', fr: 'Spectacle Nocturne', de: 'Nachtspektakel', it: 'Spettacolo Notturno', pt: 'Espectáculo Nocturno' },

  'experiences.hiking.title': { es: 'Senderismo por Monte Pindo', gl: 'Sendeirismo polo Monte Pindo', en: 'Hiking Mount Pindo', fr: 'Randonnée au Mont Pindo', de: 'Wandern auf den Berg Pindo', it: 'Escursionismo sul Monte Pindo', pt: 'Caminhadas pelo Monte Pindo' },
  'experiences.hiking.desc': { es: 'Ruta de 3 horas por el monte sagrado celta', gl: 'Ruta de 3 horas polo monte sagrado celta', en: '3-hour route through the sacred Celtic mountain', fr: 'Itinéraire de 3 heures à travers la montagne sacrée celtique', de: '3-stündige Route durch den heiligen keltischen Berg', it: 'Percorso di 3 ore attraverso la sacra montagna celtica', pt: 'Percurso de 3 horas pela montanha sagrada celta' },
  'experiences.hiking.duration': { es: '3h', gl: '3h', en: '3h', fr: '3h', de: '3h', it: '3h', pt: '3h' },
  'experiences.surf.title': { es: 'Surf na Costa da Morte', gl: 'Surf na Costa da Morte', en: 'Surf in Costa da Morte', fr: 'Surf sur la Costa da Morte', de: 'Surfen an der Costa da Morte', it: 'Surf nella Costa da Morte', pt: 'Surf na Costa da Morte' },
  'experiences.surf.desc': { es: 'Clases de surf en las mejores olas del Atlántico', gl: 'Clases de surf nas mellores ondas do Atlántico', en: 'Surf lessons in the best waves of the Atlantic', fr: 'Cours de surf dans las meilleures vagues de l\'Atlantique', de: 'Surfkurse in den besten Wellen des Atlantiks', it: 'Lezioni di surf nelle migliori onde dell\'Atlântico', pt: 'Aulas de surf nas mellores ondas do Atlántico' },
  'experiences.surf.duration': { es: '2-4h', gl: '2-4h', en: '2-4h', fr: '2-4h', de: '2-4h', it: '2-4h', pt: '2-4h' },
  'experiences.gastro.title': { es: 'Restaurantes recomendados', gl: 'Restaurantes recomendados', en: 'Recommended Restaurants', fr: 'Restaurants recommandés', de: 'Empfohlene Restaurants', it: 'Ristoranti consigliati', pt: 'Restaurantes recomendados' },
  'experiences.gastro.desc': { es: 'Descubre los mejores sabores de la Costa da Morte', gl: 'Descobre os mellores sabores da Costa da Morte', en: 'Discover the best flavors of Costa da Morte', fr: 'Découvrez les meilleures saveurs de la Costa da Morte', de: 'Entdecken Sie die besten Aromen der Costa da Morte', it: 'Scopri i migliori sapori della Costa da Morte', pt: 'Descubra os melhores sabores da Costa da Morte' },
  'experiences.gastro.duration': { es: '2-3h', gl: '2-3h', en: '2-3h', fr: '2-3h', de: '2-3h', it: '2-3h', pt: '2-3h' },
  'experiences.kayak.title': { es: 'Kayak por la Costa', gl: 'Kaiak pola Costa', en: 'Coastal Kayaking', fr: 'Kayak Côtier', de: 'Küsten-Kajakfahren', it: 'Kayak sulla Costa', pt: 'Kayak pela Costa' },
  'experiences.kayak.desc': { es: 'Explora acantilados y cuevas marinas', gl: 'Explora acantilados e covas mariñas', en: 'Explore cliffs and sea caves', fr: 'Explorez les falaises et les govtes marines', de: 'Erkunden Sie Klippen und Meereshöhlen', it: 'Esplora scogliere e grotte marine', pt: 'Explore falésias e cavernas marinhas' },
  'experiences.rentals.title': {
    es: 'Alquiler de equipos para deportes acuáticos',
    gl: 'Aluguer de equipos para deportes acuáticos',
    en: 'Water sports equipment rental',
    fr: 'Location d\'équipements de sports nautiques',
    de: 'Verleih von Wassersportgeräten',
    it: 'Noleggio attrezzatura per sport acquatici',
    pt: 'Aluguel de equipamentos para esportes aquáticos'
  },
  'experiences.rentals.desc': {
    es: 'Alquiler de material de Surf, Kitesurf, Paddle Surf y Kayak.',
    gl: 'Aluguer de material de Surf, Kitesurf, Paddle Surf e Kaiak.',
    en: 'Surf, Kitesurf, Paddle Surf and Kayak equipment rental.',
    fr: 'Location de matériel de Surf, Kitesurf, Paddle Surf et Kayak.',
    de: 'Verleih von Surf-, Kitesurf-, Paddle Surf- und Kayak-Ausrüstung.',
    it: 'Noleggio attrezzatura da Surf, Kitesurf, Paddle Surf e Kayak.',
    pt: 'Aluguel de equipamento de Surf, Kitesurf, Paddle Surf e Kayak.'
  },
  'experiences.rentals.duration': { es: '1h - Full day', gl: '1h - Día completo', en: '1h - Full day', fr: '1h - Journée complète', de: '1h - Ganztägig', it: '1h - Giorno intero', pt: '1h - Dia completo' },
  'experiences.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil Magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti Magici', pt: 'Pôr do sol Mágico' },
  'experiences.sunset.desc': { es: 'Observa las mejores puestas de sol de Galicia', gl: 'Observa as mellores postas de sol de Galicia', en: 'Watch the best sunsets in Galicia', fr: 'Observez les meilleurs couchers de soleil de Galice', de: 'Beobachten Sie die besten Sonnenuntergänge in Galizien', it: 'Guarda i migliori tramonti della Galizia', pt: 'Veja os mejores pores do sol da Galiza' },
  'experiences.sunset.duration': { es: '1h', gl: '1h', en: '1h', fr: '1h', de: '1h', it: '1h', pt: '1h' },
  'nature.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil Magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti Magici', pt: 'Pôr do sol Mágico' },
  'nature.sunset.summary': { es: 'Descubre por qué esta costa fue considerada el fin del mundo conocido.', gl: 'Descobre por que esta costa foi considerada o fin do mundo coñecido.', en: 'Discover why this coast was considered the end of the known world.', fr: 'Découvrez pourquoi cette côte était considérée comme la fin du monde connu.', de: 'Entdecken Sie, warum diese Küste als das Ende der bekannten Welt galt.', it: 'Scopri perché questa costa era considerata la fine del mundo conosciuto.', pt: 'Descubra por que esta costa foi considerada o fim do mundo conhecido.' },
  'nature.sunset.h1': { es: 'Cabo Fisterra', gl: 'Cabo Fisterra', en: 'Cape Finisterre', fr: 'Cap Finisterre', de: 'Kap Finisterre', it: 'Capo Finisterre', pt: 'Cabo Finisterra' },
  'nature.sunset.h2': { es: 'Faro de Lira', gl: 'Faro de Lira', en: 'Lira Lighthouse', fr: 'Phare de Lira', de: 'Lira Leuchtturm', it: 'Faro di Lira', pt: 'Farol de Lira' },
  'nature.sunset.h3': { es: 'Paz Absoluta', gl: 'Paz Absoluta', en: 'Absolute Peace', fr: 'Paix Absolue', de: 'Absoluter Frieden', it: 'Pace Assoluta', pt: 'Paix Absoluta' },
  'nature.sunset.longDesc': {
    es: `Contemplar el atardecer en A Costa da Morte es una experiencia que trasciende lo visual. Para los antiguos, este era el "Finis Terrae", el lugar donde el sol moría cada día en el océano, marcando el límite del mundo conocido.

Lugares mágicos
No existe un solo punto para disfrutar de este espectáculo, sino toda una geografía de luz y color:
• Cabo Fisterra: El lugar más emblemático. Sentarse en las rocas junto al faro mientras el disco solar se sumerge en el Atlántico es un rito compartido por miles de viajeros y peregrinos.
• Praia de Carnota: Con sus 7 kilómetros de arena, la puesta de sol aquí es un despliegue de reflejos dorados sobre la orilla infinita.
• Faro de Lira: Mucho más tranquilo y cercano a Casa da Cuncheira, ofrece un entorno íntimo con el sonido de las olas rompiendo contra el granito.

El ritual
El momento del "rayo verde", la gama de púrpuras y naranjas que tiñen el cielo, y el silencio que se adopera de la costa cuando el sol desaparece, hacen de este momento el cierre perfecto para cualquier día de exploración. Se recomienda llegar al menos 30 minutos antes de la hora prevista para disfrutar de toda la transición lumínica.`,
    gl: `Contemplar o atardecer na Costa da Morte é unha experiencia que transcende o visual. Para os antigos, este era o "Finis Terrae", o lugar onde o sol morría cada día no océano, marcando o límite do mundo coñecido.

Lugares máxicos
Non existe un só punto para gozar deste espectáculo, senón toda unha xeografía de luz e cor:
• Cabo Fisterra: O lugar máis emblemático. Sentarse nas rochas xuntas ao faro mentres o disco solar se somerxe no Atlántico é un rito compartido por miles de viaxeiros e peregrinos.
• Praia de Carnota: Cos seus 7 quilómetros de area, a posta de sol aquí é un despregue de reflexos dourados sobre a orilla infinita.
• Faro de Lira: Moito máis tranquilo e próximo a Casa da Cuncheira, ofrece un contorno íntimo co son das ondas rompendo contra o granito.

O ritual
O momento do "raio verde", a gama de púrpuras e laranxas que tinguen o ceo, e o silencio que se apodera da costa cando o sol desaparece, fan deste momento o peche perfecto para calquera día de exploración. Recoméndase chegar polo menos 30 minutos antes da hora prevista para gozar de toda a transición lumínica.`,
    en: `Watching the sunset in Costa da Morte is a magical experience.`,
    fr: `Regarder le coucher du soleil est magique.`,
    de: `Den Sonnenuntergang zu beobachten ist magisch.`,
    it: `Guardare il tramonto è magico.`,
    pt: `Ver o pôr do sol é mágico.`
  },
  'experiences.villages.title': { es: 'Pueblos Marineros', gl: 'Pobos Mariñeiros', en: 'Seafaring Villages', fr: 'Villages de Pêcheurs', de: 'Seefahrerdörfer', it: 'Villaggi Marinari', pt: 'Aldeias de Pescadores' },
  'experiences.villages.desc': { es: 'Visita Muros y otros pueblos con historia', gl: 'Visita Muros e outros pobos con historia', en: 'Visit Muros and other historic villages', fr: 'Visitez Muros et d\'autres villages chargés d\'histoire', de: 'Besuchen Sie Muros und andere geschichtsträchtige Dörfer', it: 'Visita Muros e altri borghi storici', pt: 'Visite Muros e outras aldeias históricas' },
  'experiences.villages.duration': {
    es: 'Día completo',
    gl: 'Día completo',
    en: 'Full day',
    fr: 'Journée complète',
    de: 'Ganztägig',
    it: 'Giorno intero',
    pt: 'Dia completo'
  },
  'experiences.more': { es: 'Conocer mas', gl: 'Coñecer máis', en: 'Learn more', fr: 'En savoir plus', de: 'Mehr erfahren', it: 'Saperne di más', pt: 'Saiba mais' },

  'gastronomy.pageTitle': { es: 'Recomendaciones Gastronómicas', gl: 'Recomendacións Gastronómicas', en: 'Gastronomic Recommendations', fr: 'Recommandations Gastronomiques', de: 'Gastronomische Empfehlungen', it: 'Raccomandazioni Gastronomiche', pt: 'Recomendações Gastronómicas' },
  'gastronomy.pageSubtitle': { es: 'Descubre los mejores sabores de la Costa da Morte, desde mariscos frescos hasta platos tradicionales en un entorno único.', gl: 'Descobre os mellores sabores da Costa da Morte, dende mariscos frescos ata pratos tradicionais nun contorno único.', en: 'Discover the best flavors of Costa da Morte, from fresh seafood to traditional dishes in a unique setting.', fr: 'Découvrez les mejores saveurs de la Costa da Morte, des fruits de mer frais aux plats traditionnels dans un cadre unique.', de: 'Entdecken Sie die besten Aromen der Costa da Morte, von frischen Meeresfrüchten bis hin zu traditionellen Gerichten in einer einzigartigen Umgebung.', it: 'Scopri i migliori sapori della Costa da Morte, dai frutti di mare freschi ai piatti tradizionali in un ambiente unico.', pt: 'Descubra os melhores sabores da Costa da Morte, desde marisco fresco a pratos tradicionais num ambiente único.' },

  'gastronomy.morosa.desc': { es: 'Cocina creativa gallega con productos locales de primera calidad. Un restaurante con encanto y vistas espectaculares.', gl: 'Cociña creativa galega con produtos locais de primeira calidade. Un restaurante con encanto e vistas espectaculares.', en: 'Creative Galician cuisine with top-quality local products. A charming restaurant with spectacular views.', fr: 'Cuisine galicienne créative avec des produits locaux de première qualité. Un restaurant charmant avec des vues spectaculaires.', de: 'Kreative galicische Küche mit erstklassigen lokalen Produkten. Ein charmantes Restaurant mit spektakulärem Ausblick.', it: 'Cucina galiziana creativa con prodotti locali di prima qualità. Un ristorante affascinante con viste spettacolari.', pt: 'Cozinha galega criativa com produtos locais de primeira qualidade. Um restaurante encantador com vistas espectaculares.' },
  'gastronomy.chalana.desc': {
    es: 'Auténtica taberna marinera famosa por su pulpo y marisco fresco. Tradición pura a 3 minutos de Casa da Cuncheira',
    gl: 'Auténtica taberna mariñeira famosa polo seu polbo e marisco fresco. Tradición pura a 3 minutos de Casa da Cuncheira',
    en: 'Authentic seafood tavern famous for its octopus and fresh shellfish. Pure tradition just 3 minutes from Casa da Cuncheira',
    fr: 'Authentique taverne de fruits de mer célèbre pour son poulpe et ses fruits de mer frais. Pure tradition à 3 minutes de Casa da Cuncheira',
    de: 'Authentische Meeresfrüchte-Taverne, berühmt für ihren Oktopus und frische Meeresfrüchte. Pure Tradition nur 3 Minuten vom Casa da Cuncheira entfernt',
    it: 'Autentica taverna di mare famosa per il polpo e i frutti di mare freschi. Pura tradizione a soli 3 minuti da Casa da Cuncheira',
    pt: 'Autêntica taberna marítima famosa pelo seu polvo e marisco fresco. Tradição pura a 3 minutos da Casa da Cuncheira'
  },
  'gastronomy.ocuberto.desc': {
    es: 'Cocina tradicional gallega y tapas variadas en un ambiente acogedor. Especialistas en raciones generosas y productos de la zona.',
    gl: 'Cociña tradicional galega e tapas variadas nun ambiente acolledor. Especialistas en racións xenerosas e produtos da zona.',
    en: 'Traditional Galician cuisine and varied tapas in a cozy atmosphere. Specialists in generous portions and local products.',
    fr: 'Cuisine galicienne traditionnelle et tapas variées dans une ambiance chaleureuse. Spécialistes des portions généreuses et des produits locaux.',
    de: 'Traditionelle galicische Küche und vielfältige Tapas in gemütlicher Atmosphäre. Spezialisten für großzügige Portionen und lokale Produkte.',
    it: 'Cucina galiziana tradizionale e tapas varie in un\'atmosfera accogliente. Specialisti in porzioni generose e prodotti locales.',
    pt: 'Cozinha galega tradicional e tapas variadas num ambiente acolhedor. Especialistas em porções generosas e produtos locales.'
  },
  'gastronomy.moncho.desc': {
    es: 'Hamburguesas artesanales con ingredientes frescos y de calidad. El mejor sabor de Lira en cada bocado.',
    gl: 'Hamburguesas artesanais con ingredientes frescos e de calidade. O mellor sabor de Lira en cada bocado.',
    en: 'Artisan burgers with fresh, quality ingredients. The best flavor of Lira in every bite.',
    fr: 'Burgers artisanaux avec des ingrédients frais et de qualité. La meilleure saveur de Lira à chaque bouchée.',
    de: 'Handwerkliche Burger mit frischen, hochwertigen Zutaten. Der beste Geschmack von Lira in jedem Bissen.',
    it: 'Hamburger artigianali con ingredienti freschi e di qualità. Il miglior sapore di Lira in ogni morso.',
    pt: 'Hambúrgueres artesanais com ingredientes frescos e de qualidade. O melhor sabor de Lira em cada dentada.'
  },

  'gastronomy.type.seafood': { es: 'Marisco y pescado fresco', gl: 'Marisco e peixe fresco', en: 'Fresh seafood and fish', fr: 'Fruits de mer et poisson frais', de: 'Frische Meeresfrüchte und Fisch', it: 'Frutti di mare e pesce fresco', pt: 'Marisco e peixe fresco' },
  'gastronomy.type.tapas': { es: 'Tapas / Tradicional Gallega', gl: 'Tapas / Tradicional Galega', en: 'Tapas / Traditional Galician', fr: 'Tapas / Traditionnel galicien', de: 'Tapas / Traditionell galizisch', it: 'Tapas / Tradizionale galiziano', pt: 'Tapas / Tradicional galega' },
  'gastronomy.type.burger': { es: 'Hamburguesería', gl: 'Hamburguería', en: 'Burger restaurant', fr: 'Restaurant de burgers', de: 'Burger-Restaurant', it: 'Hamburgeria', pt: 'Hamburguesaria' },

  'gastronomy.website': { es: 'Sitio Web', gl: 'Sitio Web', en: 'Website', fr: 'Site Web', de: 'Webseite', it: 'Sito Web', pt: 'Site' },
  'gastronomy.googleMaps': { es: 'Ver en Google Maps', gl: 'Ver en Google Maps', en: 'View on Google Maps', fr: 'Voir sur Google Maps', de: 'Auf Google Maps ansehen', it: 'Vedi su Google Maps', pt: 'Ver no Google Maps' },

  'gastronomy.cta.title': { es: '¿Deseas más recomendaciones personales?', gl: 'Desexas máis recomendacións persoais?', en: 'Would you like more personalized recommendations?', fr: 'Souhaitez-vous plus de recommandations personnalisées?', de: 'Möchten Sie weitere persönliche Empfehlungen?', it: 'Desideri più raccomandazioni personalizzate?', pt: 'Deseja mais recomendações personalizadas?' },
  'gastronomy.cta.desc': { es: 'Estamos encantados de ayudarte a encontrar el lugar perfecto para cada ocasión durante tu estancia.', gl: 'Estamos encantados de axudarche a atopar o lugar perfecto para cada ocasión durante a túa estadía.', en: 'We are delighted to help you find the perfect place for every occasion during your stay.', fr: 'Nous sommes ravis de vous aider à trouver l\'endroit parfait pour chaque occasion pendant votre séjour.', de: 'Wir helfen Ihnen gerne, den perfekten Ort für jeden Anlass während Ihres Aufenthalts zu finden.', it: 'Siamo lieti di aiutarti a trovare il posto perfetto per ogni occasione durante il tuo soggiorno.', pt: 'Estamos encantados em ajudá-lo a encontrar o lugar perfeito para cada ocasião durante a sua estadia.' },

  'location.fisterra.title': { es: 'Cabo Finisterre', gl: 'Cabo Fisterra', en: 'Cape Finisterre', fr: 'Cap Finisterre', de: 'Kap Finisterre', it: 'Capo Finisterre', pt: 'Cabo Finisterra' },
  'location.fisterra.desc': { es: 'El legendario "Fin del Mundo", un lugar de belleza sublime y atardeceres infinitos.', gl: 'O lendario "Fin do Mundo", un lugar de beleza sublime e atardeceres infinitos.', en: 'The legendary "End of the World", a place of sublime beauty and infinite sunsets.', fr: 'Le légendaire "Fin du Monde", un lieu d\'une beauté sublime et de couchers de soleil infinis.', de: 'Das legendäre "Ende der Welt", ein Ort von erhabener Schönheit und unendlichen Sonnenuntergängen.', it: 'Il leggendario "Fine del Mondo", un luogo di sublime bellezza e tramonti infiniti.', pt: 'O lendário "Fim do Mundo", um lugar de beleza sublime e pores do sol infinitos.' },
  'location.fisterra.longDesc': {
    es: 'Cabo Finisterre, el punto más occidental de la España peninsular para los romanos, sigue siendo hoy un lugar de peregrinación y asombro, donde el faro guía a los barcos a través de la mítica Costa da Morte.',
    gl: 'Cabo Fisterra, o punto máis occidental da España peninsular para os romanos, segue a ser hoxe un lugar de peregrinación e asombro, onde o faro guía aos barcos a través da mítica Costa da Morte.',
    en: 'Cape Finisterre, the westernmost point of peninsular Spain for the Romans, remains today a place of pilgrimage and awe, where the lighthouse guides ships through the mythical Costa da Morte.',
    fr: 'Le Cap Finisterre, le point le plus à l\'ouest de l\'Espagne péninsulaire pour les Romains, reste aujourd\'hui un lieu de pèlerinage et d\'émerveillement, où le phare guide les navires à través de la mythique Costa da Morte.',
    de: 'Kap Finisterre, für die Römer der westlichste Punkt des spanischen Festlandes, ist auch heute noch ein Ort der Pilgerfahrt und des Staunens, an dem der Leuchtturm die Schiffe durch die mystische Costa da Morte leitet.',
    it: 'Capo Finisterre, il punto più occidentale della Spagna peninsulare per i romani, rimane ancora oggi un luogo di pellegrinaggio e meraviglia, dove il faro guida le navi attraverso la mitica Costa da Morte.',
    pt: 'O Cabo Finisterra, o ponto mais ocidental da Espanha peninsular para os romanos, continua hoje a ser um lugar de peregrinação e asombro, onde o farol guia os navios através da mítica Costa da Morte.'
  },
  'nature.fisterra.h1': { es: 'Faro de Finisterre', gl: 'Faro de Fisterra', en: 'Finisterre Lighthouse', fr: 'Phare du Finisterre', de: 'Leuchtturm von Finisterre', it: 'Faro di Finisterre', pt: 'Farol de Finisterra' },
  'nature.fisterra.h2': { es: 'Kilómetro 0 Camino Santiago', gl: 'Kilómetro 0 Camiño Santiago', en: 'Kilometer 0 Way of St. James', fr: 'Kilomètre 0 Chemin de Compostelle', de: 'Kilometer 0 Jakobsweg', it: 'Chilometro 0 Cammino di Santiago', pt: 'Quilómetro 0 Caminho de Santiago' },
  'nature.fisterra.h3': { es: 'Atardeceres Legendarios', gl: 'Atardeceres Lendarios', en: 'Legendary Sunsets', fr: 'Couchers de soleil Légendaires', de: 'Legendäre Sonnenuntergänge', it: 'Tramonti Leggendari', pt: 'Pôr do sol Lendário' },
  'common.back': { es: 'Volver al inicio', gl: 'Volver ao inicio', en: 'Back to home', fr: 'Retour à l\'accueil', de: 'Zurück zum Start', it: 'Torna alla home', pt: 'Voltar ao início' },

  // Weather
  'weather.title': {
    es: 'El tiempo na Costa da Morte',
    gl: 'O tempo na Costa da Morte',
    en: 'Weather in Costa da Morte',
    fr: 'Le temps sur la Costa da Morte',
    de: 'Das Wetter an der Costa da Morte',
    it: 'Il tempo nella Costa da Morte',
    pt: 'O tempo na Costa da Morte'
  },
  'weather.description': {
    es: 'Radar en tiempo real y previsión meteorológica para planificar tu estancia.',
    gl: 'Radar en tempo real e previsión meteorolóxica para planificar a túa estancia.',
    en: 'Real-time radar and weather forecast to plan your stay.',
    fr: 'Radar en temps réel et prévisions météorologiques pour planifier votre séjour.',
    de: 'Echtzeit-Radar und Wettervorhersage zur Planung Ihres Aufenthalts.',
    it: 'Radar in tempo reale e previsioni del tempo para pianificare il tuo soggiorno.',
    pt: 'Radar em tempo real e previsão meteorológica para planejar a sua estadia.'
  },
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
