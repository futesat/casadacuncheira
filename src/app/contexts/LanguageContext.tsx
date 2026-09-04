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
  'nav.surroundings': { es: 'Entorno', gl: 'Contorno', en: 'Surroundings', fr: 'Environs', de: 'Umgebung', it: 'Dintorni', pt: 'Entorno' },
  'nav.legal': {
    es: 'Aviso Legal',
    gl: 'Aviso Legal',
    en: 'Legal Notice',
    fr: 'Mentions Légales',
    de: 'Impressum',
    it: 'Note Legali',
    pt: 'Aviso Legal'
  },
  'location.viewGuide': { es: 'Guía y cómo llegar', gl: 'Guía e como chegar', en: 'Guide & Directions', fr: 'Guide et itinéraire', de: 'Reiseführer & Anfahrt', it: 'Guida e come arrivare', pt: 'Guia e como chegar' },
  'nature.viewGuide': { es: 'Ver guía completa', gl: 'Ver guía completa', en: 'View full guide', fr: 'Voir le guide complet', de: 'Vollständigen Reiseführer anzeigen', it: 'Vedi guida completa', pt: 'Ver guia completo' },
  'nature.cta.badge': { es: 'Alojamiento en Lira, Carnota', gl: 'Aloxamento en Lira, Carnota', en: 'Holiday rental in Lira, Carnota', fr: 'Hébergement à Lira, Carnota', de: 'Ferienunterkunft in Lira, Carnota', it: 'Alloggio a Lira, Carnota', pt: 'Alojamento em Lira, Carnota' },
  'footer.description': {
    es: 'Tu refugio en la Costa da Morte',
    gl: 'O teu refuxio na Costa da Morte',
    en: 'Your retreat in Costa da Morte',
    fr: 'Votre refuge sur la Costa da Morte',
    de: 'Ihr Rückzugsort an der Costa da Morte',
    it: 'Il tuo rifugio nella Costa da Morte',
    pt: 'O seu refúgio na Costa da Morte'
  },
  'footer.linksTitle': {
    es: 'Navegación',
    gl: 'Navegación',
    en: 'Navigation',
    fr: 'Navigation',
    de: 'Navigation',
    it: 'Navigazione',
    pt: 'Navegação'
  },
  'footer.legalTitle': {
    es: 'Información Legal',
    gl: 'Información Legal',
    en: 'Legal Information',
    fr: 'Informations Légales',
    de: 'Rechtliche Hinweise',
    it: 'Informazioni Legali',
    pt: 'Informação Legal'
  },
  'footer.license': {
    es: 'Vivienda de uso turístico: VUT-CO-002236',
    gl: 'Vivenda de uso turístico: VUT-CO-002236',
    en: 'Tourist Accommodation License: VUT-CO-002236',
    fr: 'Hébergement touristique : VUT-CO-002236',
    de: 'Lizenz für Ferienunterkunft: VUT-CO-002236',
    it: 'Alloggio turistico: VUT-CO-002236',
    pt: 'Alojamento turístico: VUT-CO-002236'
  },
  'footer.legal': {
    es: 'Aviso Legal',
    gl: 'Aviso Legal',
    en: 'Legal Notice',
    fr: 'Mentions Légales',
    de: 'Impressum',
    it: 'Note Legali',
    pt: 'Aviso Legal'
  },
  'footer.legalNotice': {
    es: 'Aviso Legal',
    gl: 'Aviso Legal',
    en: 'Legal Notice',
    fr: 'Mentions Légales',
    de: 'Impressum',
    it: 'Note Legali',
    pt: 'Aviso Legal'
  },
  'footer.privacy': {
    es: 'Política de Privacidad',
    gl: 'Política de Privacidade',
    en: 'Privacy Policy',
    fr: 'Politique de Confidentialité',
    de: 'Datenschutzerklärung',
    it: 'Informativa sulla Privacy',
    pt: 'Política de Privacidade'
  },
  'footer.cookies': {
    es: 'Política de Cookies',
    gl: 'Política de Cookies',
    en: 'Cookie Policy',
    fr: 'Politique de Cookies',
    de: 'Cookie-Richtlinie',
    it: 'Informativa sui Cookie',
    pt: 'Política de Cookies'
  },
  'footer.cookieSettings': {
    es: 'Configurar cookies',
    gl: 'Configurar cookies',
    en: 'Cookie settings',
    fr: 'Paramètres des cookies',
    de: 'Cookie-Einstellungen',
    it: 'Impostazioni cookie',
    pt: 'Configurar cookies'
  },

  // SEO Metadata
  'seo.defaultTitle': {
    es: 'Casa da Cuncheira | Alojamiento vacacional en Lira, Carnota (Costa da Morte)',
    gl: 'Casa da Cuncheira | Aloxamento vacacional en Lira, Carnota (Costa da Morte)',
    en: 'Casa da Cuncheira | Holiday Rental in Lira, Carnota (Costa da Morte)',
    fr: 'Casa da Cuncheira | Location de vacances à Lira, Carnota (Costa da Morte)',
    de: 'Casa da Cuncheira | Ferienhaus in Lira, Carnota (Costa da Morte)',
    it: 'Casa da Cuncheira | Casa vacanze a Lira, Carnota (Costa da Morte)',
    pt: 'Casa da Cuncheira | Alojamento de férias em Lira, Carnota (Costa da Morte)'
  },
  'seo.defaultDescription': {
    es: 'Descubre Casa da Cuncheira, alojamiento vacacional en Lira, Carnota, en plena Costa da Morte. Conoce la casa, sus playas y todo lo que puedes disfrutar durante tu estancia.',
    gl: 'Descobre Casa da Cuncheira, aloxamento vacacional en Lira, Carnota, en plena Costa da Morte. Coñece a casa, as súas praias e todo o que podes gozar na túa estadía.',
    en: 'Discover Casa da Cuncheira, holiday accommodation in Lira, Carnota, right in Costa da Morte. Explore the house, nearby beaches and local experiences.',
    fr: 'Découvrez Casa da Cuncheira, hébergement de vacances à Lira, Carnota, au cœur de la Costa da Morte. Maison, plages et expériences inoubliables.',
    de: 'Entdecken Sie Casa da Cuncheira, Ferienunterkunft in Lira, Carnota, an der Costa da Morte. Erleben Sie das Haus, Strände und unvergessliche Momente.',
    it: 'Scopri Casa da Cuncheira, alloggio vacanze a Lira, Carnota, nel cuore della Costa da Morte. Casa, spiagge ed esperienze autentiche.',
    pt: 'Descubra a Casa da Cuncheira, alojamento de férias em Lira, Carnota, em plena Costa da Morte. Conheça a casa, as praias e tudo o que pode desfrutar.'
  },
  'seo.gastronomyTitle': {
    es: 'Dónde comer en Carnota y Lira: Restaurantes y marisquerías | Casa da Cuncheira',
    gl: 'Onde comer en Carnota e Lira: Restaurantes e marisquerías | Casa da Cuncheira',
    en: 'Where to eat in Carnota & Lira: Seafood & Restaurants | Casa da Cuncheira',
    fr: 'Où manger à Carnota et Lira : Restaurants et fruits de mer | Casa da Cuncheira',
    de: 'Essen in Carnota & Lira: Restaurants & Meeresfrüchte | Casa da Cuncheira',
    it: 'Dove mangiare a Carnota e Lira: Ristoranti e frutti di mare | Casa da Cuncheira',
    pt: 'Onde comer em Carnota e Lira: Restaurantes e marisqueiras | Casa da Cuncheira'
  },
  'seo.gastronomyDescription': {
    es: 'Guía gastronómica local de Carnota y Lira: pescados frescos de lonja, tabernas gallegas y los mejores restaurantes.',
    gl: 'Guía gastronómica local de Carnota e Lira: peixes frescos de lonxa, tabernas galegas e os mellores restaurantes.',
    en: 'Local gastronomy guide for Carnota & Lira: fresh fish from local auctions, traditional Galician taverns, and top restaurants.',
    fr: 'Guide gastronomique local de Carnota et Lira : poissons frais, tavernes galiciennes et les meilleurs restaurants.',
    de: 'Lokaler Gastronomieführer für Carnota & Lira: frischer Fisch von der Auktion, galicische Tavernen und die besten Restaurants.',
    it: 'Guida gastronomica locale di Carnota e Lira: pesce fresco di mercato, taverne galiziane e i migliori ristoranti.',
    pt: 'Guia gastronomico local de Carnota e Lira: peixe fresco da lota, tabernas galegas e os melhores restaurantes.'
  },
  'seo.carnotaTitle': {
    es: 'Playa de Carnota y Boca do Río: Guía, mareas y accesos | Casa da Cuncheira',
    gl: 'Praia de Carnota e Boca do Río: Guía, mareas e accesos | Casa da Cuncheira',
    en: 'Carnota Beach & Boca do Río: Guide, tides & access | Casa da Cuncheira',
    fr: 'Plage de Carnota & Boca do Río : Guide, marées et accès | Casa da Cuncheira',
    de: 'Strand von Carnota & Boca do Río: Reiseführer, Gezeiten & Anfahrt | Casa da Cuncheira',
    it: 'Spiaggia di Carnota e Boca do Río: Guida, maree e accessi | Casa da Cuncheira',
    pt: 'Praia de Carnota e Boca do Río: Guia, marés e acessos | Casa da Cuncheira'
  },
  'seo.carnotaDescription': {
    es: 'Guía completa de la Playa de Carnota y Boca do Río: más de 7 km de arena blanca virgen, piscinas naturales, zonas de aparcamiento, mareas y consejos prácticos.',
    gl: 'Guía completa da Praia de Carnota e Boca do Río: máis de 7 km de areal virxe, piscinas naturais, aparcadoiros, mareas e consellos prácticos.',
    en: 'Complete guide to Carnota Beach & Boca do Río: over 7 km of pristine white sand, natural tidal pools, parking areas, tides, and practical visitor tips.',
    fr: 'Guide complet de la plage de Carnota et Boca do Río : plus de 7 km de sable blanc vierge, piscines naturelles, parkings et conseils pratiques.',
    de: 'Vollständiger Reiseführer zum Strand von Carnota und Boca do Río: über 7 km unberührter Sand, Naturpools bei Ebbe, Parkplätze und Tipps.',
    it: 'Guida completa alla spiaggia di Carnota e Boca do Río: oltre 7 km di sabbia bianca incontaminata, piscine naturali, parcheggi e consigli.',
    pt: 'Guia completo da Praia de Carnota e Boca do Río: mais de 7 km de areia branca virgem, piscinas naturais, estacionamento, marés e dicas.'
  },
  'seo.pindoTitle': {
    es: 'Monte Pindo y cumbre de A Moa: Ruta, desnivel y consejos | Casa da Cuncheira',
    gl: 'Monte Pindo e cumio da Moa: Ruta, desnivel e consellos | Casa da Cuncheira',
    en: 'Mount Pindo & A Moa Peak: Trail route, elevation & tips | Casa da Cuncheira',
    fr: 'Mont Pindo et sommet d\'A Moa : Itinéraire, dénivelé et conseils | Casa da Cuncheira',
    de: 'Monte Pindo & A Moa Gipfel: Wanderroute, Höhenmeter & Tipps | Casa da Cuncheira',
    it: 'Monte Pindo e cima di A Moa: Percorso, dislivello e consigli | Casa da Cuncheira',
    pt: 'Monte Pindo e cume da Moa: Rota, desnível e conselhos | Casa da Cuncheira'
  },
  'seo.pindoDescription': {
    es: 'Ruta de senderismo al Monte Pindo y subida a la cumbre de A Moa (627 m), el Olimpo Celta. Dificultad, puntos de inicio (O Pindo y O Fieiro), agua y consejos de seguridad.',
    gl: 'Ruta de sendeirismo ao Monte Pindo e subida ao cumio da Moa (627 m), o Olimpo Celta. Dificultade, puntos de saída (O Pindo e O Fieiro) e seguridade.',
    en: 'Hiking guide to Mount Pindo and the peak of A Moa (627 m), the Celtic Olympus. Trail difficulty, starting points (O Pindo & O Fieiro), water and safety tips.',
    fr: 'Randonnée au Mont Pindo et ascension du sommet d\'A Moa (627 m), l\'Olympe celtique. Difficulté, points de départ, eau et conseils de sécurité.',
    de: 'Wanderung auf den Monte Pindo und Gipfel A Moa (627 m), den keltischen Olymp. Schwierigkeitsgrad, Startpunkte (O Pindo & O Fieiro) und Sicherheit.',
    it: 'Escursione al Monte Pindo e salita alla cima di A Moa (627 m), l\'Olimpo Celtico. Difficoltà, punti di partenza (O Pindo e O Fieiro) e consigli di sicurezza.',
    pt: 'Caminhada ao Monte Pindo e subida ao cume da Moa (627 m), o Olimpo Celta. Dificuldade, pontos de partida (O Pindo e O Fieiro) e segurança.'
  },
  'seo.liraTitle': {
    es: 'Lira (Carnota): Puerto de Portocubelo, calas y qué ver | Casa da Cuncheira',
    gl: 'Lira (Carnota): Porto de Portocubelo, calas e que ver | Casa da Cuncheira',
    en: 'Lira (Carnota): Portocubelo Harbor, coves & sights | Casa da Cuncheira',
    fr: 'Lira (Carnota) : Port de Portocubelo, criques et visites | Casa da Cuncheira',
    de: 'Lira (Carnota): Hafen Portocubelo, Buchten & Sehenswertes | Casa da Cuncheira',
    it: 'Lira (Carnota): Porto di Portocubelo, calette e cosa vedere | Casa da Cuncheira',
    pt: 'Lira (Carnota): Porto de Portocubelo, enseadas e o que ver | Casa da Cuncheira'
  },
  'seo.liraDescription': {
    es: 'Descubre la parroquia marinera de Lira en Carnota: puerto pesquero de Portocubelo, reserva marina Os Miñarzos, calas tranquilas como Praia de Cons y su hórreo monumental.',
    gl: 'Descobre a parroquia mariñeira de Lira en Carnota: porto pesqueiro de Portocubelo, reserva mariña Os Miñarzos, calas como Praia de Cons e o seu hórreo.',
    en: 'Explore the traditional fishing village of Lira in Carnota: Portocubelo harbor, Os Miñarzos marine reserve, sheltered coves like Praia de Cons and its granary.',
    fr: 'Découvrez le village de pêcheurs de Lira à Carnota : port de Portocubelo, réserve marine Os Miñarzos, criques calmes comme Praia de Cons et hórreo.',
    de: 'Entdecken Sie das Fischerdorf Lira in Carnota: Hafen Portocubelo, Meeresschutzgebiet Os Miñarzos, ruhige Buchten wie Praia de Cons und der Hórreo.',
    it: 'Scopri il borgo marinaro di Lira a Carnota: porto peschereccio di Portocubelo, riserva marina Os Miñarzos, calette tranquille come Praia de Cons e l\'hórreo.',
    pt: 'Descubra a vila piscatória de Lira em Carnota: porto de Portocubelo, reserva marinha Os Miñarzos, enseadas calmas como Praia de Cons e o seu hórreo.'
  },
  'seo.carnotaGuideTitle': {
    es: 'Qué ver en Carnota: 8 lugares imprescindibles y guía local | Casa da Cuncheira',
    gl: 'Que ver en Carnota: 8 lugares imprescindibles e guía local | Casa da Cuncheira',
    en: 'What to see in Carnota: 8 essential sights & local guide | Casa da Cuncheira',
    fr: 'Que voir à Carnota : 8 lieux incontournables et guide local | Casa da Cuncheira',
    de: 'Sehenswürdigkeiten in Carnota: 8 Highlights & Lokaler Guide | Casa da Cuncheira',
    it: 'Cosa vedere a Carnota: 8 luoghi imperdibili e guida locale | Casa da Cuncheira',
    pt: 'O que ver em Carnota: 8 locais imperdíveis e guia local | Casa da Cuncheira'
  },
  'seo.carnotaGuideDescription': {
    es: 'Descubre los 8 lugares que no te puedes perder en Carnota y Costa da Morte: Playa de Carnota, hórreos monumentales, Monte Pindo, Lira, Fervenza do Ézaro y Muros.',
    gl: 'Descobre os 8 lugares que non podes perder en Carnota e Costa da Morte: Praia de Carnota, hórreos monumentais, Monte Pindo, Lira, Fervenza do Ézaro e Muros.',
    en: 'Discover the top 8 must-see places in Carnota and Costa da Morte: Carnota Beach, monumental granaries, Mount Pindo, Lira, Ézaro Waterfall, and Muros.',
    fr: 'Découvrez les 8 lieux incontournables de Carnota et de la Costa da Morte : Plage de Carnota, hórreos géants, Mont Pindo, Lira, Cascade d\'Ézaro et Muros.',
    de: 'Entdecken Sie die 8 wichtigsten Highlights in Carnota und an der Costa da Morte: Strand von Carnota, riesige Hórreos, Monte Pindo, Lira, Ézaro-Wasserfall und Muros.',
    it: 'Scopri gli 8 luoghi imperdibili a Carnota e nella Costa da Morte: Spiaggia di Carnota, grandi hórreos, Monte Pindo, Lira, Cascata dell\'Ézaro e Muros.',
    pt: 'Descubra os 8 locais a não perder em Carnota e na Costa da Morte: Praia de Carnota, hórreos monumentais, Monte Pindo, Lira, Cascata do Ézaro e Muros.'
  },
  'seo.louroTitle': {
    es: 'Monte Louro, Area Maior y Laguna de Xarfas: Guía | Casa da Cuncheira',
    gl: 'Monte Louro, Area Maior e Lagoa de Xarfas: Guía | Casa da Cuncheira',
    en: 'Mount Louro, Area Maior & Xarfas Lagoon: Guide | Casa da Cuncheira',
    fr: 'Mont Louro, Area Maior et Lagune de Xarfas : Guide | Casa da Cuncheira',
    de: 'Monte Louro, Area Maior & Xarfas-Lagune: Reiseführer | Casa da Cuncheira',
    it: 'Monte Louro, Area Maior e Laguna di Xarfas: Guida | Casa da Cuncheira',
    pt: 'Monte Louro, Area Maior e Lagoa de Xarfas: Guia | Casa da Cuncheira'
  },
  'seo.louroDescription': {
    es: 'Descubre el espacio natural protegido de Monte Louro, la salvaje Playa de Area Maior y la Laguna de As Xarfas en la entrada de la Ría de Muros e Noia.',
    gl: 'Descobre o espazo natural protexido de Monte Louro, a salvaxe Praia de Area Maior e a Lagoa de As Xarfas na entrada da Ría de Muros e Noia.',
    en: 'Explore the protected nature area of Mount Louro, wild Area Maior Beach, and As Xarfas coastal lagoon at the entrance of the Muros & Noia Estuary.',
    fr: 'Découvrez l\'espace naturel protégé du Mont Louro, la plage sauvage d\'Area Maior et la lagune d\'As Xarfas à l\'entrée de l\'estuaire de Muros.',
    de: 'Entdecken Sie das Naturschutzgebiet Monte Louro, den wilden Strand Area Maior und die Küstenlagune As Xarfas an der Mündung von Muros.',
    it: 'Scopri l\'area naturale protetta del Monte Louro, la spiaggia selvaggia di Area Maior e la laguna di As Xarfas all\'ingresso dell\'estuario di Muros.',
    pt: 'Descubra o espaço natural protegido do Monte Louro, a praia selvagem de Area Maior e a Lagoa de As Xarfas na entrada da Ria de Muros e Noia.'
  },
  'seo.ezaroTitle': {
    es: 'Fervenza do Ézaro: Cascada del río Xallas y mirador | Casa da Cuncheira',
    gl: 'Fervenza do Ézaro: Salto do río Xallas e miradoiro | Casa da Cuncheira',
    en: 'Ézaro Waterfall: River Xallas fall & panoramic viewpoint | Casa da Cuncheira',
    fr: 'Cascade d\'Ézaro : Chute du fleuve Xallas et belvédère | Casa da Cuncheira',
    de: 'Ézaro-Wasserfall: Fluss Xallas & Aussichtspunkt | Casa da Cuncheira',
    it: 'Cascata dell\'Ézaro: Fiume Xallas e punto panoramico | Casa da Cuncheira',
    pt: 'Cascata do Ézaro: Queda do rio Xallas e miradouro | Casa da Cuncheira'
  },
  'seo.ezaroDescription': {
    es: 'Visita la Fervenza do Ézaro, la única cascada de la Península Ibérica que desemboca en el océano Atlántico. Información sobre pasarelas, mirador y aparcamiento.',
    gl: 'Visita a Fervenza do Ézaro, a única fervenza da Península Ibérica que desemboca no océano Atlántico. Información de pasarelas, miradoiro e aparcadoiro.',
    en: 'Visit the Ézaro Waterfall, the only waterfall in the Iberian Peninsula cascading directly into the Atlantic Ocean. Boardwalk access, viewpoint, and parking info.',
    fr: 'Visitez la cascade d\'Ézaro, la seule cascade de la péninsule Ibérique se jetant directement dans l\'océan Atlantique. Accès, passerelles et belvédère.',
    de: 'Besuchen Sie den Ézaro-Wasserfall, den einzigen Wasserfall der Iberischen Halbinsel, der direkt in den Atlantik mündet. Holzstege, Aussichtspunkt und Parktipps.',
    it: 'Visita la cascata dell\'Ézaro, l\'unica cascata della penisola iberica che sfocia direttamente nell\'oceano Atlantico. Passerelle e punto panoramico.',
    pt: 'Visite a Cascata do Ézaro, a única cascata da Península Ibérica que desagua diretamente no Oceano Atlântico. Informação de passadiços e miradouro.'
  },
  'seo.fisterraTitle': {
    es: 'Cabo Fisterra (Finisterre): Faro, historia y atardecer | Casa da Cuncheira',
    gl: 'Cabo Fisterra: Faro, historia e solpor | Casa da Cuncheira',
    en: 'Cape Finisterre: Lighthouse, history & sunset | Casa da Cuncheira',
    fr: 'Cap Finisterre : Phare, histoire et coucher de soleil | Casa da Cuncheira',
    de: 'Kap Finisterre: Leuchtturm, Geschichte & Sonnenuntergang | Casa da Cuncheira',
    it: 'Capo Finisterre: Faro, storia e tramonto | Casa da Cuncheira',
    pt: 'Cabo Finisterra: Farol, história e pôr do sol | Casa da Cuncheira'
  },
  'seo.fisterraDescription': {
    es: 'Guía para visitar el legendario Cabo Fisterra (Finisterre): historia del Finis Terrae, el Faro de 1853, el mojón del Km 0 del Camino de Santiago y el atardecer atlántico.',
    gl: 'Guía para visitar o lendario Cabo Fisterra: historia do Finis Terrae, o Faro de 1853, o fito do Km 0 do Camiño de Santiago e o solpor atlántico.',
    en: 'Visitor guide to legendary Cape Finisterre: history of the Finis Terrae, 1853 lighthouse, Kilometer 0 Camino marker, and dramatic Atlantic sunsets.',
    fr: 'Guide pour visiter le légendaire Cap Finisterre : histoire du Finis Terrae, le phare de 1853, la borne du Km 0 du Chemin de Compostelle et le coucher de soleil.',
    de: 'Reiseführer zum legendären Kap Finisterre: Geschichte des Finis Terrae, Leuchtturm von 1853, Km-0-Meilenstein des Jakobswegs und Sonnenuntergänge.',
    it: 'Guida per visitare il leggendario Capo Finisterre: storia del Finis Terrae, faro del 1853, pietra miliare del Km 0 del Cammino di Santiago e tramonto.',
    pt: 'Guia para visitar o lendário Cabo Finisterra: história do Finis Terrae, farol de 1853, marco do Km 0 do Caminho de Santiago e pôr do sol.'
  },
  'seo.bookingTitle': {
    es: 'Reserva Directa en Casa da Cuncheira | Mejor Precio en Lira, Carnota',
    gl: 'Reserva Directa en Casa da Cuncheira | Mellor Prezo en Lira, Carnota',
    en: 'Direct Booking at Casa da Cuncheira | Best Rates in Lira, Carnota',
    fr: 'Réservation Directe à Casa da Cuncheira | Meilleur Tarif à Lira, Carnota',
    de: 'Direktbuchung bei Casa da Cuncheira | Bester Preis in Lira, Carnota',
    it: 'Prenotazione Diretta a Casa da Cuncheira | Miglior Prezzo a Lira, Carnota',
    pt: 'Reserva Direta na Casa da Cuncheira | Melhor Preço em Lira, Carnota'
  },
  'seo.bookingDescription': {
    es: 'Reserva directamente tu estancia en Casa da Cuncheira (Lira, Carnota). Consulta disponibilidad en tiempo real, mejores tarifas sin comisiones y confirmación inmediata.',
    gl: 'Reserva directamente a túa estancia en Casa da Cuncheira (Lira, Carnota). Consulta dispoñibilidade en tempo real, mellores tarifas sen comisións e confirmación inmediata.',
    en: 'Book your stay directly at Casa da Cuncheira (Lira, Carnota). Check real-time availability, best rates with no middlemen fees, and instant confirmation.',
    fr: 'Réservez votre séjour directement à Casa da Cuncheira (Lira, Carnota). Disponibilité en temps réel, meilleurs tarifs sans commission et confirmation immédiate.',
    de: 'Buchen Sie Ihren Aufenthalt direkt bei Casa da Cuncheira (Lira, Carnota). Echtzeit-Verfügbarkeit, beste Preise ohne Zwischenhändler und sofortige Bestätigung.',
    it: 'Prenota il tuo soggiorno direttamente a Casa da Cuncheira (Lira, Carnota). Disponibilità in tempo reale, migliori tariffe senza commissioni e conferma immediata.',
    pt: 'Reserve a sua estadia diretamente na Casa da Cuncheira (Lira, Carnota). Disponibilidade em tempo real, melhores tarifas sem comissões e confirmação imediata.'
  },

  // Hero
  'hero.title': {
    es: 'Casa da Cuncheira: alojamiento vacacional en Lira, Carnota',
    gl: 'Casa da Cuncheira: aloxamento vacacional en Lira, Carnota',
    en: 'Casa da Cuncheira: holiday rental in Lira, Carnota',
    fr: 'Casa da Cuncheira : hébergement de vacances à Lira, Carnota',
    de: 'Casa da Cuncheira: Ferienhaus in Lira, Carnota',
    it: 'Casa da Cuncheira: alloggio vacanze a Lira, Carnota',
    pt: 'Casa da Cuncheira: alojamento de férias em Lira, Carnota'
  },
  'hero.subtitle': {
    es: 'Tu refugio junto al Atlántico, en plena Costa da Morte',
    gl: 'O teu refuxio xunto ao Atlántico, en plena Costa da Morte',
    en: 'Your retreat by the Atlantic, in the heart of Costa da Morte',
    fr: 'Votre refuge au bord de l\'Atlantique, au cœur de la Costa da Morte',
    de: 'Ihr Rückzugsort am Atlantik, mitten an der Costa da Morte',
    it: 'Il tuo rifugio vicino all\'Atlantico, nel cuore della Costa da Morte',
    pt: 'O seu refúgio junto ao Atlântico, no coração da Costa da Morte'
  },
  'hero.cta': { es: 'Conocer la casa', gl: 'Coñecer a casa', en: 'Explore the house', fr: 'Découvrir la maison', de: 'Das Haus entdecken', it: 'Scopri la casa', pt: 'Conhecer a casa' },
  'hero.bookDirect': { es: 'Consultar disponibilidad', gl: 'Consultar dispoñibilidade', en: 'Check availability', fr: 'Consulter la disponibilité', de: 'Verfügbarkeit prüfen', it: 'Verifica disponibilità', pt: 'Consultar disponibilidade' },

  // Features & Intro Section
  'features.intro.title': {
    es: 'Una casa junto al mar en Lira, Carnota',
    gl: 'Unha casa xunto ao mar en Lira, Carnota',
    en: 'A home by the sea in Lira, Carnota',
    fr: 'Une maison au bord de la mer à Lira, Carnota',
    de: 'Ein Haus am Meer in Lira, Carnota',
    it: 'Una casa sul mare a Lira, Carnota',
    pt: 'Uma casa junto ao mar em Lira, Carnota'
  },
  'features.intro.desc': {
    es: 'Casa da Cuncheira es un alojamiento vacacional situado en Lira, en el municipio de Carnota, en plena Costa da Morte. Un lugar desde el que disfrutar del mar, las calas tranquilas como Praia de Cons y el impresionante arenal de la Playa de Carnota.',
    gl: 'Casa da Cuncheira é un acolledor aloxamento vacacional situado en Lira, no concello de Carnota, en plena Costa da Morte. Un enclave privilexiado dende o que gozar do mar, calas como a Praia de Cons e o impresionante areal da Praia de Carnota.',
    en: 'Casa da Cuncheira is a welcoming holiday home in Lira, in the municipality of Carnota, in the heart of Costa da Morte. An ideal place to enjoy the ocean, secluded coves like Praia de Cons, and the vast sands of Carnota Beach.',
    fr: 'Casa da Cuncheira est un hébergement de vacances situé à Lira, dans la commune de Carnota, au cœur de la Costa da Morte. Un lieu idéal pour profiter de la mer, des criques comme Praia de Cons et de l\'immense plage de Carnota.',
    de: 'Casa da Cuncheira ist eine Ferienunterkunft in Lira, in der Gemeinde Carnota, an der Costa da Morte. Ein herrlicher Ort, um das Meer, ruhige Buchten wie Praia de Cons und den weiten Strand von Carnota zu genießen.',
    it: 'Casa da Cuncheira è un alloggio vacanze situato a Lira, nel comune di Carnota, nella Costa da Morte. Un luogo ideale per godersi il mare, calette come Praia de Cons e la grande spiaggia di Carnota.',
    pt: 'A Casa da Cuncheira é um alojamento de férias situado em Lira, no município de Carnota, em plena Costa da Morte. Um local ideal para desfrutar do mar, enseadas como a Praia de Cons e o extenso areal da Praia de Carnota.'
  },
  'features.badge.guests': { es: '6 huéspedes', gl: '6 hóspedes', en: '6 guests', fr: '6 personnes', de: '6 Gäste', it: '6 ospiti', pt: '6 hóspedes' },
  'features.badge.bedrooms': { es: '4 dormitorios', gl: '4 dormitorios', en: '4 bedrooms', fr: '4 chambres', de: '4 Schlafzimmer', it: '4 camere', pt: '4 quartos' },
  'features.badge.bathrooms': { es: '2 baños', gl: '2 baños', en: '2 bathrooms', fr: '2 salles de bain', de: '2 Bäder', it: '2 bagni', pt: '2 casas de banho' },
  'features.badge.wifi': { es: 'Wi-Fi 5G', gl: 'Wi-Fi 5G', en: '5G Wi-Fi', fr: 'Wi-Fi 5G', de: '5G-WLAN', it: 'Wi-Fi 5G', pt: 'Wi-Fi 5G' },
  'features.badge.views': { es: 'Vistas al mar', gl: 'Vistas ao mar', en: 'Ocean views', fr: 'Vue sur la mer', de: 'Meerblick', it: 'Vista mare', pt: 'Vista para o mar' },
  'features.badge.terrace': { es: 'Terraza y jardín', gl: 'Terraza e xardín', en: 'Terrace & garden', fr: 'Terrasse et jardin', de: 'Terrasse & Garten', it: 'Terrazza e giardino', pt: 'Terraço e jardim' },
  'features.badge.ac': { es: 'Climatización', gl: 'Climatización', en: 'Air conditioning', fr: 'Climatisation', de: 'Klimaanlage', it: 'Aria condizionata', pt: 'Ar condicionado' },
  'features.badge.checkin': { es: 'Auto check-in', gl: 'Auto check-in', en: 'Self check-in', fr: 'Arrivée autonome', de: 'Selbst-Check-in', it: 'Self check-in', pt: 'Auto check-in' },

  'features.lira.title': { es: 'Lira y sus calas', gl: 'Lira e as súas calas', en: 'Lira & its coves', fr: 'Lira et ses criques', de: 'Lira und seine Buchten', it: 'Lira e le sue calette', pt: 'Lira e as suas enseadas' },
  'features.lira.desc': { es: 'Praia de Cons, Praia do Cancelo y el puerto pesquero de Portocubelo a pocos minutos a pie', gl: 'Praia de Cons, Praia do Cancelo e o porto pesqueiro de Portocubelo a poucos minutos a pé', en: 'Praia de Cons, Praia do Cancelo and Portocubelo fishing harbor just minutes away', fr: 'Praia de Cons, Praia do Cancelo et le port de Portocubelo à quelques minutes', de: 'Praia de Cons, Praia do Cancelo und der Fischerhafen Portocubelo wenige Gehminuten entfernt', it: 'Praia de Cons, Praia do Cancelo e il porto di Portocubelo a pochi minuti', pt: 'Praia de Cons, Praia do Cancelo e o porto de Portocubelo a poucos minutos a pé' },
  'features.carnota.title': { es: 'Playa de Carnota', gl: 'Praia de Carnota', en: 'Carnota Beach', fr: 'Plage de Carnota', de: 'Strand von Carnota', it: 'Spiaggia di Carnota', pt: 'Praia de Carnota' },
  'features.carnota.desc': { es: 'Más de 7 km de arenal virgen, dunas y las piscinas naturales de Boca do Río a 10 min', gl: 'Máis de 7 km de areal virxe, dunas e as piscinas naturais de Boca do Río a 10 min', en: 'Over 7 km of pristine sand, dunes and the natural pools of Boca do Río 10 min away', fr: 'Plus de 7 km de sable vierge, dunes et piscines naturelles de Boca do Río à 10 min', de: 'Über 7 km unberührter Sand, Dünen und die Naturpools von Boca do Río in 10 Min.', it: 'Oltre 7 km di sabbia incontaminata, dune e le piscine naturali di Boca do Río a 10 min', pt: 'Mais de 7 km de areal virgem, dunas e as piscinas naturais de Boca do Río a 10 min' },
  'features.pindo.title': { es: 'Monte Pindo y A Moa', gl: 'Monte Pindo e A Moa', en: 'Mount Pindo & A Moa', fr: 'Mont Pindo & A Moa', de: 'Monte Pindo & A Moa', it: 'Monte Pindo e A Moa', pt: 'Monte Pindo e A Moa' },
  'features.pindo.desc': { es: 'El Olimpo celta con rutas de senderismo y vistas panorámicas sobre la costa', gl: 'O Olimpo celta con rutas de sendeirismo e vistas panorámicas sobre a costa', en: 'The Celtic Olympus with hiking trails and panoramic coastal views', fr: 'L\'Olympe celtique avec sentiers de randonnée et vues panoramiques côtières', de: 'Der keltische Olymp mit Wanderwegen und Panoramablick auf die Küste', it: 'L\'Olimpo celtico con sentieri escursionistici e viste panoramiche', pt: 'O Olimpo celta com trilhas de caminhada e vistas panorâmicas sobre a costa' },
  'features.sunset.title': { es: 'Atardeceres Atlánticos', gl: 'Atardeceres Atlánticos', en: 'Atlantic Sunsets', fr: 'Couchers de soleil Atlantiques', de: 'Atlantik-Sonnenuntergänge', it: 'Tramonti Atlantici', pt: 'Pôr do sol no Atlântico' },
  'features.sunset.desc': { es: 'Puestas de sol sobre el océano que tiñen de dorado el horizonte de Galicia', gl: 'Postas de sol sobre o océano que tinguen de dourado o horizonte de Galicia', en: 'Sunsets over the ocean that bathe the Galician horizon in golden light', fr: 'Couchers de soleil sur l\'océan baignant l\'horizon galicien de lumière dorée', de: 'Sonnenuntergänge über dem Ozean, die den Horizont in goldenes Licht tauchen', it: 'Tramonti sull\'oceano che colorano di luce dorata l\'orizzonte galiziano', pt: 'Pôr do sol sobre o oceano banhando o horizonte galego de luz dourada' },

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
  'house.amenities.checkin': { es: 'Auto check-in', gl: 'Auto check-in', en: 'Self check-in', fr: 'Arrivée autonome', de: 'Selbst-Check-in', it: 'Self check-in', pt: 'Auto check-in' },

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
  'booking.submit': { es: 'Enviar solicitud', gl: 'Enviar solicitude', en: 'Send request', fr: 'Envoyer la demande', de: 'Anfrage senden', it: 'Invia richiesta', pt: 'Enviar pedido' },
  'booking.success': {
    es: '¡Solicitud enviada! Te contactaremos pronto.',
    gl: 'Solicitude enviada! Contactaremos contigo pronto.',
    en: 'Request sent! We will contact you soon.',
    fr: 'Demande envoyée ! Nous vous contacterons bientôt.',
    de: 'Anfrage gesendet! Wir werden Sie bald kontaktieren.',
    it: 'Richiesta inviata! Ti contatteremo presto.',
    pt: 'Pedido enviado! Contactaremos em breve.'
  },
  'booking.placeholder.name': {
    es: 'Tu nombre completo',
    gl: 'O teu nome completo',
    en: 'Your full name',
    fr: 'Votre nom complet',
    de: 'Ihr vollständiger Name',
    it: 'Il tuo nome completo',
    pt: 'Seu nome completo'
  },
  'booking.placeholder.message': {
    es: 'Cuéntanos algo sobre tu viaje...',
    gl: 'Cóntanos algo sobre a túa viaxe...',
    en: 'Tell us something about your trip...',
    fr: 'Dites-nous en plus sur votre voyage...',
    de: 'Erzählen Sie uns etwas über Ihre Reise...',
    it: 'Raccontaci qualcosa sul tuo viaggio...',
    pt: 'Conte-nos algo sobre a sua viagem...'
  },
  'booking.note': { es: 'Sin compromiso • Confirmación rápida', gl: 'Sen compromiso • Confirmación rápida', en: 'No commitment • Quick confirmation', fr: 'Sans engagement • Confirmation rapide', de: 'Ohne Verpflichtung • Schnelle Bestätigung', it: 'Senza impegno • Conferma rapida', pt: 'Sem compromisso • Confirmação rápida' },
  'booking.toast.success': {
    es: '¡Solicitud enviada! Te contactaremos pronto.',
    gl: 'Solicitude enviada! Contactaremos contigo pronto.',
    en: 'Request sent! We will contact you soon.',
    fr: 'Demande envoyée ! Nous vous contacterons bientôt.',
    de: 'Anfrage gesendet! Wir werden Sie bald kontaktieren.',
    it: 'Richiesta inviata! Ti contatteremo presto.',
    pt: 'Pedido enviado! Contactaremos em breve.'
  },
  'booking.placeholder.email': {
    es: 'Tu email',
    gl: 'O teu email',
    en: 'Your email',
    fr: 'Votre email',
    de: 'Ihre E-Mail',
    it: 'La tua email',
    pt: 'Seu email'
  },
  'booking.placeholder.phone': {
    es: '+34 600 000 000',
    gl: '+34 600 000 000',
    en: '+34 600 000 000',
    fr: '+34 600 000 000',
    de: '+34 600 000 000',
    it: '+34 600 000 000',
    pt: '+34 600 000 000'
  },

  // Dedicated Booking Page (/reservas)
  'reservas.hero.badge': {
    es: 'Reserva Oficial Directa',
    gl: 'Reserva Oficial Directa',
    en: 'Official Direct Booking',
    fr: 'Réservation Directe Officielle',
    de: 'Offizielle Direktbuchung',
    it: 'Prenotazione Diretta Ufficiale',
    pt: 'Reserva Oficial Direta'
  },
  'reservas.hero.title': {
    es: 'Tu Estancia en Casa da Cuncheira',
    gl: 'A túa Estancia en Casa da Cuncheira',
    en: 'Your Stay at Casa da Cuncheira',
    fr: 'Votre Séjour à Casa da Cuncheira',
    de: 'Ihr Aufenthalt in Casa da Cuncheira',
    it: 'Il Tuo Soggiorno a Casa da Cuncheira',
    pt: 'A sua Estadia na Casa da Cuncheira'
  },
  'reservas.hero.subtitle': {
    es: 'Selecciona las fechas de tu viaje y consulta la disponibilidad en tiempo real con el mejor precio garantizado sin comisiones.',
    gl: 'Selecciona as datas da túa viaxe e consulta a dispoñibilidade en tempo real co mellor prezo garantido sen comisións.',
    en: 'Select your travel dates and check real-time availability with the best rate guaranteed and no middleman fees.',
    fr: 'Sélectionnez vos dates de séjour et vérifiez la disponibilité en temps réel au meilleur tarif garanti sans commission.',
    de: 'Wählen Sie Ihre Reisedaten und prüfen Sie die Echtzeit-Verfügbarkeit mit Bestpreisgarantie ohne Vermittlungsgebühren.',
    it: 'Seleziona le date del tuo viaggio e verifica la disponibilità in tempo reale con il miglior prezzo garantito senza commissioni.',
    pt: 'Selecione as datas da sua viagem e consulte a disponibilidade em tempo real com o melhor preço garantido sem comissões.'
  },
  'reservas.selector.title': {
    es: 'Planifica tus fechas',
    gl: 'Planifica as túas datas',
    en: 'Plan your dates',
    fr: 'Planifiez vos dates',
    de: 'Planen Sie Ihre Daten',
    it: 'Pianifica le tue date',
    pt: 'Planeie as suas datas'
  },
  'reservas.selector.checkin': {
    es: 'Fecha de Entrada',
    gl: 'Data de Entrada',
    en: 'Check-in Date',
    fr: 'Date d\'Arrivée',
    de: 'Anreisedatum',
    it: 'Data di Arrivo',
    pt: 'Data de Check-in'
  },
  'reservas.selector.checkout': {
    es: 'Fecha de Salida',
    gl: 'Data de Saída',
    en: 'Check-out Date',
    fr: 'Date de Départ',
    de: 'Abreisedatum',
    it: 'Data di Partenza',
    pt: 'Data de Check-out'
  },
  'reservas.selector.guests': {
    es: 'Huéspedes',
    gl: 'Hóspedes',
    en: 'Guests',
    fr: 'Voyageurs',
    de: 'Gäste',
    it: 'Ospiti',
    pt: 'Hóspedes'
  },
  'reservas.selector.guestSingular': {
    es: 'huésped',
    gl: 'hóspede',
    en: 'guest',
    fr: 'voyageur',
    de: 'Gast',
    it: 'ospite',
    pt: 'hóspede'
  },
  'reservas.selector.guestPlural': {
    es: 'huéspedes',
    gl: 'hóspedes',
    en: 'guests',
    fr: 'voyageurs',
    de: 'Gäste',
    it: 'ospiti',
    pt: 'hóspedes'
  },
  'reservas.selector.updateBtn': {
    es: 'Iniciar reserva',
    gl: 'Iniciar reserva',
    en: 'Start Booking',
    fr: 'Commencer la Réservation',
    de: 'Buchung Starten',
    it: 'Inizia Prenotazione',
    pt: 'Iniciar Reserva'
  },
  'reservas.iframe.loading': {
    es: 'Conectando con el motor seguro de reservas...',
    gl: 'Conectando co motor seguro de reservas...',
    en: 'Connecting to secure booking engine...',
    fr: 'Connexion au moteur de réservation sécurisé...',
    de: 'Verbindung zur sicheren Buchungsmaschine...',
    it: 'Connessione al motore di prenotazione sicuro...',
    pt: 'A ligar ao motor seguro de reservas...'
  },
  'reservas.iframe.fullscreenBtn': {
    es: 'Abrir motor en nueva ventana',
    gl: 'Abrir motor en nova ventá',
    en: 'Open engine in new tab',
    fr: 'Ouvrir le moteur dans un nouvel onglet',
    de: 'Buchung in neuem Tab öffnen',
    it: 'Apri motore in una nuova scheda',
    pt: 'Abrir motor num novo separador'
  },
  'reservas.iframe.help': {
    es: '¿Prefieres completar la reserva en pantalla completa o tu navegador restringe marcos incrustados?',
    gl: 'Prefires completar a reserva en pantalla completa ou o teu navegador restrinxe marcos incrustados?',
    en: 'Prefer to complete your booking full screen or is your browser restricting embedded frames?',
    fr: 'Vous préférez réserver en plein écran ou votre navigateur restreint les cadres intégrés ?',
    de: 'Bevorzugen Sie die Vollbild-Buchung oder blockiert Ihr Browser eingebettete Frames?',
    it: 'Preferisci completare la prenotazione a schermo intero o il browser limita i frame incorporati?',
    pt: 'Prefere concluir a reserva em ecrã inteiro ou o seu navegador restringe molduras incorporadas?'
  },
  'reservas.guarantees.bestPrice.title': {
    es: 'Mejor Precio Garantizado',
    gl: 'Mellor Prezo Garantido',
    en: 'Best Price Guaranteed',
    fr: 'Meilleur Prix Garanti',
    de: 'Bestpreisgarantie',
    it: 'Miglior Prezzo Garantito',
    pt: 'Melhor Preço Garantido'
  },
  'reservas.guarantees.bestPrice.desc': {
    es: 'Sin comisiones de plataformas intermediarias. La tarifa más ventajosa garantizada directamente con la propiedad.',
    gl: 'Sen comisións de plataformas intermediarias. A tarifa máis vantaxosa garantida directamente coa propiedade.',
    en: 'No middleman platform commissions. Guaranteed best rates directly with the property.',
    fr: 'Sans commissions de plateformes intermédiaires. Le tarif le plus avantageux garanti en direct avec la propriété.',
    de: 'Keine Vermittlungsprovisionen. Der günstigste Tarif direkt beim Eigentümer garantiert.',
    it: 'Nessuna commissione per le piattaforme intermedie. La tariffa più vantaggiosa garantita direttamente con la struttura.',
    pt: 'Sem comissões de plataformas intermediárias. A tarifa mais vantajosa garantida diretamente com a propriedade.'
  },
  'reservas.guarantees.securePayment.title': {
    es: 'Pago Seguro Encriptado SSL',
    gl: 'Pago Seguro Encriptado SSL',
    en: '100% Secure SSL Payment',
    fr: 'Paiement 100% Sécurisé SSL',
    de: '100% sichere SSL-Zahlung',
    it: 'Pagamento Sicuro Crittografato SSL',
    pt: 'Pagamento Seguro Encriptado SSL'
  },
  'reservas.guarantees.securePayment.desc': {
    es: 'Pasarela bancaria oficial de AvaiBook certificada con los más altos estándares de seguridad y protección de datos.',
    gl: 'Pasarela bancaria oficial de AvaiBook certificada cos máis altos estándares de seguridade e protección de datos.',
    en: 'Official AvaiBook banking gateway certified with top tier security and data privacy standards.',
    fr: 'Passerelle bancaire officielle AvaiBook certifiée selon les normes de sécurité et de confidentialité les plus strictes.',
    de: 'Offizielles AvaiBook-Banking-Gateway, zertifiziert nach höchsten Sicherheits- und Datenschutzstandards.',
    it: 'Gateway bancario ufficiale AvaiBook certificato con i più elevati standard di sicurezza e privacy.',
    pt: 'Gateway bancário oficial AvaiBook certificado com os mais elevados padrões de segurança e privacidade.'
  },
  'reservas.guarantees.directHost.title': {
    es: 'Atención Directa y Personal',
    gl: 'Atención Directa e Persoal',
    en: 'Direct & Personal Attention',
    fr: 'Accueil Direct et Personnalisé',
    de: 'Persönliche Betreuung',
    it: 'Assistenza Diretta e Personale',
    pt: 'Atendimento Direto e Pessoal'
  },
  'reservas.guarantees.directHost.desc': {
    es: 'Trato cercano con los anfitriones antes y durante tu estancia para que tu viaje a la Costa da Morte sea perfecto.',
    gl: 'Trato próximo cos anfitrións antes e durante a túa estancia para que a túa viaxe á Costa da Morte sexa perfecta.',
    en: 'Personal support from the hosts before and during your stay for a memorable Costa da Morte experience.',
    fr: 'Assistance personnalisée des hôtes avant et pendant votre séjour pour une expérience inoubliable.',
    de: 'Persönlicher Kontakt mit den Gastgebern vor und während Ihres Aufenthalts für ein unvergessliches Erlebnis.',
    it: 'Supporto personale dai proprietari prima e durante il soggiorno per un\'esperienza indimenticabile.',
    pt: 'Acompanhamento pessoal dos anfitriões antes e durante a sua estadia para uma experiência inesquecível.'
  },
  'reservas.guarantees.instant.title': {
    es: 'Confirmación Inmediata',
    gl: 'Confirmación Inmediata',
    en: 'Instant Confirmation',
    fr: 'Confirmation Immédiate',
    de: 'Sofortige Bestätigung',
    it: 'Conferma Immediata',
    pt: 'Confirmação Imediata'
  },
  'reservas.guarantees.instant.desc': {
    es: 'Calendario y tarifas actualizados en tiempo real con recepción instantánea de tu bono de reserva y confirmación.',
    gl: 'Calendario e tarifas actualizados en tempo real con recepción instantánea do teu bono de reserva e confirmación.',
    en: 'Real-time updated calendar and rates with instant voucher delivery directly to your inbox.',
    fr: 'Calendrier et tarifs mis à jour en temps réel avec envoi instantané de votre bon de réservation par e-mail.',
    de: 'Echtzeit-Kalender und Tarife mit sofortiger Zustellung Ihrer Buchungsbestätigung per E-Mail.',
    it: 'Calendario e tariffe aggiornati in tempo reale con ricezione istantanea del voucher di conferma via e-mail.',
    pt: 'Calendário e tarifas atualizados em tempo real com envio instantâneo do comprovativo de reserva para o seu e-mail.'
  },
  'reservas.house.title': {
    es: 'Sobre Casa da Cuncheira',
    gl: 'Sobre Casa da Cuncheira',
    en: 'About Casa da Cuncheira',
    fr: 'À Propos de Casa da Cuncheira',
    de: 'Über Casa da Cuncheira',
    it: 'Informazioni su Casa da Cuncheira',
    pt: 'Sobre a Casa da Cuncheira'
  },
  'reservas.house.subtitle': {
    es: 'Vivienda de Uso Turístico Oficial (VUT-CO-002236) en Lira, Carnota',
    gl: 'Vivenda de Uso Turístico Oficial (VUT-CO-002236) en Lira, Carnota',
    en: 'Official Tourist Accommodation (VUT-CO-002236) in Lira, Carnota',
    fr: 'Hébergement Touristique Officiel (VUT-CO-002236) à Lira, Carnota',
    de: 'Offizielle Ferienunterkunft (VUT-CO-002236) in Lira, Carnota',
    it: 'Alloggio Turistico Ufficiale (VUT-CO-002236) a Lira, Carnota',
    pt: 'Alojamento Turístico Oficial (VUT-CO-002236) em Lira, Carnota'
  },
  'reservas.house.featureCapacity': {
    es: 'Hasta 6 personas • 4 dormitorios amplios',
    gl: 'Ata 6 persoas • 4 dormitorios amplos',
    en: 'Up to 6 guests • 4 spacious bedrooms',
    fr: 'Jusqu\'à 6 personnes • 4 chambres spacieuses',
    de: 'Bis zu 6 Gäste • 4 geräumige Schlafzimmer',
    it: 'Fino a 6 ospiti • 4 ampie camere da letto',
    pt: 'Até 6 pessoas • 4 quartos espaçosos'
  },
  'reservas.house.featureLocation': {
    es: 'A 10-12 min a pie de la playa de Mar de Lira (~1 km)',
    gl: 'A 10-12 min a pé da praia de Mar de Lira (~1 km)',
    en: '10-12 min walk to Mar de Lira beach (~1 km)',
    fr: 'À 10-12 min à pied de la plage de Mar de Lira (~1 km)',
    de: '10-12 Gehminuten zum Strand Mar de Lira (~1 km)',
    it: 'A 10-12 min a piedi dalla spiaggia di Mar de Lira (~1 km)',
    pt: 'A 10-12 min a pé da praia de Mar de Lira (~1 km)'
  },
  'reservas.house.featureGarden': {
    es: 'Jardín privado con barbacoa y vistas al mar',
    gl: 'Xardín privado con churrasqueira e vistas ao mar',
    en: 'Private garden with BBQ and Atlantic ocean views',
    fr: 'Jardin privé avec barbecue et vue sur l\'océan',
    de: 'Privater Garten mit Grill und Meerblick',
    it: 'Giardino privato con barbecue e vista mare',
    pt: 'Jardim privado com churrasqueira e vista mar'
  },
  'reservas.house.featureCheckin': {
    es: 'Entrada flexible desde las 17:00 • Salida hasta las 11:00',
    gl: 'Entrada flexible dende as 17:00 • Saída ata as 11:00',
    en: 'Flexible check-in from 17:00 • Check-out until 11:00',
    fr: 'Arrivée flexible dès 17h00 • Départ jusqu\'à 11h00',
    de: 'Flexibler Check-in ab 17:00 • Check-out bis 11:00',
    it: 'Check-in flessibile dalle 17:00 • Check-out entro le 11:00',
    pt: 'Check-in flexível a partir das 17:00 • Check-out até às 11:00'
  },
  'reservas.contact.title': {
    es: '¿Preguntas sobre tu reserva?',
    gl: 'Preguntas sobre a túa reserva?',
    en: 'Questions about your booking?',
    fr: 'Des questions sur votre réservation ?',
    de: 'Fragen zu Ihrer Buchung?',
    it: 'Domande sulla tua prenotazione?',
    pt: 'Dúvidas sobre a sua reserva?'
  },
  'reservas.contact.desc': {
    es: 'Si necesitas consultar fechas especiales, estancias largas o tienes requerimientos particulares, contáctanos directamente.',
    gl: 'Se precisas consultar datas especiais, estancias longas ou tes requirimentos particulares, contáctanos directamente.',
    en: 'If you need special dates, extended stays, or have unique requirements, get in touch with us directly.',
    fr: 'Pour des dates spéciales, de longs séjours ou des demandes particulières, n\'hésitez pas à nous contacter directement.',
    de: 'Für spezielle Daten, längere Aufenthalte oder besondere Wünsche kontaktieren Sie uns bitte direkt.',
    it: 'Per date speciali, soggiorni prolungati o richieste particolari, contattaci direttamente.',
    pt: 'Se precisar de consultar datas especiais, estadias longas ou tiver requisitos específicos, contacte-nos diretamente.'
  },
  'reservas.contact.whatsapp': {
    es: 'Consultar por WhatsApp',
    gl: 'Consultar por WhatsApp',
    en: 'Chat on WhatsApp',
    fr: 'Discuter sur WhatsApp',
    de: 'Über WhatsApp anfragen',
    it: 'Scrivici su WhatsApp',
    pt: 'Conversar no WhatsApp'
  },
  'reservas.contact.call': {
    es: 'Llamar por Teléfono',
    gl: 'Chamar por Teléfono',
    en: 'Call by Phone',
    fr: 'Appeler par Téléphone',
    de: 'Telefonisch anrufen',
    it: 'Chiama al Telefono',
    pt: 'Ligar por Telefone'
  },
  'testimonials.title': {
    es: 'Opiniones de nuestros huéspedes',
    gl: 'Opinións dos nosos hóspedes',
    en: 'What our guests say',
    fr: 'Ce que disent nos invités',
    de: 'Was unsere Gäste sagen',
    it: 'Cosa dicono i nostri ospiti',
    pt: 'O que dizem os nossos hóspedes'
  },
  'testimonials.badge': {
    es: 'Calificación 4.9 ★ en Airbnb · Huéspedes verificados',
    gl: 'Cualificación 4.9 ★ en Airbnb · Hóspedes verificados',
    en: '4.9 ★ Rating on Airbnb · Verified Guests',
    fr: 'Note de 4.9 ★ sur Airbnb · Voyageurs vérifiés',
    de: '4.9 ★ Bewertung auf Airbnb · Verifizierte Gäste',
    it: 'Valutazione 4.9 ★ su Airbnb · Ospiti verificati',
    pt: 'Classificação 4.9 ★ no Airbnb · Hóspedes verificados'
  },
  'testimonials.cta': {
    es: 'Ver más reseñas en Airbnb',
    gl: 'Ver máis recensións en Airbnb',
    en: 'View more reviews on Airbnb',
    fr: 'Voir plus d\'avis sur Airbnb',
    de: 'Mehr Bewertungen auf Airbnb ansehen',
    it: 'Vedi altre recensioni su Airbnb',
    pt: 'Ver mais avaliações no Airbnb'
  },
  'testimonials.verified': {
    es: 'Huésped verificado en Airbnb',
    gl: 'Hóspede verificado en Airbnb',
    en: 'Verified Airbnb Guest',
    fr: 'Voyageur vérifié sur Airbnb',
    de: 'Verifizierter Airbnb-Gast',
    it: 'Ospite verificato su Airbnb',
    pt: 'Hóspede verificado no Airbnb'
  },
  'testimonials[0].text': {
    es: 'Una experiencia estupenda. Las vistas espectaculares. Todo muy limpio y cómodo. Hanno es muy atento y siempre estuvo pendiente para cualquier cosa. Volveremos.',
    gl: 'Unha experiencia estupenda. As vistas espectaculares. Todo moi limpo e cómodo. Hanno é moi atento e sempre estivo pendente para calquera cousa. Volveremos.',
    en: 'A wonderful experience. Spectacular views. Everything was very clean and comfortable. Hanno is very attentive and always helpful. We will definitely return.',
    fr: 'Une expérience formidable. Des vues spectaculaires. Tout était très propre et confortable. Hanno est très attentionné et disponible. Nous reviendrons.',
    de: 'Eine wunderbare Erfahrung. Spektakuläre Aussichten. Alles sehr sauber und komfortabel. Hanno ist sehr aufmerksam und hilfsbereit. Wir kommen wieder.',
    it: 'Un\'esperienza fantastica. Viste spettacolari. Tutto molto pulito e confortevole. Hanno è molto attento e sempre disponibile. Torneremo sicuramente.',
    pt: 'Uma experiência fantástica. Vistas espetaculares. Tudo muito limpo e confortável. O Hanno é muito atencioso e prestativo. Voltaremos com certeza.'
  },
  'testimonials[0].author': {
    es: 'Natalia',
    gl: 'Natalia',
    en: 'Natalia',
    fr: 'Natalia',
    de: 'Natalia',
    it: 'Natalia',
    pt: 'Natalia'
  },
  'testimonials[0].location': {
    es: 'Agosto 2025 · España',
    gl: 'Agosto 2025 · España',
    en: 'August 2025 · Spain',
    fr: 'Août 2025 · Espagne',
    de: 'August 2025 · Spanien',
    it: 'Agosto 2025 · Spagna',
    pt: 'Agosto 2025 · Espanha'
  },
  'testimonials[1].text': {
    es: 'La localización espectacular. La casa a quince minutos andando de la playa más cercana. La casa preciosa y muy equipada con todo lo necesario.',
    gl: 'A localización espectacular. A casa a quince minutos andando da praia máis próxima. A casa preciosa e moi equipada con todo o necesario.',
    en: 'Spectacular location. The house is a fifteen-minute walk from the nearest beach. The house is beautiful and very well equipped with everything needed.',
    fr: 'Emplacement spectaculaire. La maison est à quince minutes à pied de la plage la plus proche. Très belle maison et parfaitement équipée.',
    de: 'Spektakuläre Lage. Das Haus ist nur 15 Gehminuten vom nächsten Strand entfernt. Wunderschönes Haus und bestens ausgestattet.',
    it: 'Posizione spettacolare. La casa è a quindici minuti a piedi dalla spiaggia più vicina. Casa bellissima e fornita di tutto il necessario.',
    pt: 'Localização espetacular. A casa fica a quinze minutos a pé da praia mais próxima. Casa linda e muito bem equipada com tudo o necessário.'
  },
  'testimonials[1].author': {
    es: 'Valentina',
    gl: 'Valentina',
    en: 'Valentina',
    fr: 'Valentina',
    de: 'Valentina',
    it: 'Valentina',
    pt: 'Valentina'
  },
  'testimonials[1].location': {
    es: 'Agosto 2026 · España',
    gl: 'Agosto 2026 · España',
    en: 'August 2026 · Spain',
    fr: 'Août 2026 · Espagne',
    de: 'August 2026 · Spanien',
    it: 'Agosto 2026 · Spagna',
    pt: 'Agosto 2026 · Espanha'
  },
  'testimonials[2].text': {
    es: 'Un lugar mágico donde desconectar frente al mar. La tranquilidad de Lira, la cala de Praia de Cons y los atardeceres desde la terraza son inolvidables.',
    gl: 'Un lugar máxico onde desconectar fronte ao mar. A tranquilidade de Lira, a cala de Praia de Cons e os solpores dende a terraza son inesquecibles.',
    en: 'A magical place to disconnect facing the sea. The tranquility of Lira, the cove of Praia de Cons, and the sunsets from the terrace are unforgettable.',
    fr: 'Un endroit magique pour déconnecter face à la mer. La tranquillité de Lira, la crique de Praia de Cons et les couchers de soleil sont inoubliables.',
    de: 'Ein magischer Ort zum Abschalten mit Meerblick. Die Ruhe von Lira, die Bucht von Praia de Cons und die Sonnenuntergänge sind unvergesslich.',
    it: 'Un luogo magico dove staccare la spina di fronte al mare. La tranquilidad de Lira, la cala di Praia de Cons e i tramonti dalla terrazza sono indimenticabili.',
    pt: 'Um lugar mágico para descansar em frente ao mar. A tranquilidade de Lira, a enseada da Praia de Cons e o pôr do sol do terraço são inesquecíveis.'
  },
  'testimonials[2].author': {
    es: 'Marco & Sophie',
    gl: 'Marco & Sophie',
    en: 'Marco & Sophie',
    fr: 'Marco & Sophie',
    de: 'Marco & Sophie',
    it: 'Marco & Sophie',
    pt: 'Marco & Sophie'
  },
  'testimonials[2].location': {
    es: 'Julio 2025 · Europa',
    gl: 'Xullo 2025 · Europa',
    en: 'July 2025 · Europe',
    fr: 'Juillet 2025 · Europe',
    de: 'Juli 2025 · Europa',
    it: 'Luglio 2025 · Europa',
    pt: 'Julho 2025 · Europa'
  },

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
  'float.whatsapp': { es: '¿Dudas? WhatsApp', gl: 'Dúbidas? WhatsApp', en: 'Questions? WhatsApp', fr: 'Des questions ? WhatsApp', de: 'Fragen? WhatsApp', it: 'Domande? WhatsApp', pt: 'Dúvidas? WhatsApp' },

  // Locations & Plans
  'location.carnota.title': { es: 'Playa de Carnota y Boca do Río', gl: 'Praia de Carnota e Boca do Río', en: 'Carnota Beach & Boca do Río', fr: 'Plage de Carnota & Boca do Río', de: 'Strand von Carnota & Boca do Río', it: 'Spiaggia di Carnota e Boca do Río', pt: 'Praia de Carnota e Boca do Río' },
  'location.carnota.desc': { es: 'Más de 7 km de arena blanca virgen, marismas protegidas y las piscinas naturales de Boca do Río', gl: 'Máis de 7 km de area branca virxe, marismas protexidas e as piscinas naturais de Boca do Río', en: 'Over 7 km of pristine white sand, protected marshes, and the natural tidal pools of Boca do Río', fr: 'Plus de 7 km de sable blanc vierge, marais protégés et piscines naturelles de Boca do Río', de: 'Über 7 km unberührter weißer Sand, geschützte Sümpfe und die Naturpools von Boca do Río', it: 'Oltre 7 km di sabbia bianca incontaminata, paludi protette e piscine naturali di Boca do Río', pt: 'Mais de 7 km de areia branca virgem, pântanos protegidos e as piscinas naturais de Boca do Río' },
  'location.carnota.longDesc': {
    es: `Con más de 7 kilómetros de longitud continua en forma de medialuna, la Playa de Carnota es el arenal más extenso de Galicia y uno de los espacios litorales vírgenes más impresionantes de Europa. Protegida dentro de la Red Natura 2000, combina dunas móviles, marismas ricas en avifauna y aguas transparentes del Atlántico.

Boca do Río y sus piscinas naturales
En la zona central de la playa, la desembocadura del río Valdebois (Boca do Río) crea uno de los rincones más singulares de la costa gallega. Durante la bajamar, la retirada de las aguas forma amplias lagunas y piscinas naturales de poca profundidad y arena blanca. El agua aquí se templa con el sol, convirtiéndola en un lugar perfecto para el baño, familias con niños y quienes buscan nadar en aguas calmas en pleno océano abierto.

Zonas y accesos de la playa
• Sector Norte (Caldebarcos): Zona con ambiente marinero y excelentes restaurantes donde probar marisco fresco de la ría. Ideal para iniciar largos paseos hacia el sur.
• Sector Central (Boca do Río): El acceso más popular y fotogénico, equipado con pasarelas de madera elevadas sobre el sistema dunar para proteger la vegetación autóctona. Dispone de zona de aparcamiento señalizado.
• Sector Sur (As Maceiras y Lira): Zona más recogida y tranquila, en el extremo sur del arenal.

Consejos prácticos para la visita
• Mareas: Para disfrutar al máximo de las piscinas naturales de Boca do Río, es muy recomendable planificar la visita coincidiendo con la marea baja (bajamar) o las horas previas.
• Paseos y senderismo: Recorrer la orilla de un extremo a otro requiere entre 1.5 y 2 horas a paso tranquilo. Es imprescindible llevar protección solar, ya que no hay sombras naturales en el arenal.
• Puestas de sol: Por su orientación atlántica abierta hacia el oeste, los atardeceres en Carnota tiñen de dorado el arenal y el macizo del Monte Pindo a sus espaldas.

Combinación de excursión
La visita a la Playa de Carnota se combina de forma idónea en una misma jornada con una subida matinal a la cumbre de A Moa en el Monte Pindo, una visita al Hórreo de Carnota o un paseo al atardecer por las calas de Lira.`,
    gl: `Cos seus máis de 7 quilómetros de lonxitude continua en forma de media lúa, a Praia de Carnota é o areal máis extenso de Galicia e un dos espazos litorais virxes máis impresionantes de Europa. Protexida dentro da Rede Natura 2000, combina dunas móbiles, marismas ricas en avifauna e augas transparentes do Atlántico.

Boca do Río e as súas piscinas naturais
Na zona central da praia, a desembocadura do río Valdebois (Boca do Río) crea un dos recunchos máis singulares da costa galega. Durante a baixamar, a retirada das augas forma amplas lagoas e piscinas naturais de pouca profundidade e area branca. A auga aquí tépedase co sol, converténdoa nun lugar perfecto para o baño e familias.

Zonas e accesos da praia
• Sector Norte (Caldebarcos): Zona con ambiente mariñeiro e excelentes restaurantes onde probar marisco fresco.
• Sector Central (Boca do Río): O acceso máis popular, equipado con pasarelas de madeira elevadas sobre o sistema dunar e aparcadoiro.
• Sector Sur (As Maceiras e Lira): Zona máis recollida e tranquila, no extremo sur do areal.

Consellos prácticos para a visita
• Mareas: Para gozar ao máximo das piscinas naturais de Boca do Río, é moi recomendable planificar a visita coincidindo coa baixamar.
• Solpores: Pola súa orientación atlántica aberta cara ao oeste, os solpores en Carnota tinguen de dourado o areal e o Monte Pindo.`,
    en: `With over 7 kilometers of continuous crescent-shaped coastline, Carnota Beach is the longest beach in Galicia and one of the most stunning pristine coastal environments in Europe. Protected within the Natura 2000 Network, it combines mobile dunes, wildlife-rich marshes, and crystal-clear Atlantic waters.

Boca do Río and its natural tidal pools
In the central area of the beach, the mouth of the Valdebois River (Boca do Río) creates one of the most unique landscapes in Galicia. At low tide, the receding waters leave behind expansive shallow lagoons and natural pools over fine white sand. The water warms in the sun, creating an ideal spot for calm swimming and families.

Beach sectors and access
• North Sector (Caldebarcos): Traditional fishing atmosphere and excellent seafood restaurants.
• Central Sector (Boca do Río): The most famous and scenic access, featuring elevated wooden boardwalks across the dune system and parking.
• South Sector (As Maceiras & Lira): Peaceful and sheltered area at the southern end of the beach.

Practical visitor tips
• Tides: To fully enjoy the natural swimming pools at Boca do Río, plan your visit during low tide.
• Sunsets: Facing westward into the open Atlantic, sunsets at Carnota illuminate both the ocean and the pink granite slopes of Mount Pindo.`,
    fr: `Avec plus de 7 kilomètres de littoral continu en forme de croissant, la plage de Carnota est la plus longue de Galice et l'un des espaces côtiers vierges les plus remarquables d'Europe. Protégée au sein du réseau Natura 2000, elle combine dunes mobiles, marais riches en avifaune et eaux cristallines de l'Atlantique.

Boca do Río et ses piscines naturelles
Au centre de la plage, l'embouchure du fleuve Valdebois (Boca do Río) crée l'un des paysages les plus uniques de Galice. À marée basse, le retrait des eaux forme de vastes lagunes et piscines naturelles peu profondes sur un sable blanc immaculé. L'eau s'y réchauffe au soleil, créant un lieu idéal pour la baignade et les familles.

Secteurs et accès à la plage
• Secteur Nord (Caldebarcos) : Ambiance de pêcheurs et excellents restaurants de fruits de mer.
• Secteur Central (Boca do Río) : L'accès le plus spectaculaire, avec passerelles en bois sur les dunes et parking.
• Secteur Sud (As Maceiras et Lira) : Zone abritée et paisible à l'extrémité sud de la plage.

Conseils pratiques pour la visite
• Marées : Pour profiter des piscines naturelles de Boca do Río, planifiez votre visite à marée basse.
• Couchers de soleil : Orientée plein ouest vers l'Atlantique, la plage offre des couchers de soleil dorés inoubliables.`,
    de: `Mit über 7 Kilometern kontinuierlicher Küstenlinie ist der Strand von Carnota der längste Strand Galiciens und eines der beeindruckendsten unberührten Küstengebiete Europas. Als Natura-2000-Schutzgebiet vereint er Wanderdünen, vogelreiche Sümpfe und kristallklares Wasser.

Boca do Río und die Naturpools
Im mittleren Strandabschnitt bildet die Mündung des Valdebois (Boca do Río) ein einzigartiges Naturschauspiel. Bei Ebbe entstehen weitläufige, flache Lagunen und natürliche Schwimmbecken mit feinstem weißem Sand. Das Wasser erwärmt sich in der Sonne – ideal für Familien und entspanntes Baden.

Strandabschnitte und Zugänge
• Nordabschnitt (Caldebarcos): Maritimes Flair und hervorragende Fischrestaurants.
• Mittelabschnitt (Boca do Río): Der beliebteste Zugang mit Holzstegen über das Dünensystem und Parkplatz.
• Südabschnitt (As Maceiras & Lira): Ruhiger, geschützter Bereich am südlichen Ende des Strandes.

Praktische Besuchertipps
• Gezeiten: Besuchen Sie Boca do Río am besten bei Niedrigwasser (Ebbe), um die natürlichen Pools optimal zu nutzen.
• Sonnenuntergänge: Durch die Westausrichtung erstrahlt der Strand abends in goldenem Licht vor der Kulisse des Monte Pindo.`,
    it: `Con oltre 7 chilometri di estensione continua a mezzaluna, la spiaggia di Carnota è la più lunga della Galizia e una delle coste vergini più spettacolari d'Europa. Protetta nella Rete Natura 2000, unisce dune mobili, paludi ricche di avifauna e acque atlantiche trasparenti.

Boca do Río e le piscine naturali
Al centro della spiaggia, la foce del fiume Valdebois (Boca do Río) crea lagune poco profonde e piscine naturali di sabbia bianca durante la bassa marea. L'acqua si scalda con il sole, rendendola perfetta per il bagno e per le famiglie.

Settori e accessi
• Settore Nord (Caldebarcos): Atmosfera marinara e ottimi ristoranti di pesce fresco.
• Settore Centrale (Boca do Río): Accesso panoramico con passerelle in legno sulle dune e parcheggio.
• Settore Sud (As Maceiras e Lira): Area raccolta e tranquilla all'estremità sud della spiaggia.

Consigli pratici
• Maree: Pianifica la visita durante la bassa marea per goderti appieno le piscine naturali.
• Tramonti: L'orientamento a ovest regala tramonti spettacolari sull'oceano e sulle pendici del Monte Pindo.`,
    pt: `Com mais de 7 quilómetros de extensão contínua em forma de meia-lua, a Praia de Carnota é o areal mais extenso da Galiza e um dos espaços costeiros virgens mais impressionantes da Europa. Protegida na Rede Natura 2000, combina dunas móveis, pântanos e águas cristalinas do Atlântico.

Boca do Río e as piscinas naturais
Na zona central da praia, a foz do rio Valdebois (Boca do Río) cria lagoas e piscinas naturais de pouca profundidade durante a maré baixa. A água aquece com o sol, sendo perfeita para banhos tranquilos e famílias.

Setores e acessos
• Setor Norte (Caldebarcos): Ambiente piscatório e excelentes marisqueiras.
• Setor Central (Boca do Río): Acesso mais emblemático com passadiços de madeira sobre as dunas e estacionamento.
• Setor Sul (As Maceiras e Lira): Zona recolhida e serena no extremo sul do areal.

Conselhos práticos
• Marés: Visite durante a maré baixa para aproveitar as piscinas naturais de Boca do Río.
• Pôr do sol: Voltada a poente, a praia oferece pores do sol dourados inesquecíveis.`
  },
  'nature.carnota.h1': { es: '7 km de Arena Virgen', gl: '7 km de Area Virxe', en: '7 km Pristine Sand', fr: '7 km de Sable Vierge', de: '7 km Unberührter Sand', it: '7 km di Sabbia Vergine', pt: '7 km de Areia Virgem' },
  'nature.carnota.h2': { es: 'Piscinas de Boca do Río', gl: 'Piscinas de Boca do Río', en: 'Boca do Río Pools', fr: 'Piscines de Boca do Río', de: 'Boca do Río Naturpools', it: 'Piscine di Boca do Río', pt: 'Piscinas de Boca do Río' },
  'nature.carnota.h3': { es: 'Dunas y Marismas', gl: 'Dunas e Marismas', en: 'Dunes & Marshes', fr: 'Dunes et Marais', de: 'Dünen & Sümpfe', it: 'Dune e Paludi', pt: 'Dunas e Pântanos' },

  'location.pindo.title': { es: 'Monte Pindo y Cumbre de A Moa', gl: 'Monte Pindo e Cumio da Moa', en: 'Mount Pindo & A Moa Peak', fr: 'Mont Pindo et Sommet d\'A Moa', de: 'Monte Pindo & Gipfel A Moa', it: 'Monte Pindo e Cima di A Moa', pt: 'Monte Pindo e Cume da Moa' },
  'location.pindo.desc': { es: 'El mítico Olimpo Celta de granito rosado (627 m) con vistas panorámicas de 360° sobre la Costa da Morte', gl: 'O mítico Olimpo Celta de granito rosado (627 m) con vistas panorámicas de 360° sobre a Costa da Morte', en: 'The legendary Celtic Olympus of pink granite (627 m) with 360° panoramic views over Costa da Morte', fr: 'Le mythique Olympe celtique en granit rose (627 m) avec vues panoramiques à 360°', de: 'Der legendäre keltische Olymp aus rosa Granit (627 m) mit 360°-Panoramablick', it: 'Il mitico Olimpo Celtico di granito rosa (627 m) con vista panoramica a 360°', pt: 'O mítico Olimpo Celta de granito rosado (627 m) com vistas panorâmicas de 360°' },
  'location.pindo.longDesc': {
    es: `Conocido desde la antigüedad como el "Olimpo Celta" de Galicia, el Monte Pindo es un colosal macizo de granito rosado que se eleva abruptamente hasta los 627 metros sobre las aguas del océano Atlántico. Sus formaciones rocosas esculpidas por el viento y el salitre —como la mítica figura de "O Guerreiro"— han inspirado leyendas milenarias y rituales ancestrales.

Ruta de subida a la cumbre de A Moa (627 m)
El ascenso a la cumbre de A Moa ofrece una de las panorámicas más sobrecogedoras de toda la península ibérica: una vista de 360 grados que abarca toda la Playa de Carnota a vista de pájaro, el Cabo Fisterra, las islas Lobeiras y la ría de Corcubión.

Datos de la ruta y puntos de inicio
• Inicio desde O Fieiro (Vertiente interior): Es la ruta más directa. Recorrido de unos 4.5 km (ida y vuelta) con unos 300 metros de desnivel positivo. Tiempo aproximado: 2 a 2.5 horas.
• Inicio desde O Pindo (Vertiente costera / Puerto): Ruta más exigente y empinada, con más de 600 metros de desnivel continuo y unos 9.5 km totales. Tiempo aproximado: 4 a 4.5 horas.
• Nivel de dificultad: Exigencia física media-alta. Terreno pedregoso de montaña con pendientes sobre losas de granito donde se requiere buen apoyo.

Consejos de seguridad imprescindibles
• Calzado: Es indispensable utilizar calzado de montaña con buen agarre (botas o zapatillas de trekking). No subir en calzado urbano.
• Agua y sol: El macizo no dispone de fuentes de agua potable en la parte alta y está 100% expuesto al sol sin sombras. Llevar al menos 1.5 litros de agua por persona y protección solar.
• Meteorología: Evitar la subida en días de niebla cerrada (las referencias visuales en la meseta pueden desorientar) o lluvia intensa, ya que la roca mojada es muy resbaladiza.

Combinación de jornada
Una excelente opción es realizar la ascensión a primera hora de la mañana para evitar las horas centrales de calor y dedicar la tarde a descansar en las piscinas de Boca do Río o visitar la Cascada del Ézaro.`,
    gl: `Coñecido dende a antigüidade como o “Olimpo Celta” de Galicia, o Monte Pindo é un macizo de granito rosado que se ergue ata os 627 metros sobre o océano Atlántico.

Ruta de subida ao cumio da Moa (627 m)
O ascenso á Moa ofrece unha panorámica de 360 graos que abrangue toda a Praia de Carnota, o Cabo Fisterra e a ría de Corcubión.

Datos da ruta e puntos de inicio
• Inicio dende O Fieiro: Ruta máis directa de 4.5 km con 300 m de desnivel (2-2.5 h).
• Inicio dende O Pindo: Ruta máis esixente dende a costa con 600 m de desnivel (4-4.5 h).
• Dificultade: Media-alta en terreo pedregoso de montaña.

Consellos de seguridade
Levar calzado de montaña con bo agarre, abundante auga (non hai fontes arriba) e protección solar. Evitar a subida con néboa pechada ou choiva.`,
    en: `Known since antiquity as Galicia's "Celtic Olympus," Mount Pindo is a massive pink granite massif rising steeply to 627 meters above the Atlantic Ocean.

Ascent to A Moa Peak (627 m)
Reaching the top of A Moa rewards hikers with one of Spain's most dramatic 360-degree panoramas, overlooking the entire crescent of Carnota Beach, Cape Finisterre, and the Atlantic coastline.

Trailheads and difficulty
• From O Fieiro (Inland): Direct route of ~4.5 km round-trip with ~300 m elevation gain (2–2.5 hours).
• From O Pindo (Coast/Port): Demanding coastal ascent with over 600 m elevation gain (~9.5 km, 4–4.5 hours).
• Difficulty: Medium-High. Rocky mountain terrain requiring sturdy trekking shoes.

Safety advice
Bring plenty of water (no drinkable sources on top), sun protection, and avoid hiking in thick fog or heavy rain.`,
    fr: `Connu depuis l'Antiquité comme l'« Olympe celtique » de Galice, le mont Pindo est un massif colossal de granit rose qui culmine à 627 mètres au-dessus de l'océan Atlantique.

Ascension au sommet d'A Moa (627 m)
La montée vers la cime d'A Moa offre une vue panoramique à 360 degrés inoubliable sur toute la plage de Carnota, le cap Finisterre et la baie de Corcubión.

Points de départ et difficulté
• Départ d'O Fieiro : L'itinéraire le plus direct (4,5 km A/R, 300 m de dénivelé, 2-2,5 h).
• Départ d'O Pindo (Port) : Itinéraire plus exigeant (9,5 km, 600 m de dénivelé, 4-4,5 h).
• Difficulté : Moyenne à élevée sur terrain rocheux de montagne.

Conseils de sécurité
Chaussures de randonnée indispensables, prévoyez au moins 1,5 L d'eau par personne et évitez l'ascension par temps de brouillard épais ou de pluie.`,
    de: `Seit der Antike als „keltischer Olymp“ Galiciens bekannt, ist der Monte Pindo ein imposantes Massiv aus rosa Granit, das sich 627 Meter über den Atlantik erhebt.

Aufstieg zum Gipfel A Moa (627 m)
Der Aufstieg zur A Moa bietet ein atemberaubendes 360-Grad-Panorama über den gesamten Strand von Carnota, das Kap Finisterre und die Küstenlandschaft.

Ausgangspunkte und Schwierigkeit
• Ab O Fieiro: Der direkteste Weg (~4,5 km hin und zurück, 300 Hm, 2–2,5 Std.).
• Ab O Pindo (Hafen): Anspruchsvoller Aufstieg (~9,5 km, 600 Hm, 4–4,5 Std.).
• Schwierigkeit: Mittel bis anspruchsvoll auf felsigem Berggelände.

Sicherheitshinweise
Festes Wanderschuhwerk, ausreichend Trinkwasser (keine Quellen am Gipfel) und Sonnenschutz mitnehmen. Bei dichtem Nebel oder Regen meiden.`,
    it: `Conosciuto fin dall'antichità come l'«Olimpo Celtico» della Galizia, il Monte Pindo è un imponente massiccio di granito rosa che si eleva fino a 627 metri sull'Oceano Atlantico.

Salita alla cima di A Moa (627 m)
Dalla vetta si gode di una vista a 360 gradi spettacolare su tutta la spiaggia di Carnota, Capo Finisterre e la baia circostante.

Punti di partenza e difficoltà
• Da O Fieiro: Percorso più diretto (4,5 km A/R, 300 m dislivello, 2-2,5 ore).
• Da O Pindo (Porto): Salita più impegnativa dalla costa (9,5 km, 600 m dislivello, 4-4,5 ore).
• Difficoltà: Medio-alta su sentiero montano roccioso.

Consigli di sicurezza
Indispensabili scarponcini da trekking con buona aderenza, almeno 1,5 litri d'acqua e protezione solare. Evitare la salita con nebbia fitta o pioggia.`,
    pt: `Conhecido desde a antiguidade como o «Olimpo Celta» da Galiza, o Monte Pindo é um maciço de granito rosado que atinge 627 metros sobre o Oceano Atlântico.

Subida ao cume da Moa (627 m)
A subida ao cume da Moa oferece uma das panorâmicas de 360 graus mais impressionantes de Espanha, avistando toda a Praia de Carnota e o Cabo Fisterra.

Pontos de partida e dificuldade
• A partir de O Fieiro: Rota mais direta (4,5 km ida/volta, 300 m desnível, 2-2,5 h).
• A partir de O Pindo (Porto): Subida mais exigente (9,5 km, 600 m desnível, 4-4,5 h).
• Dificuldade: Média-alta em terreno pedregoso de montanha.

Conselhos de segurança
Calçado de montanha adequado, água suficiente (não há fontes no topo) e evitar a subida com nevoeiro denso ou chuva sobre a rocha escorregadia.`
  },
  'nature.pindo.h1': { es: 'Cumbre de A Moa (627 m)', gl: 'Cumio da Moa (627 m)', en: 'A Moa Peak (627 m)', fr: 'Sommet d\'A Moa (627 m)', de: 'A Moa Gipfel (627 m)', it: 'Cima di A Moa (627 m)', pt: 'Cume da Moa (627 m)' },
  'nature.pindo.h2': { es: 'Granito Rosa y Leyendas', gl: 'Granito Rosa e Lendas', en: 'Pink Granite & Legends', fr: 'Granit rose et légendes', de: 'Rosa Granit & Mythen', it: 'Granito Rosa e Leggende', pt: 'Granito Rosa e Lendas' },
  'nature.pindo.h3': { es: 'Vistas Panorámicas 360°', gl: 'Vistas Panorámicas 360°', en: '360° Panoramic Views', fr: 'Vues panoramiques 360°', de: '360°-Panoramablick', it: 'Viste panoramiche a 360°', pt: 'Vistas panorâmicas 360°' },
  'nature.pindo.route_title': {
    es: 'Ruta de senderismo interactiva y track GPX',
    gl: 'Ruta de sendeirismo interactiva e track GPX',
    en: 'Interactive Hiking Route & GPX Track',
    fr: 'Randonnée interactive et tracé GPX',
    de: 'Interaktive Wanderroute & GPX-Track',
    it: 'Percorso escursionistico interattivo e traccia GPX',
    pt: 'Rota de caminhada interativa e trilha GPX'
  },
  'nature.route.start': { es: 'Inicio', gl: 'Inicio', en: 'Start', fr: 'Départ', de: 'Start', it: 'Partenza', pt: 'Início' },
  'nature.route.end': { es: 'Llegada', gl: 'Chegada', en: 'Finish', fr: 'Arrivée', de: 'Ziel', it: 'Arrivo', pt: 'Chegada' },
  'nature.route.distance': { es: 'Distancia', gl: 'Distancia', en: 'Distance', fr: 'Distance', de: 'Distanz', it: 'Distanza', pt: 'Distância' },
  'nature.route.km': { es: 'km', gl: 'km', en: 'km', fr: 'km', de: 'km', it: 'km', pt: 'km' },
  'nature.route.gain': { es: 'Desnivel+', gl: 'Desnivel+', en: 'Elevation Gain', fr: 'Dénivelé+', de: 'Höhenmeter+', it: 'Dislivello+', pt: 'Desnível+' },
  'nature.route.meters': { es: 'm', gl: 'm', en: 'm', fr: 'm', de: 'm', it: 'm', pt: 'm' },
  'nature.route.max_ele': { es: 'Altitud Máx.', gl: 'Altitude Máx.', en: 'Max Elevation', fr: 'Altitude max.', de: 'Max. Höhe', it: 'Altitudine max.', pt: 'Altitude máx.' },
  'nature.route.download': { es: 'Descargar GPX', gl: 'Descargar GPX', en: 'Download GPX', fr: 'Télécharger GPX', de: 'GPX herunterladen', it: 'Scarica GPX', pt: 'Descarregar GPX' },
  'nature.route.elevation_profile': { es: 'Perfil de Elevación', gl: 'Perfil de Elevación', en: 'Elevation Profile', fr: 'Profil d\'élévation', de: 'Höhenprofil', it: 'Profilo altimetrico', pt: 'Perfil de elevação' },
  'nature.route.elevation_desc': {
    es: 'Pendiente del terreno a lo largo del recorrido',
    gl: 'Pendente do terreo ao longo do percorrido',
    en: 'Terrain slope throughout the trail',
    fr: 'Pente du terrain tout au long du parcours',
    de: 'Geländeneigung entlang der Strecke',
    it: 'Pendenza del terreno lungo il percorso',
    pt: 'Inclinação do terreno ao longo do percurso'
  },
  'nature.route.steep': { es: 'Muy pronunciada', gl: 'Moi pronunciada', en: 'Steep', fr: 'Raide', de: 'Steil', it: 'Ripido', pt: 'Íngreme' },
  'nature.route.moderate': { es: 'Moderada', gl: 'Moderada', en: 'Moderate', fr: 'Modérée', de: 'Moderat', it: 'Moderato', pt: 'Moderada' },
  'nature.route.flat': { es: 'Llano', gl: 'Chao', en: 'Flat', fr: 'Plat', de: 'Flach', it: 'Pianeggiante', pt: 'Plano' },
  'nature.route.descent': { es: 'Bajada', gl: 'Baixada', en: 'Descent', fr: 'Descente', de: 'Gefälle', it: 'Discesa', pt: 'Descida' },

  'location.lira.title': { es: 'Lira y Portocubelo', gl: 'Lira e Portocubelo', en: 'Lira & Portocubelo', fr: 'Lira & Portocubelo', de: 'Lira & Portocubelo', it: 'Lira e Portocubelo', pt: 'Lira e Portocubelo' },
  'location.lira.desc': { es: 'Pueblo marinero tradicional, puerto pesquero artesanal de Portocubelo y calas de aguas tranquilas', gl: 'Pobo mariñeiro tradicional, porto pesqueiro artesanal de Portocubelo e calas de augas tranquilas', en: 'Traditional fishing village, Portocubelo artisanal harbor, and sheltered peaceful coves', fr: 'Village de pêcheurs traditionnel, port artisanal de Portocubelo et criques paisibles', de: 'Traditionelles Fischerdorf, malerischer Hafen Portocubelo und ruhige Badebuchten', it: 'Borgo marinaro tradizionale, porto peschereccio di Portocubelo e calette riparate', pt: 'Vila piscatória tradicional, porto artesanal de Portocubelo e enseadas tranquilas' },
  'location.lira.longDesc': {
    es: `Lira es una de las parroquias marineras más auténticas y mejor conservadas de la Costa da Morte. Situada en el extremo sur del municipio de Carnota, al abrigo de los vientos del norte, combina arquitectura tradicional gallega, calas resguardadas de aguas cristalinas y un puerto pesquero vivo: Portocubelo.

El Puerto de Portocubelo y la Reserva Marina
El pequeño puerto de Portocubelo es el corazón marinero de Lira. Aquí faena una flota de bajura artesanal dedicada a la captura sostenible de pulpo, nécora, percebe y pescados de roca. Lira fue pionera en Galicia al impulsar la creación de la Reserva Marina de Interés Pesquero "Os Miñarzos", un modelo ejemplar de protección marina y pesca responsable.

Las Calas de Lira: Praia de Cons y Praia do Cancelo
• Praia de Cons: Pequeña playa natural y agreste de arena y rocas («cons»), de carácter atlántico y baja ocupación, ideal para pasear y desconectar en un entorno virgen.
• Praia do Cancelo: Pequeña cala natural y recogida entre rocas, con aguas cristalinas y un ambiente virgen de gran serenidad.

El Hórreo de Lira
Junto a la iglesia parroquial de Santa María se encuentra el monumental Hórreo de Lira, construido entre 1779 y 1814. Con sus casi 37 metros de longitud y 22 pares de pies de piedra, rivaliza históricamente en tamaño y belleza con el famoso hórreo de Carnota.

Alojarse en Lira: Base estratégica y tranquilidad
Lira ofrece la calma de una aldea costera genuina sin masificaciones, con tabernas donde el pescado entra directamente del barco y una ubicación privilegiada para explorar toda la comarca. Casa da Cuncheira se sitúa en esta parroquia, permitiendo disfrutar de la vida marinera y el mar a diario.`,
    gl: `Lira é unha das parroquias mariñeiras máis auténticas e mellor conservadas da Costa da Morte. Situada no extremo sur de Carnota, combina arquitectura tradicional, calas de augas cristalinas e o porto de Portocubelo.

O Porto de Portocubelo e a Reserva Mariña
Portocubelo é o corazón mariñeiro de Lira, pioneiro na creación da Reserva Mariña de Interese Pesqueiro "Os Miñarzos" para a protección do medio mariño.

As Calas de Lira
• Praia de Cons: Pequena praia natural e agreste de area e rochas («cons»), de carácter atlántico e baixa ocupación, ideal para pasear e desconectar nun entorno virxe.
• Praia do Cancelo: Pequena cala natural e recollida entre rochas, con augas cristalinas e ambiente virxe de gran serenidade.

O Hórreo de Lira
Monumental hórreo de case 37 metros de lonxitude e 22 pares de pés sobre rocha viva.`,
    en: `Lira is one of the most authentic and best-preserved fishing parishes in Costa da Morte. Located in southern Carnota, it combines traditional stone architecture, sheltered coves, and the active harbor of Portocubelo.

Portocubelo Harbor & Os Miñarzos Marine Reserve
Portocubelo is Lira's seafaring heart, pioneering sustainable fishing through the "Os Miñarzos" marine reserve.

The Coves of Lira
• Praia de Cons: Small, rustic Atlantic beach blending fine sand and granite rocks ('cons'), offering an unspoiled, uncrowded natural setting.
• Praia do Cancelo: Small, sheltered natural cove set among coastal rocks, with crystal-clear waters and an unspoiled peaceful atmosphere.

The Monumental Granary of Lira
Nearly 37 meters long on 22 pairs of stone pillars, standing proudly alongside Santa María church.`,
    fr: `Lira est l'un des villages marins les plus authentiques de la Costa da Morte, alliant architecture en pierre traditionnelle, criques protégées et le port de Portocubelo.

Port de Portocubelo et Réserve Marine Os Miñarzos
Portocubelo est le cœur maritime de Lira, pionnier de la pêche artisanale et durable au poulpe et aux poissons de roche.

Les criques de Lira
• Praia de Cons : Petite plage naturelle et sauvage de sable et rochers (« cons »), au caractère atlantique et peu fréquentée, idéale pour se ressourcer.
• Praia do Cancelo : Petite crique naturelle et abritée entre les rochers, aux eaux cristallines et à l'atmosphère sauvage et sereine.

Le Hórreo monumental de Lira
Près de 37 mètres de long sur 22 paires de piliers en pierre face à l'église Santa María.`,
    de: `Lira ist eines der authentischsten Fischerdörfer der Costa da Morte mit traditioneller Steinarchitektur, geschützten Buchten und dem malerischen Hafen Portocubelo.

Hafen Portocubelo und Meeresschutzgebiet Os Miñarzos
Portocubelo ist das Herz von Lira und Vorreiter im nachhaltigen Fischfang für Oktopus und frischen Felsenfisch.

Die Buchten von Lira
• Praia de Cons: Kleine, naturbelassene Bucht aus Sand und Granitfelsen ('cons') mit atlantischem Charakter und herrlicher Ruhe fernab des Trubels.
• Praia do Cancelo: Kleine, geschützte Naturbucht zwischen Felsen mit kristallklarem Wasser und unberührter Ruhe.

Der monumentale Hórreo von Lira
Fast 37 Meter lang auf 22 Pfeilerpaaren aus Stein neben der Pfarrkirche Santa María.`,
    it: `Lira è uno dei borghi marinari più autentici della Costa da Morte, con architettura tradizionale in pietra, calette riparate e il porto di Portocubelo.

Porto di Portocubelo e Riserva Marina Os Miñarzos
Cuore marinaro di Lira, famoso per la pesca artigianale e sostenibile di polpo e pesce di scoglio.

Le Calette di Lira
• Praia de Cons: Piccola spiaggia naturale e selvaggia di sabbia e scogli («cons»), dal carattere atlantico e poco frequentata, ideale per rilassarsi.
• Praia do Cancelo: Piccola caletta naturale e riparata tra gli scogli, con acque cristalline e un'atmosfera incontaminata e tranquilla.

Il monumentale Hórreo di Lira
Quasi 37 metri di lunghezza su 22 coppie di pilastri in pietra accanto alla chiesa di Santa María.`,
    pt: `Lira é uma das freguesias marinheiras mais autênticas da Costa da Morte, combinando arquitetura tradicional, enseadas abrigadas e o porto de Portocubelo.

Porto de Portocubelo e Reserva Marinha Os Miñarzos
Coração marítimo de Lira, pioneiro na pesca artesanal e sustentável de polvo e peixes de rocha.

As Enseadas de Lira
• Praia de Cons: Pequena praia natural e rústica de areia e rochas («cons»), de carácter atlântico e baixa ocupação, ideal para descansar num ambiente virgem.
• Praia do Cancelo: Pequena enseada natural e abrigada entre rochas, com águas cristalinas e ambiente virgem de grande tranquilidade.

O Hórreo monumental de Lira
Quase 37 metros de comprimento sobre 22 pares de pés de pedra junto à igreja de Santa María.`
  },
  'nature.lira.h1': { es: 'Puerto de Portocubelo', gl: 'Porto de Portocubelo', en: 'Portocubelo Harbor', fr: 'Port de Portocubelo', de: 'Hafen Portocubelo', it: 'Porto di Portocubelo', pt: 'Porto de Portocubelo' },
  'nature.lira.h2': { es: 'Reserva Os Miñarzos', gl: 'Reserva Os Miñarzos', en: 'Os Miñarzos Reserve', fr: 'Réserve Os Miñarzos', de: 'Os Miñarzos Schutzgebiet', it: 'Riserva Os Miñarzos', pt: 'Reserva Os Miñarzos' },
  'nature.lira.h3': { es: 'Praia de Cons y Cancelo', gl: 'Praia de Cons e Cancelo', en: 'Praia de Cons & Cancelo', fr: 'Praia de Cons & Cancelo', de: 'Praia de Cons & Cancelo', it: 'Praia de Cons e Cancelo', pt: 'Praia de Cons e Cancelo' },

  'location.carnota_guide.title': { es: 'Qué ver en Carnota: 8 Imprescindibles', gl: 'Que ver en Carnota: 8 Imprescindibles', en: 'What to see in Carnota: Top 8', fr: 'Que voir à Carnota : Top 8', de: 'Carnota Highlights: Top 8', it: 'Cosa vedere a Carnota: Top 8', pt: 'O que ver em Carnota: Top 8' },
  'location.carnota_guide.desc': { es: 'Guía completa de los lugares esenciales que visitar en Carnota, Lira y alrededores de Costa da Morte', gl: 'Guía completa dos lugares esenciais que visitar en Carnota, Lira e arredores da Costa da Morte', en: 'Complete guide to the essential sights in Carnota, Lira, and the Costa da Morte region', fr: 'Guide complet des lieux incontournables à Carnota, Lira et sur la Costa da Morte', de: 'Kompletter Reiseführer zu den wichtigsten Sehenswürdigkeiten in Carnota, Lira und Umgebung', it: 'Guida completa ai luoghi imperdibili da visitare a Carnota, Lira e nella Costa da Morte', pt: 'Guia completo dos locais essenciais a visitar em Carnota, Lira e arredores da Costa da Morte' },
  'location.carnota_guide.longDesc': {
    es: `El municipio de Carnota concentra algunos de los paisajes litorales y monumentos etnográficos más espectaculares de Galicia. Desde inmensos arenales vírgenes hasta cumbres de granito sagradas, esta es la selección de los 8 lugares que no te puedes perder.

Los 8 lugares imprescindibles en Carnota y alrededores
1. Playa de Carnota y Boca do Río: Más de 7 km de arena blanca virgen y las idílicas piscinas naturales que se forman durante la bajamar.
2. Hórreo de Carnota: Monumento Nacional de 34.7 metros levantado en el siglo XVIII junto a la iglesia de Santa Comba y su palomar.
3. Hórreo de Lira: El gemelo monumental de Carnota, con casi 37 metros de largo sustentado sobre 22 pares de pies de piedra.
4. Lira y el Puerto de Portocubelo: Pueblo marinero tradicional con la Reserva Marina Os Miñarzos, calas tranquilas como Praia de Cons y gastronomía de lonja.
5. Monte Pindo y cumbre de A Moa (627 m): El mítico Olimpo Celta, mole de granito rosado con rutas de senderismo y vistas panorámicas de 360°.
6. Fervenza do Ézaro: La única cascada de la Península Ibérica que desemboca directamente en el mar, a unos 20 minutos en Dumbría.
7. Monte Louro y Playa de Area Maior: Espacio protegido en la bocana de la Ría de Muros con laguna litoral y faro panorámico.
8. Casco histórico de Muros: Villa marinera medieval con calles porticadas de piedra y tabernas tradicionales.

Cómo organizar tu visita
• En 1 día: Mañana en Boca do Río y visita a los hórreos; tarde en Portocubelo (Lira) y atardecer en la Fervenza do Ézaro.
• En un fin de semana: Añade la ruta a la cumbre de A Moa en el Monte Pindo, un paseo por Muros y la puesta de sol en Cabo Fisterra.`,
    gl: `O concello de Carnota concentra algunhas das paisaxes e monumentos etnográficos máis espectaculares de Galicia.

Os 8 imprescindibles
1. Praia de Carnota e Boca do Río
2. Hórreo de Carnota
3. Hórreo de Lira
4. Lira e Porto de Portocubelo
5. Monte Pindo e cumio da Moa
6. Fervenza do Ézaro
7. Monte Louro e Area Maior
8. Casco histórico de Muros`,
    en: `Carnota offers some of Galicia's most dramatic coastal scenery and cultural landmarks.

Top 8 Highlights
1. Carnota Beach & Boca do Río natural tidal pools
2. Historic Carnota Granary (34.7 m)
3. Monumental Lira Granary (almost 37 m)
4. Lira fishing village & Portocubelo harbor
5. Mount Pindo and the peak of A Moa (627 m)
6. Ézaro Waterfall into the sea
7. Mount Louro and Area Maior wild beach
8. Medieval historic center of Muros`,
    fr: `Carnota rassemble les plus beaux paysages et trésors de la Costa da Morte.

Les 8 incontournables à Carnota et ses environs
1. Plage de Carnota & Boca do Río : Plus de 7 km de sable blanc et piscines naturelles à marée basse.
2. Hórreo de Carnota : Grenier monumental en pierre du XVIIIe siècle (34,7 m).
3. Hórreo de Lira : Près de 37 mètres de long sur 22 paires de piliers.
4. Lira et le port de Portocubelo : Village de pêcheurs authentique, réserve marine et calanques calmes.
5. Mont Pindo et sommet d'A Moa (627 m) : Panorama grandiose à 360° sur l'Atlantique.
6. Cascade d'Ézaro : L'unique cascade de la péninsule Ibérique qui plonge dans l'océan.
7. Mont Louro et plage d'Area Maior : Espace dunaire protégé et lagune côtière.
8. Centre historique de Muros : Cité médiévale de pêcheurs aux ruelles pavées.`,
    de: `Carnota vereint die spektakulärsten Landschaften und Kulturdenkmäler Galiciens.

Die 8 Top-Highlights in Carnota & Umgebung
1. Strand von Carnota & Boca do Río: Über 7 km unberührter Sand und Naturpools bei Ebbe.
2. Hórreo von Carnota: Nationaldenkmal aus dem 18. Jahrhundert (34,7 m lang).
3. Hórreo von Lira: Fast 37 Meter lang auf 22 Pfeilerpaaren aus Stein.
4. Lira & Hafen Portocubelo: Authentisches Fischerdorf mit Meeresschutzgebiet und ruhigen Buchten.
5. Monte Pindo & Gipfel A Moa (627 m): Der keltische Olymp mit 360°-Panoramablick.
6. Ézaro-Wasserfall: Einziger Wasserfall der Iberischen Halbinsel, der direkt ins Meer stürzt.
7. Monte Louro & Strand Area Maior: Geschützte Dünenlandschaft und Küstenlagune.
8. Historischer Ortskern von Muros: Mittelalterliches Fischerdorf mit Arkadenstraßen.`,
    it: `Carnota racchiude alcuni dei paesaggi costieri e monumenti più spettacolari della Galizia.

Gli 8 luoghi imperdibili a Carnota e dintorni
1. Spiaggia di Carnota e Boca do Río: Oltre 7 km di sabbia bianca e piscine naturali con la bassa marea.
2. Hórreo di Carnota: Monumento nazionale del XVIII secolo (34,7 m).
3. Hórreo di Lira: Quasi 37 metri su 22 coppie di pilastri in granito.
4. Lira e porto di Portocubelo: Borgo marinaro autentico, riserva marina e calette riparate.
5. Monte Pindo e cima di A Moa (627 m): L'Olimpo celtico con vista a 360° sull'Atlantico.
6. Cascata dell'Ézaro: L'unica cascata nella penisola iberica che si getta direttamente nel mare.
7. Monte Louro e spiaggia di Area Maior: Parco protetto con laguna costiera e dune.
8. Centro storico di Muros: Borgo medievale marinaro con tipici portici in pietra.`,
    pt: `Carnota reúne algumas das paisagens costeiras e monumentos mais espetaculares da Galiza.

Os 8 locais imperdíveis em Carnota e arredores
1. Praia de Carnota e Boca do Río: Mais de 7 km de areia virgem e piscinas naturais na maré baixa.
2. Hórreo de Carnota: Monumento nacional do século XVIII (34,7 m).
3. Hórreo de Lira: Quase 37 metros de comprimento sobre 22 pares de pés.
4. Lira e porto de Portocubelo: Vila piscatória autêntica, reserva marinha e enseadas tranquilas.
5. Monte Pindo e cume da Moa (627 m): O Olimpo Celta com vista de 360° sobre o Atlântico.
6. Cascata do Ézaro: Única cascata da Península Ibérica que desagua diretamente no mar.
7. Monte Louro e praia de Area Maior: Espaço dunar protegido e lagoa costeira.
8. Centro histórico de Muros: Vila medieval marinheira com ruas de arcadas em pedra.`
  },
  'nature.carnota_guide.h1': { es: '8 Visitas Esenciales', gl: '8 Visitas Esenciais', en: 'Top 8 Highlights', fr: 'Top 8 Incontournables', de: '8 Top-Highlights', it: '8 Luoghi Imperdibili', pt: '8 Visitas Essenciais' },
  'nature.carnota_guide.h2': { es: 'Patrimonio y Naturaleza', gl: 'Patrimonio e Natureza', en: 'Heritage & Nature', fr: 'Patrimoine et Nature', de: 'Kultur & Natur', it: 'Patrimonio e Natura', pt: 'Património e Natureza' },
  'nature.carnota_guide.h3': { es: 'Itinerarios Recomendados', gl: 'Itinerarios Recomendados', en: 'Suggested Itineraries', fr: 'Itinéraires conseillés', de: 'Routenvorschläge', it: 'Itinerari consigliati', pt: 'Roteiros sugeridos' },

  'location.louro.title': { es: 'Monte Louro y Playa de Area Maior', gl: 'Monte Louro e Praia de Area Maior', en: 'Mount Louro & Area Maior Beach', fr: 'Mont Louro et Plage d\'Area Maior', de: 'Monte Louro & Strand Area Maior', it: 'Monte Louro e Spiaggia di Area Maior', pt: 'Monte Louro e Praia de Area Maior' },
  'location.louro.desc': { es: 'Pirámide de granito, salvaje arenal de Area Maior y la laguna protegida de As Xarfas en la ría de Muros', gl: 'Pirámide de granito, salvaxe areal de Area Maior e a lagoa protexida de As Xarfas na ría de Muros', en: 'Granite pyramid, wild Area Maior sands, and protected As Xarfas lagoon at the entrance of Muros estuary', fr: 'Pyramide de granit, plage sauvage d\'Area Maior et lagune d\'As Xarfas', de: 'Granitpyramide, wilder Strand Area Maior und die geschützte As Xarfas-Lagune', it: 'Piramide di granito, spiaggia selvaggia di Area Maior e laguna di As Xarfas', pt: 'Pirâmide de granito, praia selvagem de Area Maior e lagoa protegida de As Xarfas' },
  'location.louro.longDesc': {
    es: `En la bocana de la Ría de Muros e Noia se alza la imponente silueta de Monte Louro (241 m), una pirámide de granito que marca el límite geográfico entre las Rías Baixas y la Costa da Morte. A sus pies se despliega un espacio natural protegido de extraordinario valor paisajístico y ecológico.

Playa de Area Maior y Laguna de As Xarfas
A los pies del monte se extiende la salvaje Playa de Area Maior, un arenal abierto de arena blanca y dunas móviles. Justo tras la barrera dunar se encuentra la Laguna de As Xarfas (Lagoa de Louro), un ecosistema dunar-lacustre protegido donde nidifican y descansan numerosas aves acuáticas y migratorias.

Paseos y puntos de interés
• Faro de Monte Louro: Una carretera estrecha conduce hasta el faro que vigila la entrada de la ría, con vistas sobre la ensenada de San Francisco y las islas de la ría.
• Paseo dunar: Senderos y pasarelas de madera permiten bordear la laguna y la playa disfrutando de la flora litoral protegida.
• Precaución en el baño: Al ser una playa abierta al océano, el oleaje suele ser intenso; se recomienda bañarse con precaución.

Combinación con la villa marinera de Muros
Monte Louro se encuentra a apenas 10 minutos en coche de la villa histórica de Muros, célebre por su casco histórico medieval, sus calles porticadas de piedra y sus tabernas de pescado fresco.`,
    gl: `Na bocana da Ría de Muros e Noia érguese o Monte Louro (241 m), unha pirámide de granito que protexe a salvaxe Praia de Area Maior e a Lagoa de As Xarfas.

Puntos de interese
• Lagoa de As Xarfas: Lagoa costeira de gran valor ecolóxico e refuxio de aves migratorias.
• Praia de Area Maior: Areal virxe de area branca aberto ao océano.
• Faro de Monte Louro: Vistas excepcionais sobre a entrada da ría.`,
    en: `Standing at the mouth of the Muros & Noia Estuary, Mount Louro (241 m) is an iconic granite pyramid marking the geographical boundary between the Rías Baixas and the Costa da Morte, guarding the wild sands of Area Maior Beach and the protected As Xarfas coastal lagoon.

Area Maior Beach & As Xarfas Lagoon
At the base of the peak lies Area Maior, an open expanse of fine white sand and mobile dunes. Tucked just behind the dunes is the protected lagoon of As Xarfas (Lagoa de Louro), a vital coastal-lacustrine haven for resident and migratory waterbirds.

Key Highlights & Tips
• Mount Louro Lighthouse: A narrow road winds to the scenic lighthouse watching over the estuary entrance and San Francisco bay.
• Dune Boardwalk: Wooden pathways offer peaceful walks around the lagoon while safeguarding the delicate native flora.
• Swimming Caution: Open to oceanic swells, waves can be strong; swim with attention to sea conditions.

Combining with Muros Historic Town
Mount Louro is only 10 minutes by car from the historic seaside town of Muros, famous for its medieval stone arcades and authentic fresh fish taverns.`,
    fr: `À l'embouchure de la Ría de Muros e Noia s'élève la silhouette emblématique du mont Louro (241 m), une pyramide de granit veillant sur la plage sauvage d'Area Maior et la lagune protégée d'As Xarfas.

Plage d'Area Maior et Lagune d'As Xarfas
Au pied du mont s'étend la plage d'Area Maior, vaste étendue de sable blanc et de dunes mobiles. Juste derrière les dunes se niche la lagune d'As Xarfas, un écosystème dunaire protégé abritant de nombreux oiseaux migrateurs.

Visites et conseils
• Phare de Monte Louro : Route panoramique menant au phare dominant l'entrée de la baie.
• Passerelle dunaire : Sentiers et caillebotis en bois pour longer la lagune en préservant la flore protégée.
• Prudence pour la baignade : Plage ouverte sur l'océan, attention aux rouleaux et courants.

À combiner avec la cité médiévale de Muros
À seulement 10 minutes en voiture de la ville historique de Muros, réputée pour ses ruelles à arcades et ses tavernes de poisson frais.`,
    de: `An der Mündung der Ría de Muros e Noia erhebt sich die markante Granitpyramide des Monte Louro (241 m), die den wilden Strand Area Maior und die geschützte Lagune As Xarfas bewacht.

Strand Area Maior und Lagune As Xarfas
Am Fuße des Berges erstreckt sich der weitläufige weiße Sandstrand Area Maior mit seinen Wanderdünen. Direkt dahinter liegt die Lagoa de Louro (As Xarfas), ein bedeutendes Vogelschutzgebiet für Zugvögel.

Sehenswürdigkeiten und Tipps
• Leuchtturm Monte Louro: Spektakulärer Ausblick über die Ría und die Bucht von San Francisco.
• Dünenwanderweg: Holzstege schützen die empfindliche Dünenflora bei Spaziergängen an der Lagune.
• Badesicherheit: Als offener Atlantikstrand herrschen oft kräftige Wellen; vorsichtig baden.

Kombination mit der historischen Altstadt von Muros
Nur 10 Autominuten von der denkmalgeschützten Seefahrerstadt Muros mit ihren steinernen Bogengängen und Fischlokalen entfernt.`,
    it: `All'imboccatura della Ría de Muros e Noia si erge il Monte Louro (241 m), una suggestiva piramide di granito che sovrasta la spiaggia selvaggia di Area Maior e la laguna protetta di As Xarfas.

Spiaggia di Area Maior e Laguna di As Xarfas
Ai piedi del monte si stende l'ampia spiaggia di Area Maior con le sue dune mobili. Subito dietro si trova la laguna di As Xarfas, preziosa oasi per l'avifauna migratoria.

Punti di interesse
• Faro di Monte Louro: Vista panoramica sulla baia di San Francisco e sull'ingresso dell'estuario.
• Passerelle dunari: Percorsi in legno per passeggiare attorno alla laguna proteggendo la vegetazione costiera.
• Prudenza nel bagno: Trattandosi di una spiaggia aperta sull'Atlantico, le onde possono essere sostenute.

Da abbinare alla cittadina medievale di Muros
A soli 10 minuti di auto dal centro storico di Muros, celebre per i portici marinari in pietra e le taverne tipiche.`,
    pt: `Na entrada da Ria de Muros e Noia ergue-se o Monte Louro (241 m), uma imponente pirâmide de granito que guarda a praia selvagem de Area Maior e a lagoa protegida de As Xarfas.

Praia de Area Maior e Lagoa de As Xarfas
Aos pés do monte estende-se o extenso areal branco de Area Maior. Por trás do cordão dunar situa-se a Lagoa de As Xarfas, refúgio de aves aquáticas e migratórias.

Pontos de interesse
• Farol de Monte Louro: Miradouro panorâmico sobre a enseada de San Francisco e a entrada da ria.
• Passadiços nas dunas: Percursos de madeira que permitem contornar a lagoa preservando a flora litoral.
• Cuidado nos banhos: Praia aberta ao oceano com ondulação por vezes forte.

Combinação com a vila histórica de Muros
A apenas 10 minutos de carro do centro histórico de Muros, famoso pelas suas ruas com arcadas de pedra e tabernas de peixe fresco.`
  },
  'nature.louro.h1': { es: 'Laguna de As Xarfas', gl: 'Lagoa de As Xarfas', en: 'As Xarfas Lagoon', fr: 'Lagune d\'As Xarfas', de: 'As Xarfas Lagune', it: 'Laguna di As Xarfas', pt: 'Lagoa de As Xarfas' },
  'nature.louro.h2': { es: 'Playa de Area Maior', gl: 'Praia de Area Maior', en: 'Area Maior Beach', fr: 'Plage d\'Area Maior', de: 'Strand Area Maior', it: 'Spiaggia di Area Maior', pt: 'Praia de Area Maior' },
  'nature.louro.h3': { es: 'Faro y Ría de Muros', gl: 'Faro e Ría de Muros', en: 'Lighthouse & Estuary', fr: 'Phare et Estuaire', de: 'Leuchtturm & Mündung', it: 'Faro ed Estuario', pt: 'Farol e Ria de Muros' },

  'location.ezaro.title': { es: 'Fervenza do Ézaro y Mirador', gl: 'Fervenza do Ézaro e Miradoiro', en: 'Ézaro Waterfall & Viewpoint', fr: 'Cascade d\'Ézaro et Belvédère', de: 'Ézaro-Wasserfall & Aussichtspunkt', it: 'Cascata dell\'Ézaro e Belvedere', pt: 'Cascata do Ézaro e Miradouro' },
  'location.ezaro.desc': { es: 'Única cascada de la Península Ibérica que desemboca en el océano Atlántico y su mirador panorámico', gl: 'Única fervenza da Península Ibérica que desemboca no océano Atlántico e o seu miradoiro panorámico', en: 'The only waterfall in the Iberian Peninsula cascading directly into the Atlantic Ocean, plus its panoramic viewpoint', fr: 'Seule cascade de la péninsule Ibérique se jetant directement dans l\'océan Atlantique et son belvédère', de: 'Der einzige Wasserfall der Iberischen Halbinsel, der direkt ins Meer stürzt, und sein Aussichtspunkt', it: 'L\'unica cascata della penisola iberica che si getta nell\'oceano Atlantico e il suo punto panoramico', pt: 'A única cascata da Península Ibérica que desagua no oceano Atlântico e o seu miradouro' },
  'location.ezaro.longDesc': {
    es: `Situada en el municipio de Dumbría, a unos 20 minutos de Carnota, la Fervenza do Ézaro es un fenómeno natural único: es la única cascada de la Península Ibérica donde un río (el Xallas) se precipita en caída libre directamente al océano Atlántico.

El salto del río Xallas
Tras encajonarse entre las moles de granito del Monte Pindo, el río Xallas salva un desnivel de más de 40 metros en forma de atronadora cascada sobre la ensenada marina de Ézaro, creando una nube constante de agua pulverizada.

Acceso y pasarelas
• Pasarelas peatonales: Desde el aparcamiento del puerto deportivo de Ézaro parte una cómoda pasarela de madera llana de unos 300 metros que bordea el río hasta la base misma de la cascada. Es un paseo completamente accesible y apto para todas las edades.
• Iluminación nocturna: Durante las noches de verano y fechas festivas señaladas, la cascada cuenta con un espectáculo de iluminación artística sobre la roca.

Diferencia clave: Fervenza vs. Mirador do Ézaro
• Fervenza do Ézaro: Situada a nivel del mar junto al puerto, con acceso directo y llano a la cascada.
• Miradoiro do Ézaro: Situado en lo alto de la montaña (acceso por carretera de 1.8 km con rampas del 28% famosas en la Vuelta a España). Desde arriba se disfruta de una vista panorámica sublime de la ría, la desembocadura y el cañón granítico del Monte Pindo.`,
    gl: `A Fervenza do Ézaro (Dumbría), a uns 20 minutos de Carnota, é a única fervenza da Península Ibérica que desemboca directamente no océano Atlántico.

O salto do río Xallas
Unha caída de máis de 40 metros de altura que golpea as paredes graníticas do Monte Pindo antes de mesturarse coa auga salgada da ría.

Diferenza clave: Fervenza vs. Miradoiro
• Fervenza: A nivel do mar xunto ao porto, con pasarelas de madeira llanas.
• Miradoiro: No alto da montaña (rampas do 28%), con vistas panorámicas sobre a ría e o Monte Pindo.`,
    en: `The Ézaro Waterfall in Dumbría, about 20 minutes from Carnota, is the only waterfall in the Iberian Peninsula plunging directly into the open Atlantic Ocean.

The River Xallas Cascade
A thunderous 40-meter cascade where freshwater crashes against the granite walls of Mount Pindo into the sea.

Waterfall vs. Panoramic Viewpoint
• The Waterfall: Located at sea level with flat wooden boardwalks accessible to all.
• The Viewpoint (Miradoiro): High on the mountain ridge (via a steep road with 28% gradients), offering sweeping views of the coastline.`,
    fr: `Située à environ 20 minutes de Carnota, la cascade d'Ézaro est l'unique chute d'eau de la péninsule Ibérique où un fleuve (le Xallas) se jette directement dans l'océan Atlantique.

La chute du fleuve Xallas
Le fleuve franchit un dénivelé spectaculaire de plus de 40 mètres sur les parois granitiques du mont Pindo avant de plonger dans l'eau de mer.

Cascade vs Belvédère d'Ézaro
• La Cascade : Située au niveau de la mer avec une passerelle en bois accessible de 300 mètres.
• Le Belvédère (Mirador) : Perché sur les hauteurs (célèbre rampe à 28% du Tour d'Espagne) offrant un panorama saisissant sur l'estuaire.`,
    de: `Rund 20 Minuten von Carnota entfernt stürzt der Fluss Xallas beim Ézaro-Wasserfall über 40 Meter tief direkt in den Atlantik – ein auf der Iberischen Halbinsel einzigartiges Naturschauspiel.

Wasserfall und Aussichtspunkt
• Der Wasserfall: Auf Meereshöhe über einen 300 Meter langen, barrierefreien Holzsteg bequem erreichbar.
• Der Aussichtspunkt (Mirador): Hoch über der Bucht (bekannt für 28%-Steigungen der Vuelta a España) mit atemberaubendem Weitblick über den Granit-Canyon.`,
    it: `A circa 20 minuti da Carnota, la Cascata dell'Ézaro è l'unica cascata nella penisola iberica in cui un fiume (lo Xallas) si getta direttamente nell'oceano Atlantico.

Cascata vs Belvedere
• La Cascata: A livello del mare, raggiungibile con una comoda passerella in legno di 300 metri adatta a tutti.
• Il Belvedere (Miradoiro): Situato in quota (salita con pendenze del 28% celebre alla Vuelta) con vista mozzafiato sulla ría e sul Monte Pindo.`,
    pt: `Situada a cerca de 20 minutos de Carnota, a Cascata do Ézaro é a única cascata da Península Ibérica onde um rio (o Xallas) desagua em queda livre diretamente no Oceano Atlântico.

Cascata vs Miradouro
• A Cascata: Ao nível do mar com um passadiço de madeira plano de 300 metros acessível a todos.
• O Miradouro: No alto da montanha (subida épica com 28% de inclinação) com vista panorâmica deslumbrante sobre o desfiladeiro.`
  },
  'nature.ezaro.h1': { es: 'Cascada del Río Xallas', gl: 'Salto do Río Xallas', en: 'River Xallas Fall', fr: 'Chute du fleuve Xallas', de: 'Wasserfall Fluss Xallas', it: 'Cascata Fiume Xallas', pt: 'Queda do Rio Xallas' },
  'nature.ezaro.h2': { es: 'Pasarelas Accesibles', gl: 'Pasarelas Accesibles', en: 'Accessible Boardwalks', fr: 'Passerelles accessibles', de: 'Barrierefreie Holzstege', it: 'Passerelle accessibili', pt: 'Passadiços acessíveis' },
  'nature.ezaro.h3': { es: 'Mirador Panorámico', gl: 'Miradoiro Panorámico', en: 'Panoramic Viewpoint', fr: 'Belvédère panoramique', de: 'Panoramablick', it: 'Belvedere panoramico', pt: 'Miradouro panorâmico' },

  // Contextual Accommodation & Related Section
  'nature.cta.title': {
    es: '¿Planeando tu estancia en Carnota y Costa da Morte?',
    gl: 'Planeando a túa estadía en Carnota e Costa da Morte?',
    en: 'Planning your stay in Carnota & Costa da Morte?',
    fr: 'Vous préparez votre séjour à Carnota et sur la Costa da Morte ?',
    de: 'Planen Sie Ihren Aufenthalt in Carnota & an der Costa da Morte?',
    it: 'Stai programmando il tuo soggiorno a Carnota e nella Costa da Morte?',
    pt: 'A planear a sua estadia em Carnota e na Costa da Morte?'
  },
  'nature.cta.desc': {
    es: 'Casa da Cuncheira es una acogedora vivienda vacacional en Lira (Carnota) con capacidad para 6 personas, vistas al mar y wifi 5G. La base ideal para descubrir estos parajes con total comodidad y tranquilidad.',
    gl: 'Casa da Cuncheira é unha acolledora vivenda vacacional en Lira (Carnota) con capacidade para 6 persoas, vistas ao mar e wifi 5G. A base ideal para descubrir estas paraxes con comodidade.',
    en: 'Casa da Cuncheira is a welcoming holiday rental in Lira (Carnota) for up to 6 guests, with sea views and 5G Wi-Fi. The perfect base to explore these landscapes with comfort and serenity.',
    fr: 'Casa da Cuncheira est une maison de vacances chaleureuse à Lira (Carnota) pour 6 personnes, avec vue sur la mer et Wi-Fi 5G. Le point de départ parfait pour explorer ces paysages.',
    de: 'Casa da Cuncheira ist ein gemütliches Ferienhaus in Lira (Carnota) für bis zu 6 Personen mit Meerblick und 5G-WLAN. Die ideale Basis für Ihre Entdeckungen.',
    it: 'Casa da Cuncheira è un accogliente alloggio vacanze a Lira (Carnota) per 6 persone, con vista mare e Wi-Fi 5G. La base perfetta per esplorare questi paesaggi.',
    pt: 'Casa da Cuncheira é um acolhedor alojamento de férias em Lira (Carnota) para 6 pessoas, com vista para o mar e Wi-Fi 5G. A base ideal para explorar estas paisagens.'
  },
  'nature.cta.house': { es: 'Conocer Casa da Cuncheira', gl: 'Coñecer Casa da Cuncheira', en: 'Discover Casa da Cuncheira', fr: 'Découvrir Casa da Cuncheira', de: 'Casa da Cuncheira entdecken', it: 'Scopri Casa da Cuncheira', pt: 'Conhecer Casa da Cuncheira' },
  'nature.cta.book': { es: 'Consultar disponibilidad', gl: 'Consultar dispoñibilidade', en: 'Check availability', fr: 'Consulter la disponibilité', de: 'Verfügbarkeit prüfen', it: 'Verifica disponibilità', pt: 'Consultar disponibilidade' },
  'nature.related.title': { es: 'Otros lugares cercanos que descubrir', gl: 'Outros lugares próximos que descubrir', en: 'Other nearby places to explore', fr: 'Autres lieux à découvrir à proximité', de: 'Weitere Sehenswürdigkeiten in der Nähe', it: 'Altri luoghi vicini da scoprire', pt: 'Outros locais próximos a descobrir' },

  'experiences.hiking.title': { es: 'Senderismo por Monte Pindo', gl: 'Sendeirismo polo Monte Pindo', en: 'Hiking Mount Pindo', fr: 'Randonnée au Mont Pindo', de: 'Wandern auf den Berg Pindo', it: 'Escursionismo sul Monte Pindo', pt: 'Caminhadas pelo Monte Pindo' },
  'experiences.hiking.desc': { es: 'Ruta de 3 horas por el monte sagrado celta', gl: 'Ruta de 3 horas polo monte sagrado celta', en: '3-hour route through the sacred Celtic mountain', fr: 'Itinéraire de 3 heures à travers la montagne sacrée celtique', de: '3-stündige Route durch den heiligen keltischen Berg', it: 'Percorso di 3 ore attraverso la sacra montagna celtica', pt: 'Percurso de 3 horas pela montanha sagrada celta' },
  'experiences.hiking.duration': { es: '3h', gl: '3h', en: '3h', fr: '3h', de: '3h', it: '3h', pt: '3h' },
  'experiences.surf.title': { es: 'Surf en la Costa da Morte', gl: 'Surf na Costa da Morte', en: 'Surf in Costa da Morte', fr: 'Surf sur la Costa da Morte', de: 'Surfen an der Costa da Morte', it: 'Surf nella Costa da Morte', pt: 'Surf na Costa da Morte' },
  'experiences.surf.desc': { es: 'Clases de surf en las mejores olas del Atlántico', gl: 'Clases de surf nas mellores ondas do Atlántico', en: 'Surf lessons in the best waves of the Atlantic', fr: 'Cours de surf dans las mejores vagues de l\'Atlantique', de: 'Surfkurse in den besten Wellen des Atlantiks', it: 'Lezioni di surf nelle migliori onde dell\'Atlântico', pt: 'Aulas de surf nas melhores ondas do Atlântico' },
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
  'experiences.sunset.desc': { es: 'Observa las mejores puestas de sol de Galicia', gl: 'Observa as mellores postas de sol de Galicia', en: 'Watch the best sunsets in Galicia', fr: 'Observez les meilleurs couchers de soleil de Galice', de: 'Beobachten Sie die besten Sonnenuntergänge in Galizien', it: 'Guarda i migliori tramonti della Galizia', pt: 'Veja os melhores pores do sol da Galiza' },
  'experiences.sunset.duration': { es: '1h', gl: '1h', en: '1h', fr: '1h', de: '1h', it: '1h', pt: '1h' },
  'nature.sunset.title': { es: 'Atardeceres Mágicos', gl: 'Atardeceres Máxicos', en: 'Magical Sunsets', fr: 'Couchers de soleil Magiques', de: 'Magische Sonnenuntergänge', it: 'Tramonti Magici', pt: 'Pôr do sol Mágico' },
  'nature.sunset.summary': { es: 'Descubre por qué esta costa fue considerada el fin del mundo conocido.', gl: 'Descobre por que esta costa foi considerada o fin do mundo coñecido.', en: 'Discover why this coast was considered the end of the known world.', fr: 'Découvrez pourquoi cette côte était considérée comme la fin du monde connu.', de: 'Entdecken Sie, warum diese Küste als das Ende der bekannten Welt galt.', it: 'Scopri perché questa costa era considerata la fine del mundo conosciuto.', pt: 'Descubra por que esta costa foi considerada o fim do mundo conhecido.' },
  'nature.sunset.h1': { es: 'Cabo Fisterra', gl: 'Cabo Fisterra', en: 'Cape Finisterre', fr: 'Cap Finisterre', de: 'Kap Finisterre', it: 'Capo Finisterre', pt: 'Cabo Finisterra' },
  'nature.sunset.h2': { es: 'Faro de Lariño', gl: 'Faro de Lariño', en: 'Lariño Lighthouse', fr: 'Phare de Lariño', de: 'Lariño Leuchtturm', it: 'Faro di Lariño', pt: 'Farol de Lariño' },
  'nature.sunset.h3': { es: 'Paz Absoluta', gl: 'Paz Absoluta', en: 'Absolute Peace', fr: 'Paix Absolue', de: 'Absoluter Frieden', it: 'Pace Assoluta', pt: 'Paix Absoluta' },
  'nature.sunset.longDesc': {
    es: `Contemplar el atardecer en A Costa da Morte es una experiencia que trasciende lo visual. Para los antiguos, este era el "Finis Terrae", el lugar donde el sol moría cada día en el océano, marcando el límite del mundo conocido.

Lugares mágicos
No existe un solo punto para disfrutar de este espectáculo, sino toda una geografía de luz y color:
• Cabo Fisterra: El lugar más emblemático. Sentarse en las rocas junto al faro mientras el disco solar se sumerge en el Atlántico es un rito compartido por miles de viajeros y peregrinos.
• Praia de Carnota: Con sus 7 kilómetros de arena, la puesta de sol aquí es un despliegue de reflejos dorados sobre la orilla infinita.
• Faro de Lariño (Punta da Ínsua): Mucho más tranquilo y cercano a Casa da Cuncheira, ofrece un entorno íntimo con el sonido de las olas rompiendo contra el granito.

El ritual
El momento del "rayo verde", la gama de púrpuras y naranjas que tiñen el cielo, y el silencio que se adopera de la costa cuando el sol desaparece, hacen de este momento el cierre perfecto para cualquier día de exploración. Se recomienda llegar al menos 30 minutos antes de la hora prevista para disfrutar de toda la transición lumínica.`,
    gl: `Contemplar o atardecer na Costa da Morte é unha experiencia que transcende o visual. Para os antigos, este era o "Finis Terrae", o lugar onde o sol morría cada día no océano, marcando o límite do mundo coñecido.

Lugares máxicos
Non existe un só punto para gozar deste espectáculo, senón toda unha xeografía de luz e cor:
• Cabo Fisterra: O lugar máis emblemático. Sentarse nas rochas xuntas ao faro mentres o disco solar se somerxe no Atlántico é un rito compartido por miles de viaxeiros e peregrinos.
• Praia de Carnota: Cos seus 7 quilómetros de area, a posta de sol aquí é un despregue de reflexos dourados sobre a orilla infinita.
• Faro de Lariño (Punta da Ínsua): Moito máis tranquilo e próximo a Casa da Cuncheira, ofrece un contorno íntimo co son das ondas rompendo contra o granito.

O ritual
O momento do "raio verde", a gama de púrpuras e laranxas que tinguen o ceo, e o silencio que se apodera da costa cando o sol desaparece, fan deste momento o peche perfecto para calquera día de exploración. Recoméndase chegar polo menos 30 minutos antes da hora prevista para gozar de toda a transición lumínica.`,
    en: `Watching the sunset in A Costa da Morte is an experience that transcends the visual. For the ancients, this was the "Finis Terrae," the place where the sun died each day in the ocean, marking the boundary of the known world.

Magical places
There isn't just one spot to enjoy this spectacle, but an entire geography of light and color:
• Cape Finisterre: The most emblematic place. Sitting on the rocks next to the lighthouse while the solar disk sinks into the Atlantic is a ritual shared by thousands of travelers and pilgrims.
• Carnota Beach: With its 7 kilometers of sand, the sunset here is a display of golden reflections over the infinite shore.
• Lariño Lighthouse (Punta da Ínsua): Much quieter and closer to Casa da Cuncheira, it offers an intimate setting with the sound of the waves breaking against the granite.

The ritual
The moment of the "green flash," the range of purples and oranges that tint the sky, and the silence that takes over the coast when the sun disappears, make this moment the perfect closure for any day of exploration. It is recommended to arrive at least 30 minutes before the scheduled time to enjoy the entire lighting transition.`,
    fr: `Contempler le coucher du soleil sur la Costa da Morte est une expérience qui transcende le visuel. Pour les anciens, c'était le "Finis Terrae", l'endroit où le soleil mourait chaque jour dans l'océan, marquant la limite du monde connu.

Lieux magiques
Il n'existe pas un seul point pour profiter de ce spectacle, mais toute une géographie de lumière et de couleurs :
• Cap Finisterre : Le lieu le plus emblématique. S'asseoir sur les rochers près du phare pendant que le disque solaire s'immerge dans l'Atlantique est un rite partagé par des milliers de voyageurs et de pèlerins.
• Plage de Carnota : Avec ses 7 kilomètres de sable, le coucher de soleil est ici un déploiement de reflets dorés sur le rivage infini.
• Phare de Lariño (Punta da Ínsua) : Beaucoup plus calme et proche de Casa da Cuncheira, il offre un cadre intime avec le son des vagues s'écrasant contre le granit.

Le rituel
Le moment du "rayon vert", la gamme de pourpres et d'oranges qui teintent le ciel, et le silence qui s'empare de la côte lorsque le soleil disparaît, font de ce moment la clôture parfaite de toute journée d'exploration. Il est recommandé d'arriver au moins 30 minutes à l'avance pour profiter de toute la transition lumineuse.`,
    de: `Den Sonnenuntergang an der Costa da Morte zu betrachten, ist ein Erlebnis, das über das Visuelle hinausgeht. Für die Vorfahren war dies das "Finis Terrae", der Ort, an dem die Sonne jeden Tag im Ozean starb und die Grenze der bekannten Welt markierte.

Magische Orte
Es gibt nicht nur einen einzigen Ort, um dieses Spektakel zu genießen, sondern eine ganze Geografie aus Licht und Farbe:
• Kap Finisterre: Der emblematischste Ort. Auf den Felsen neben dem Leuchtturm zu sitzen, während die Sonnenscheibe im Atlantik versinkt, ist ein Ritual, das von Tausenden von Reisenden und Pilgern geteilt wird.
• Strand von Carnota: Mit seinen 7 Kilometern Sand ist der Sonnenuntergang hier ein Schauspiel aus goldenen Reflexen am unendlichen Ufer.
• Leuchtturm von Lariño (Punta da Ínsua): Viel ruhiger und näher an der Casa da Cuncheira gelegen, bietet er einen intimen Rahmen mit dem Rauschen der Wellen, die gegen den Granit brechen.

Das Ritual
Der Moment des "grünen Blitzes", die Palette von Purpur und Orange, die den Himmel färbt, und die Stille, die sich über die Küste legt, wenn die Sonne verschwindet, machen diesen Moment zum perfekten Abschluss eines jeden Erkundungstages. Es wird empfohlen, mindestens 30 Minuten vor der geplanten Zeit einzutreffen, um den gesamten Lichtübergang zu genießen.`,
    it: `Contemplare il tramonto nella Costa da Morte è un'esperienza che trascende il visivo. Per gli antichi, questo era il "Finis Terrae", il luogo in cui il sole moriva ogni giorno nell'oceano, segnando il confine del mondo conosciuto.

Luoghi magici
Non esiste un solo punto per godere di questo spettacolo, ma un'intera geografia di luce e colore:
• Capo Finisterre: Il luogo più emblematico. Sedersi sulle rocce vicino al faro mentre il disco solare si immerge nell'Atlantico è un rito condiviso da migliaia di viaggiatori e pellegrini.
• Spiaggia di Carnota: Con i suoi 7 chilometri di sabbia, il tramonto qui è un'esposizione di riflessi dorati sulla riva infinita.
• Faro di Lariño (Punta da Ínsua): Molto più tranquillo e vicino a Casa da Cuncheira, offre un ambiente intimo con il suono delle onde che si infrangono contro il granito.

Il rituale
Il momento del "raggio verde", la gamma di viola e arancioni che tingono il cielo e il silenzio che si impossessa della costa quando il sole scompare, rendono questo momento la chiusura perfetta per ogni giornata di esplorazione. Si consiglia di arrivare almeno 30 minuti prima dell'ora prevista per godersi l'intera transizione luminosa.`,
    pt: `Contemplar o pôr do sol na Costa da Morte é uma experiência que transcende o visual. Para os antigos, este era o "Finis Terrae", o lugar onde o sol morria cada dia no oceano, marcando o limite do mundo conhecido.

Lugares mágicos
Não existe apenas um ponto para desfrutar deste espectáculo, mas toda uma geografia de luz e cor:
• Cabo Finisterra: O lugar mais emblemático. Sentar-se nas rochas junto ao farol enquanto o disco solar mergulha no Atlântico é um rito partilhado por milhares de viajantes e peregrinos.
• Praia de Carnota: Com os seus 7 quilómetros de areia, o pôr do sol aqui é um desfile de reflexos dourados sobre a margem infinita.
• Farol de Lariño (Punta da Ínsua): Muito mais tranquilo e próximo da Casa da Cuncheira, oferece um ambiente íntimo com o som das ondas a quebrar contra o granito.

O ritual
O momento do "raio verde", a gama de púrpuras e laranjas que tingem o céu, e o silêncio que se apodera da costa quando o sol desaparece, fazem deste momento o encerramento perfeito para qualquer dia de exploração. Recomenda-se chegar pelo menos 30 minutos antes da hora prevista para desfrutar de toda a transição lumínica.`
  },

  'nature.villages.title': {
    es: 'Pueblos Marineros y Península de O Barbanza',
    gl: 'Pobos Mariñeiros e Península do Barbanza',
    en: 'Seafaring Villages & O Barbanza Peninsula',
    fr: 'Villages de Pêcheurs et Péninsule d\'O Barbanza',
    de: 'Seefahrerdörfer & Halbinsel O Barbanza',
    it: 'Villaggi Marinari e Penisola di O Barbanza',
    pt: 'Aldeias de Pescadores e Península de O Barbanza'
  },
  'nature.villages.summary': {
    es: 'Villas señoriales, puertos de tradición viva, miradores sobre las rías y arenales salvajes entre Noia, Muros y Ribeira.',
    gl: 'Vilas señoriais, portos de tradición viva, miradores sobre as rías e areais salvaxes entre Noia, Muros e Ribeira.',
    en: 'Stately coastal towns, vibrant fishing ports, sweeping viewpoints, and untamed beaches between Noia, Muros, and Ribeira.',
    fr: 'Villas côtières chargées d\'histoire, ports vivants, belvédères panoramiques et plages sauvages entre Noia, Muros et Ribeira.',
    de: 'Historische Küstenstädtchen, lebendige Fischerhäfen, spektakuläre Aussichtspunkte und wilde Strände zwischen Noia, Muros und Ribeira.',
    it: 'Borghi storici, porti di antica tradizione, belvedere panoramici e spiagge selvagge tra Noia, Muros e Ribeira.',
    pt: 'Vilas senhoriais, portos de tradição viva, miradouros sobre as rias e areais selvagens entre Noia, Muros e Ribeira.'
  },
  'nature.villages.h1': {
    es: 'Villas con Historia',
    gl: 'Vilas con Historia',
    en: 'Historic Towns',
    fr: 'Villes Historiques',
    de: 'Historische Städte',
    it: 'Borghi Storici',
    pt: 'Vilas Históricas'
  },
  'nature.villages.h2': {
    es: 'Miradores y Dunas',
    gl: 'Miradores e Dunas',
    en: 'Viewpoints & Dunes',
    fr: 'Belvédères et Dunes',
    de: 'Aussichtspunkte & Dünen',
    it: 'Belvedere e Dune',
    pt: 'Miradouros e Dunas'
  },
  'nature.villages.h3': {
    es: 'Esencia y Sabor de Ría',
    gl: 'Esencia e Sabor de Ría',
    en: 'Seafood & Living Tradition',
    fr: 'Saveurs et Traditions de la Mer',
    de: 'Meeresgeschmack & Tradition',
    it: 'Sapori e Tradizione di Mare',
    pt: 'Essência e Sabor da Ria'
  },
  'nature.villages.longDesc': {
    es: `La Península de O Barbanza y la Ría de Muros e Noia forman uno de los rincones más genuinos y cautivadores de Galicia. Flanqueada al norte por las aguas mansas de Muros y Noia y al sur por la Ría de Arousa, esta tierra fusiona cumbres de granito, pueblos volcados en el mar, dunas milenarias y una gastronomía que nace en las lonjas locales.

Villas marineras y puertos con alma
Un itinerario que invita a detener el reloj y caminar sin prisas por calles empedradas y muelles tradicionales:
• Muros: Joya arquitectónica declarada conjunto histórico-artístico. Pasear bajo sus característicos soportales marineros, donde antiguamente se salaba el pescado y se reparaban las redes, es viajar en el tiempo.
• Noia: La villa medieval por excelencia de la ría. Con su iglesia gótica de Santa María A Nova, su laberinto de plazas y su reconocida fama por el marisqueo de berberechos en los arenales de Testal.
• Palmeira y Portosín: Puertos donde las dornas de madera tradicionales conviven con terrazas vivas y modernas marinas deportivas, conservando intacta la memoria de las antiguas fábricas de salazón.
• Porto do Son: Pueblo marinero enmarcado entre calas secretas, con el emblemático mirador de A Garita vigilando el horizonte oceánico.

Miradores y naturaleza salvaje
La Sierra de O Barbanza se eleva a casi 700 metros sobre el mar, regalando balcones naturales irrepetibles:
• Mirador da Pedra da Rá: Una panorámica vertiginosa que alcanza la mítica Isla de Sálvora, el archipiélago de Cíes y la entrada de las rías.
• Monte Tahume: Una atalaya privilegiada de 360 grados. Hacia el norte la silueta de Monte Louro y Costa da Morte; hacia el oeste, la inmensidad del océano Atlántico.
• Parque Natural de Corrubedo y As Furnas: Las lagunas de Vixán y Carregal dan cobijo a garzas y aves migratorias junto a la gran duna móvil. Más al norte, las piscinas naturales de As Furnas esculpidas por el oleaje en la roca viva completan una costa de belleza sobrecogedora.`,
    gl: `A Península do Barbanza e a Ría de Muros e Noia forman un dos recunchos máis xenuínos e engaiolantes de Galicia. Flanqueada ao norte polas augas mansas de Muros e Noia e ao sur pola Ría de Arousa, esta terra fusiona cumios de granito, vilas envorcadas no mar, dunas milenarias e unha gastronomía que nace nas lonxas locais.

Vilas mariñeiras e portos con alma
Un itinerario que convida a deter o reloxo e camiñar sen présas por rúas empedradas e peiraos tradicionais:
• Muros: Xoia arquitectónica declarada conxunto histórico-artístico. Pasear baixo os seus característicos soportais mariñeiros, onde antigamente se salgaba o peixe e se reparaban as redes, é viaxar no tempo.
• Noia: A vila medieval por excelencia da ría. Coa súa igrexa gótica de Santa María A Nova, o seu labirinto de prazas e a súa recoñecida sona polo marisqueo do berberecho nos areais de Testal.
• Palmeira e Portosín: Portos onde as dornas de madeira tradicionais conviven con terrazas vivas e modernas mariñas deportivas, conservando intacta a memoria das antigas fábricas de salgadura.
• Porto do Son: Pobo mariñeiro enmarcado entre calas secretas, co emblemático mirador da Garita vixiando o horizonte oceánico.

Miradores e natureza salvaxe
A Serra do Barbanza elévase a case 700 metros sobre o mar, regalando balcóns naturais irrepetibles:
• Mirador da Pedra da Rá: Unha panorámica vertixinosa que abrangue a mítica Illa de Sálvora, o arquipélago das Cíes e a entrada das rías.
• Monte Tahume: Unha atalaia privilexiada de 360 graos. Cara ao norte a silueta do Monte Louro e a Costa da Morte; cara ao oeste, a inmensidade do océano Atlántico.
• Parque Natural de Corrubedo e As Furnas: As lagoas de Vixán e Carregal dan acubillo a garzas e aves migratorias xunto á gran duna móbil. Máis ao norte, as piscinas naturais das Furnas esculpidas pola ondaxe na rocha viva completan unha costa de beleza abraiante.`,
    en: `The Barbanza Peninsula and the Ría de Muros e Noia comprise one of Galicia's most authentic and enchanting coastal routes. Sheltered between peaceful estuaries and the open ocean, this region blends granite peaks, historic fishing villages, ancestral sand dunes, and fresh culinary traditions born straight from local fish markets.

Historic Fishing Villages and Ports
A journey that invites you to slow down and wander through stone-paved alleys and traditional harbors:
• Muros: An architectural gem declared a historic-artistic site. Walking beneath its iconic seafaring arcades—where fishermen once salted their catch and mended nets—is like stepping back in time.
• Noia: The quintessential medieval town of the estuary. Featuring the Gothic church of Santa María A Nova, lively historic squares, and its world-famous cockle harvesting along the Testal shores.
• Palmeira and Portosín: Coastal towns where traditional handcrafted wooden boats (dornas) share harbor waters with vibrant seafood terraces and modern marinas, honoring a rich canning heritage.
• Porto do Son: A picturesque village tucked between secluded coves, crowned by the panoramic A Garita viewpoint overlooking the Atlantic horizon.

Panoramic Viewpoints and Untamed Nature
The Barbanza mountain range rises nearly 700 meters above sea level, offering dramatic natural balconies:
• Pedra da Rá Viewpoint: A breathtaking lookout gazing over the legendary Sálvora Island, the Cíes archipelago, and the entrance to the southern estuaries.
• Mount Tahume: A 360-degree observation peak. To the north, the striking silhouette of Mount Louro and Costa da Morte; to the west, the infinite Atlantic Ocean.
• Corrubedo Natural Park and As Furnas: The freshwater and saline lagoons of Vixán and Carregal shelter diverse birdlife beside the immense mobile dune. Further north, the natural rock pools of As Furnas—sculpted by the ocean swells—complete an awe-inspiring coastline.`,
    fr: `La péninsule d'O Barbanza et la Ría de Muros e Noia constituent l'un des territoires les plus authentiques et captivants de Galice. Bordée par des eaux paisibles et le vaste océan, cette région allie sommets granitiques, villages de pêcheurs historiques, dunes préservées et une gastronomie issue directement des criées locales.

Villages maritimes et ports de tradition
Un parcours invitant à flâner sans hâte dans des ruelles pavées et des quais traditionnels :
• Muros : Joyau architectural classé site historico-artistique. Se promener sous ses arcades marines emblématiques, où l'on salait autrefois le poisson, offre un voyage dans le temps.
• Noia : Cité médiévale par excellence avec son église gothique Santa María A Nova, ses places pittoresques et sa réputation renommée pour la récolte des coques sur les grèves de Testal.
• Palmeira et Portosín : Ports où les barques en bois traditionnelles (dornas) côtoient terrasses animées et ports de plaisance modernes, préservant la mémoire des anciennes conserveries de salaison.
• Porto do Son : Charmant village de pêcheurs bordé de criques secrètes, veillé par le point de vue d'A Garita dominant l'océan.

Belvédères et nature sauvage
La chaîne d'O Barbanza culmine à près de 700 mètres au-dessus des flots, offrant des panoramas spectaculaires :
• Belvédère de Pedra da Rá : Vue imprenable sur l'île mythique de Sálvora, les îles Cíes et l'entrée des rías.
• Mont Tahume : Un observatoire à 360 degrés dominant la silhouette du mont Louro, la Costa da Morte et l'immensité atlantique.
• Parc naturel de Corrubedo et As Furnas : Les lagunes de Vixán et Carregal abritent hérons et oiseaux migrateurs auprès de la grande dune mobile. Plus au nord, les piscines naturelles d'As Furnas sculptées par les vagues complètent ce littoral d'une beauté saisissante.`,
    de: `Die Halbinsel O Barbanza und die Ría de Muros e Noia gehören zu den authentischsten und faszinierendsten Küstenlandschaften Galiciens. Umrahmt von ruhigen Meeresarmen und dem tosenden Ozean vereint diese Region Granitgipfel, traditionsreiche Fischerdörfer, uralte Dünen und fangfrische Meeresküche.

Historische Fischerdörfer und Häfen
Eine Entdeckungsreise, die dazu einlädt, gemütlich durch gepflasterte Gassen und alte Häfen zu schlendern:
• Muros: Ein denkmalgeschütztes Juwel galicischer Architektur. Der Spaziergang unter den typischen Bogengängen der Fischerhäuser versetzt Sie direkt in vergangene Jahrhunderte.
• Noia: Das mittelalterliche Herz der Ría mit der gotischen Kirche Santa María A Nova, verwinkelten Plätzen und weltberühmten Herzmuschelbänken am Strand von Testal.
• Palmeira und Portosín: Küstenorte, in denen traditionelle Holzboote (Dornas) neben lebhaften Terrassen und modernen Yachthäfen liegen und die Geschichte historischer Salzkonservenfabriken lebendig halten.
• Porto do Son: Ein malerisches Seefahrerdorf zwischen versteckten Buchten, überragt vom Aussichtspunkt A Garita.

Aussichtspunkte und wilde Natur
Die Sierra de O Barbanza erhebt sich bis zu 700 Meter über das Meer und bietet atemberaubende Panoramablicke:
• Mirador da Pedra da Rá: Ein herrlicher Weitblick über die sagenumwobene Insel Sálvora, das Cíes-Archipel und die Buchten.
• Monte Tahume: Ein 360-Grad-Rundumblick auf die Silhouette des Monte Louro, die Costa da Morte und die Weite des Atlantiks.
• Naturpark Corrubedo und As Furnas: Die Lagunen von Vixán und Carregal bieten Lebensraum für Reiher und Zugvögel neben der großen Wanderdüne. Weiter nördlich faszinieren die vom Meer in den Fels gewaschenen Naturpools von As Furnas.`,
    it: `La Penisola di O Barbanza e la Ría de Muros e Noia costituiscono uno degli angoli più autentici e affascinanti della Galizia. Incastonata tra tranquille insenature e l'oceano aperto, questa terra unisce vette granitiche, villaggi marinari ricchi di storia, dune incontaminate e una gastronomia d'eccellenza.

Borghi marinari e porti storici
Un itinerario per passeggiare senza fretta tra vicoli lastricati e banchine tradizionali:
• Muros: Gioiello architettonico dichiarato complesso storico-artistico. Passeggiare sotto i suoi caratteristici portici marinari è un autentico viaggio nel tempo.
• Noia: Splendida cittadina medievale con la chiesa gotica di Santa María A Nova, suggestive piazzette e i rinomati banchi di vongole e cannolicchi di Testal.
• Palmeira e Portosín: Porti dove le imbarcazioni tradizionali in legno (dorne) convivono con terrazze vivaci e moderni porti turistici, preservando la memoria della salagione del pesce.
• Porto do Son: Borgo peschereccio tra calette segrete, dominato dal panoramico belvedere di A Garita aperto sull'orizzonte atlantico.

Belvedere panoramici e natura selvaggia
La Sierra di O Barbanza si innalza per quasi 700 metri sul livello del mare, offrendo balconi naturali unici:
• Belvedere da Pedra da Rá: Vista spettacolare sull'isola mitica di Sálvora, sull'arcipelago delle Cíes e sulle rías.
• Monte Tahume: Veduta a 360 gradi verso il Monte Louro, la Costa da Morte e l'immensità dell'oceano.
• Parco Naturale di Corrubedo e As Furnas: Le lagune di Vixán e Carregal accolgono aironi e uccelli migratori accanto alla grande duna mobile. Più a nord, le piscine naturali di As Furnas scavate dalle onde nella roccia completano una costa di straordinaria bellezza.`,
    pt: `A Península de O Barbanza e a Ria de Muros e Noia formam um dos recantos mais genuínos e cativantes da Galiza. Flanqueada por águas calmas e pelo oceano aberto, esta terra funde picos de granito, vilas marinheiras históricas, dunas milenares e uma gastronomia fresca nascida nas lotas locais.

Vilas marinheiras e portos com história
Um roteiro que convida a passear sem pressa por ruas empedradas e cais tradicionais:
• Muros: Joia arquitetónica declarada conjunto histórico-artístico. Caminhar sob os seus alpendres marinheiros característicos é uma verdadeira viagem no tempo.
• Noia: A vila medieval por excelência da ria, com a igreja gótica de Santa María A Nova, praças acolhedoras e a fama dos berbigões dos areais de Testal.
• Palmeira e Portosín: Portos onde as embarcações tradicionais de madeira (dornas) convivem com esplanadas animadas e marinhas de recreio modernas.
• Porto do Son: Povoado de pescadores aninhado entre enseadas secretas, vigiado pelo miradouro da Garita.

Miradouros e natureza intocada
A Serra de O Barbanza ergue-se a quase 700 metros sobre o mar, oferecendo varandas panorâmicas inesquecíveis:
• Miradouro da Pedra da Rá: Panorâmica deslumbrante sobre a mítica Ilha de Sálvora, as Ilhas Cíes e a entrada das rias.
• Monte Tahume: Miradouro de 360 graus virado para o Monte Louro, a Costa da Morte e o oceano Atlântico.
• Parque Natural de Corrubedo e As Furnas: As lagoas de Vixán e Carregal acolhem garças e aves migratórias junto à grande duna móvel. Mais a norte, as piscinas naturais de As Furnas esculpidas pela ondulação completam uma costa de beleza arrebatadora.`
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
  'experiences.more': { es: 'Conocer más', gl: 'Coñecer máis', en: 'Learn more', fr: 'En savoir plus', de: 'Mehr erfahren', it: 'Saperne di più', pt: 'Saiba mais' },

  'gastronomy.pageTitle': { es: 'Recomendaciones Gastronómicas', gl: 'Recomendacións Gastronómicas', en: 'Gastronomic Recommendations', fr: 'Recommandations Gastronomiques', de: 'Gastronomische Empfehlungen', it: 'Raccomandazioni Gastronomiche', pt: 'Recomendações Gastronómicas' },
  'gastronomy.pageSubtitle': { es: 'Descubre los mejores sabores de la Costa da Morte, desde mariscos frescos hasta platos tradicionales en un entorno único.', gl: 'Descobre os mellores sabores da Costa da Morte, dende mariscos frescos ata pratos tradicionais nun contorno único.', en: 'Discover the best flavors of Costa da Morte, from fresh seafood to traditional dishes in a unique setting.', fr: 'Découvrez les mejores saveurs de la Costa da Morte, des fruits de mer frais aux plats traditionnels dans un cadre unique.', de: 'Entdecken Sie die besten Aromen der Costa da Morte, von frischen Meeresfrüchten bis hin zu traditionellen Gerichten in einer einzigartigen Umgebung.', it: 'Scopri i migliori sapori della Costa da Morte, dai frutti di mare freschi ai piatti tradizionali in un ambiente unico.', pt: 'Descubra os melhores sabores da Costa da Morte, desde marisco fresco a pratos tradicionais num ambiente único.' },

  'gastronomy.morosa.desc': { es: 'Cocina creativa gallega con productos locales de primera calidad. Un restaurante con encanto y vistas espectaculares.', gl: 'Cociña creativa galega con produtos locais de primeira calidade. Un restaurante con encanto e vistas espectaculares.', en: 'Creative Galician cuisine with top-quality local products. A charming restaurant with spectacular views.', fr: 'Cuisine galicienne créative avec des produits locaux de première qualité. Un restaurant charmant avec des vues spectaculaires.', de: 'Kreative galicische Küche mit erstklassigen lokalen Produkten. Ein charmantes Restaurant mit spektakulärem Ausblick.', it: 'Cucina galiziana creativa con prodotti locali di prima qualità. Un ristorante affascinante con viste spettacolari.', pt: 'Cozinha galega criativa com produtos locais de primeira qualidade. Um restaurante encantador com vistas espectaculares.' },
  'gastronomy.chalana.desc': {
    es: 'Auténtica taberna marinera famosa por su pulpo y marisco fresco. Tradición pura a escasos pasos de Casa da Cuncheira',
    gl: 'Auténtica taberna mariñeira famosa polo seu polbo e marisco fresco. Tradición pura a escasos pasos de Casa da Cuncheira',
    en: 'Authentic seafood tavern famous for its octopus and fresh shellfish. Pure tradition just steps from Casa da Cuncheira',
    fr: 'Authentique taverne de fruits de mer célèbre pour son poulpe et ses fruits de mer frais. Pure tradition à quelques pas de Casa da Cuncheira',
    de: 'Authentische Meeresfrüchte-Taverne, berühmt für ihren Oktopus und frische Meeresfrüchte. Pure Tradition nur wenige Schritte vom Casa da Cuncheira entfernt',
    it: 'Autentica taverna di mare famosa per il polpo e i frutti di mare freschi. Pura tradizione a pochi passi da Casa da Cuncheira',
    pt: 'Autêntica taberna marítima famosa pelo seu polvo e marisco fresco. Tradição pura a escassos passos da Casa da Cuncheira'
  },

  'gastronomy.ocuberto.desc': {
    es: 'Cocina tradicional gallega y tapas variadas en un ambiente acogedor. Especialistas en raciones generosas y productos de la zona.',
    gl: 'Cociña tradicional galega e tapas variadas nun ambiente acolledor. Especialistas en racións xenerosas e produtos da zona.',
    en: 'Traditional Galician cuisine and varied tapas in a cozy atmosphere. Specialists in generous portions and local products.',
    fr: 'Cuisine galicienne traditionnelle et tapas variées dans une ambiance chaleureuse. Spécialistes des portions généreuses et des produits locaux.',
    de: 'Traditionelle galicische Küche und vielfältige Tapas in gemütlicher Atmosphäre. Spezialisten für großzügige Portionen und lokale Produkte.',
    it: 'Cucina galiziana tradizionale e tapas varie in un\'atmosfera accogliente. Specialisti in porzioni generose e prodotti locali.',
    pt: 'Cozinha galega tradicional e tapas variadas num ambiente acolhedor. Especialistas em porções generosas e produtos locais.'
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
  'gastronomy.xouba.desc': {
    es: 'Cocina gallega casera con producto fresco y de calidad. Pescados, mariscos y sabor auténtico de Carnota.',
    gl: 'Cociña galega caseira con produto fresco e de calidade. Peixes, mariscos e sabor auténtico de Carnota.',
    en: 'Homemade Galician cuisine with fresh, quality produce. Fish, seafood, and the authentic flavor of Carnota.',
    fr: 'Cuisine galicienne maison avec des produits frais et de qualité. Poissons, fruits de mer et saveur authentique de Carnota.',
    de: 'Hausgemachte galicische Küche mit frischen Qualitätsprodukten. Fisch, Meeresfrüchte und der authentische Geschmack von Carnota.',
    it: 'Cucina casalinga galiziana con prodotti freschi e di qualità. Pesce, frutti di mare e il sapore autentico di Carnota.',
    pt: 'Cozinha caseira galega com produtos frescos e de qualidade. Peixes, mariscos e o sabor autêntico de Carnota.'
  },
  'gastronomy.sanfrancisco.desc': {
    es: 'Gastrobar junto al mar con platos originales y cuidados para compartir en un ambiente moderno.',
    gl: 'Gastrobar xunto ao mar con pratos orixinais e coidados para compartir nun ambiente moderno.',
    en: 'Seaside gastrobar with creative, nicely presented dishes to share in a modern setting.',
    fr: 'Gastrobar en bord de mer avec des plats créatifs et soignés à partager dans un cadre moderne.',
    de: 'Gastrobar am Meer mit kreativen Gerichten zum Teilen in modernem Ambiente.',
    it: 'Gastrobar sul mare con piatti creativi e curati da condividere in un ambiente moderno.',
    pt: 'Gastrobar à beira-mar com pratos originais e cuidados para partilhar num ambiente moderno.'
  },

  'gastronomy.type.seafood': { es: 'Marisco y pescado fresco', gl: 'Marisco e peixe fresco', en: 'Fresh seafood and fish', fr: 'Fruits de mer et poisson frais', de: 'Frische Meeresfrüchte und Fisch', it: 'Frutti di mare e pesce fresco', pt: 'Marisco e peixe fresco' },
  'gastronomy.type.tapas': { es: 'Tapas / Tradicional Gallega', gl: 'Tapas / Tradicional Galega', en: 'Tapas / Traditional Galician', fr: 'Tapas / Traditionnel galicien', de: 'Tapas / Traditionell galizisch', it: 'Tapas / Tradizionale galiziano', pt: 'Tapas / Tradicional galega' },
  'gastronomy.type.burger': { es: 'Hamburguesería', gl: 'Hamburguería', en: 'Burger restaurant', fr: 'Restaurant de burgers', de: 'Burger-Restaurant', it: 'Hamburgeria', pt: 'Hamburguesaria' },
  'gastronomy.type.gastrobar': { es: 'Gastrobar / Tapas de autor', gl: 'Gastrobar / Tapas de autor', en: 'Gastrobar / Signature Tapas', fr: 'Gastrobar / Tapas d\'auteur', de: 'Gastrobar / Signature Tapas', it: 'Gastrobar / Tapas d\'autore', pt: 'Gastrobar / Tapas de autor' },

  'gastronomy.website': { es: 'Sitio Web', gl: 'Sitio Web', en: 'Website', fr: 'Site Web', de: 'Webseite', it: 'Sito Web', pt: 'Site' },
  'gastronomy.googleMaps': { es: 'Ver en Google Maps', gl: 'Ver en Google Maps', en: 'View on Google Maps', fr: 'Voir sur Google Maps', de: 'Auf Google Maps ansehen', it: 'Vedi su Google Maps', pt: 'Ver no Google Maps' },

  'gastronomy.cta.title': { es: '¿Deseas más recomendaciones personales?', gl: 'Desexas máis recomendacións persoais?', en: 'Would you like more personalized recommendations?', fr: 'Souhaitez-vous plus de recommandations personnalisées?', de: 'Möchten Sie weitere persönliche Empfehlungen?', it: 'Desideri più raccomandazioni personalizzate?', pt: 'Deseja mais recomendações personalizadas?' },
  'gastronomy.cta.desc': { es: 'Estamos encantados de ayudarte a encontrar el lugar perfecto para cada ocasión durante tu estancia.', gl: 'Estamos encantados de axudarche a atopar o lugar perfecto para cada ocasión durante a túa estadía.', en: 'We are delighted to help you find the perfect place for every occasion during your stay.', fr: 'Nous sommes ravis de vous aider à trouver l\'endroit parfait pour chaque occasion pendant votre séjour.', de: 'Wir helfen Ihnen gerne, den perfekten Ort für jeden Anlass während Ihres Aufenthalts zu finden.', it: 'Siamo lieti di aiutarti a trovare il posto perfetto per ogni occasione durante il tuo soggiorno.', pt: 'Estamos encantados em ajudá-lo a encontrar o lugar perfeito para cada ocasião durante a sua estadia.' },

  'gastronomy.breadcrumb': { es: 'Gastronomía en Carnota y Lira', gl: 'Gastronomía en Carnota e Lira', en: 'Gastronomy in Carnota & Lira', fr: 'Gastronomie à Carnota et Lira', de: 'Gastronomie in Carnota & Lira', it: 'Gastronomia a Carnota e Lira', pt: 'Gastronomia em Carnota e Lira' },
  'gastronomy.intro.tag': { es: 'Producto de Lonja y Tradición', gl: 'Produto de Lonxa e Tradición', en: 'Market Catch & Tradition', fr: 'Produits de la criée et tradition', de: 'Marktfrischer Fisch & Tradition', it: 'Prodotti d\'Asta e Tradizione', pt: 'Produtos da Lota e Tradição' },
  'gastronomy.intro.title': { es: 'Sabores del Atlántico: De la Lonja a la Mesa', gl: 'Sabores do Atlántico: Da Lonxa á Mesa', en: 'Flavors of the Atlantic: From Market to Table', fr: 'Saveurs de l\'Atlantique : De la criée à la table', de: 'Aromen des Atlantiks: Vom Fischmarkt auf den Tisch', it: 'Sapori dell\'Atlantico: Dal mercato del pesce alla tavola', pt: 'Sabores do Atlântico: Da Lota à Mesa' },
  'gastronomy.intro.desc': {
    es: 'La gastronomía de Carnota y Lira se sustenta en el producto fresco del mar. En el puerto de Portocubelo (Lira) y las lonjas de la ría de Muros, las capturas de pesca artesanal garantizan pescados de roca salvajes (lubina, sargo, maragota), el célebre pulpo gallego de la reserva marina Os Miñarzos, nécoras y percebes de los acantilados más bravos de la Costa da Morte.',
    gl: 'A gastronomía de Carnota e Lira susténtase no produto fresco do mar. No porto de Portocubelo (Lira) e nas lonxas da ría de Muros, as capturas de pesca artesanal garanten peixes de rocha salvaxes, o polbo da reserva mariña Os Miñarzos, nécoras e percebes da Costa da Morte.',
    en: 'Carnota and Lira gastronomy is built on fresh seafood. In Portocubelo harbor (Lira) and Muros fish markets, artisanal catches provide wild rockfish, famous Galician octopus from the Os Miñarzos marine reserve, and barnacles from the wild cliffs of Costa da Morte.',
    fr: 'La gastronomie de Carnota et Lira repose sur les produits frais de la mer. Au port de Portocubelo (Lira) et aux criées de Muros, la pêche artisanale garantit poissons de roche sauvages, poulpe de la réserve Os Miñarzos et fruits de mer réputés.',
    de: 'Die Gastronomie von Carnota und Lira basiert auf frischen Meeresfrüchten. Im Hafen von Portocubelo (Lira) und den Fischmärkten von Muros garantiert handwerkliche Fischerei wilden Felsenfisch, Oktopus aus dem Schutzgebiet Os Miñarzos und edle Meeresfrüchte.',
    it: 'La gastronomia di Carnota e Lira si basa sui prodotti freschi del mare. Nel porto di Portocubelo (Lira) e nei mercati ittici di Muros, la pesca artigianale garantisce pesci di scoglio, polpo della riserva Os Miñarzos e frutti di mare prelibati.',
    pt: 'A gastronomia de Carnota e Lira baseia-se nos produtos frescos do mar. No porto de Portocubelo (Lira) e nas lotas de Muros, a pesca artesanal garante peixe fresco de rocha, polvo da reserva Os Miñarzos e marisco de qualidade.'
  },
  'gastronomy.explore.title': { es: 'Combina gastronomía y naturaleza en la zona', gl: 'Combina gastronomía e natureza na zona', en: 'Combine gastronomy and nature in the area', fr: 'Combinez gastronomie et nature dans la région', de: 'Kombinieren Sie Gastronomie und Natur in der Region', it: 'Combina gastronomia e natura nella zona', pt: 'Combine gastronomia e natureza na zona' },
  'gastronomy.explore.lira.title': { es: 'Conocer Lira y el Puerto de Portocubelo', gl: 'Coñecer Lira e o Porto de Portocubelo', en: 'Discover Lira & Portocubelo Harbor', fr: 'Découvrir Lira et le port de Portocubelo', de: 'Lira und den Hafen Portocubelo entdecken', it: 'Scopri Lira e il porto di Portocubelo', pt: 'Conhecer Lira e o Porto de Portocubelo' },
  'gastronomy.explore.lira.desc': { es: 'Descubre de dónde procede el pescado fresco y las calas tranquilas junto al puerto.', gl: 'Descobre de onde procede o peixe fresco e as calas tranquilas xunto ao porto.', en: 'Discover where the fresh fish comes from and the calm coves near the harbor.', fr: 'Découvrez l\'origine du poisson frais et les criques paisibles près du port.', de: 'Entdecken Sie die Herkunft des frischen Fisches und ruhige Buchten am Hafen.', it: 'Scopri la provenienza del pesce fresco e le tranquille calette vicino al porto.', pt: 'Descubra de onde vem o peixe fresco e as enseadas tranquilas junto ao porto.' },
  'gastronomy.explore.carnota.title': { es: 'Guía: Qué ver en Carnota y alrededores', gl: 'Guía: Que ver en Carnota e arredores', en: 'Guide: What to see in Carnota & surroundings', fr: 'Guide : Que voir à Carnota et ses environs', de: 'Reiseführer: Sehenswürdigkeiten in Carnota', it: 'Guida: Cosa vedere a Carnota e dintorni', pt: 'Guia: O que ver em Carnota e arredores' },
  'gastronomy.explore.carnota.desc': { es: '8 visitas imprescindibles para planificar tu itinerario por la Costa da Morte.', gl: '8 visitas esenciais para planificar o teu itinerario pola Costa da Morte.', en: '8 essential sights to plan your itinerary around Costa da Morte.', fr: '8 visites incontournables pour planifier votre itinéraire sur la Costa da Morte.', de: '8 unverzichtbare Sehenswürdigkeiten für Ihre Route an der Costa da Morte.', it: '8 tappe imperdibili per pianificare il tuo itinerario nella Costa da Morte.', pt: '8 visitas essenciais para planear o seu roteiro pela Costa da Morte.' },
  'gastronomy.stay.title': { es: 'Disfruta de la gastronomía gallega alojándote junto al mar', gl: 'Gosa da gastronomía galega aloxándote xunto ao mar', en: 'Enjoy Galician gastronomy staying by the sea', fr: 'Savourez la gastronomie galicienne en séjournant en bord de mer', de: 'Genießen Sie die galizische Gastronomie direkt am Meer', it: 'Goditi la gastronomia galiziana soggiornando vicino al mare', pt: 'Desfrute da gastronomia galega hospedando-se junto ao mar' },
  'gastronomy.stay.desc': {
    es: 'Casa da Cuncheira se encuentra a pocos minutos de las mejores tabernas marineras de Lira y restaurantes de Carnota. Disfruta de pescado fresco y desconexión en una casa con todas las comodidades.',
    gl: 'Casa da Cuncheira atópase a poucos minutos das mellores tabernas mariñeiras de Lira e restaurantes de Carnota. Gosa de peixe fresco e desconexión nunha casa con todas as comodidades.',
    en: 'Casa da Cuncheira is located just minutes from Lira\'s best seaside taverns and Carnota\'s top restaurants. Enjoy fresh seafood and relaxation in a fully equipped home.',
    fr: 'Casa da Cuncheira est située à quelques minutes des meilleures tavernes de Lira et restaurants de Carnota. Profitez du poisson frais et de la détente.',
    de: 'Casa da Cuncheira liegt nur wenige Minuten von den besten Tavernen in Lira und Restaurants in Carnota entfernt. Genießen Sie frischen Fisch und Erholung.',
    it: 'Casa da Cuncheira si trova a pochi minuti dalle migliori taverne di Lira e ristoranti di Carnota. Goditi pesce fresco e relax.',
    pt: 'Casa da Cuncheira fica a poucos minutos das melhores tabernas de Lira e restaurantes de Carnota. Desfrute de peixe fresco e descanso.'
  },

  'location.fisterra.title': { es: 'Cabo Fisterra (Finisterre)', gl: 'Cabo Fisterra', en: 'Cape Finisterre', fr: 'Cap Finisterre', de: 'Kap Finisterre', it: 'Capo Finisterre', pt: 'Cabo Finisterra' },
  'location.fisterra.desc': { es: 'El legendario fin del mundo conocido, su faro de 1853 y atardeceres sobre el océano infinito', gl: 'O lendario fin do mundo coñecido, o seu faro de 1853 e solpores sobre o océano infinito', en: 'The legendary end of the known world, its 1853 lighthouse, and sunsets over the infinite ocean', fr: 'Le bout du monde légendaire, son phare de 1853 et couchers de soleil sur l\'océan', de: 'Das legendäre Ende der bekannten Welt, sein Leuchtturm von 1853 und Sonnenuntergänge', it: 'La leggendaria fine del mondo conosciuto, il faro del 1853 e tramonti sull\'oceano', pt: 'O lendário fim do mundo conhecido, o seu farol de 1853 e pores do sol sobre o oceano' },
  'location.fisterra.longDesc': {
    es: `Durante siglos, Cabo Fisterra fue considerado el fin del mundo conocido y continúa siendo uno de los lugares más simbólicos y magnéticos de la costa atlántica gallega. Para los romanos era el "Finis Terrae", el mítico confín donde cada tarde el sol se sumergía en las aguas del océano ignoto.

Fisterra y Finisterre: Tradición y toponimia
En Galicia y a nivel oficial el nombre propio es Cabo Fisterra, mientras que tradicionalmente en castellano se conoce como Cabo Finisterre. Ambas denominaciones hacen referencia a la misma esencia de frontera mística y geográfica entre la tierra y el mar abierto.

El Faro de 1853 y el Kilómetro Cero
• El Faro de Fisterra: Erigido en 1853 sobre un acantilado a 143 metros de altitud, su potente linterna guía a los navegantes a través de las aguas bravas de la Costa da Morte. En días de niebla cerrada, su sirena ("la vaca de Fisterra") avisa a las embarcaciones del peligro de los bajíos.
• Mojón del Km 0 del Camino de Santiago: Es el punto culminante de la prolongación jacobea hasta la costa, donde los peregrinos concluyen su viaje contemplando el horizonte infinito.

La experiencia de la puesta de sol
Presenciar el atardecer desde los riscos de granito del cabo, con la inmensidad del Atlántico y el juego de luces doradas sobre el mar, es uno de los momentos más memorables de Galicia.

Excursión desde Carnota y Lira
Situado a solo 35 minutos en coche desde Casa da Cuncheira bordeando la ría, la excursión a Fisterra se combina a la perfección con la visita a su puerto pesquero, la lonja, el castillo de San Carlos y sus tabernas marineras.`,
    gl: `Durante séculos, o Cabo Fisterra foi considerado o fin do mundo coñecido e continúa a ser un dos lugares máis simbólicos da costa atlántica galega.

Fisterra e Finisterre
Oficialmente coñecido en galego como Cabo Fisterra e en castelán como Cabo Finisterre, representa o mítico Finis Terrae dos romanos.

O Faro de 1853 e o Km 0
• O Faro de Fisterra: Construído en 1853 sobre un cantil a 143 metros sobre o mar.
• Fito do Km 0: Punto final da prolongación xacobea dende Santiago de Compostela.

Solpores atlánticos
Contemplar a posta de sol sobre o océano dende as rochas do cabo é unha experiencia inesquecible a só 35 minutos de Casa da Cuncheira.`,
    en: `For centuries, Cape Finisterre was considered the end of the known world and remains one of the most symbolic and magnetic landmarks on the Atlantic coast. To the Romans, it was the "Finis Terrae," where the sun sank every evening into the uncharted ocean.

Finisterre & Fisterra: Two Names, One Legend
Officially named Cabo Fisterra in Galician and traditionally Cape Finisterre in Spanish, both names evoke the same mystical boundary between land and sea.

The 1853 Lighthouse & Kilometer 0
• The Lighthouse: Built in 1853 upon cliffs 143 meters above sea level to guide mariners through the treacherous waters of Costa da Morte.
• Kilometer 0 Marker: The ultimate destination for Way of St. James pilgrims continuing beyond Santiago to reach the ocean's edge.

Unforgettable Atlantic Sunsets
Watching the sunset from the granite cliffs, overlooking the vast open ocean, is one of Galicia's most breathtaking experiences, located just 35 minutes from Casa da Cuncheira.`,
    fr: `Pendant des siècles, le cap Finisterre a été considéré comme la fin du monde connu (« Finis Terrae ») et demeure l'un des lieux les plus symboliques de la côte atlantique.

Le Phare de 1853 et la Borne du Km 0
• Le Phare du Finisterre : Érigé en 1853 sur une falaise à 143 mètres d'altitude, guidant les marins le long de la Costa da Morte.
• Borne du Km 0 du Chemin de Compostelle : Point final de la prolongation jacquaire où les pèlerins viennent contempler l'océan infini.

L'expérience du coucher de soleil
Assister au coucher du soleil depuis les falaises de granit sur l'immensité de l'océan est un moment inoubliable, à seulement 35 minutes de Casa da Cuncheira.`,
    de: `Jahrhundertelang galt das Kap Finisterre als das Ende der bekannten Welt („Finis Terrae“) und bleibt einer der magischsten Orte Galiciens.

Der Leuchtturm von 1853 und der Kilometer 0
• Der Leuchtturm von Finisterre: 1853 auf einer 143 Meter hohen Klippe erbaut, um Schiffe an der Costa da Morte zu leiten.
• Km-0-Meilenstein des Jakobswegs: Der symbolische Endpunkt der Pilgerreise mit Blick auf den endlosen Atlantik.

Das Erlebnis des Sonnenuntergangs
Der Sonnenuntergang über dem offenen Ozean von den Granitfelsen aus ist ein unvergessliches Erlebnis, nur 35 Autominuten von Casa da Cuncheira entfernt.`,
    it: `Per secoli, Capo Finisterre è stato considerato la fine del mondo conosciuto («Finis Terrae») ed è tuttora uno dei luoghi più emblematici della Galizia.

Il Faro del 1853 e il Chilometro 0
• Il Faro di Finisterre: Eretto nel 1853 su una scogliera a 143 metri di quota sopra la Costa da Morte.
• Cippo del Km 0 del Cammino di Santiago: Il punto culminante dove i pellegrini concludono il viaggio guardando l'orizzonte.

La magia del tramonto
Ammirare il tramonto dalle rocce granitiche a picco sull'oceano è un'esperienza imperdibile, a soli 35 minuti da Casa da Cuncheira.`,
    pt: `Durante séculos, o Cabo Fisterra foi considerado o fim do mundo conhecido («Finis Terrae») e continua a ser um dos lugares mais emblemáticos da costa atlântica.

O Farol de 1853 e o Quilómetro Zero
• O Farol de Fisterra: Construído em 1853 sobre uma falésia a 143 metros de altitude sobre a Costa da Morte.
• Marco do Km 0 do Caminho de Santiago: Ponto final da peregrinação jacobeia contemplando o oceano sem fim.

A experiência do pôr do sol
Assistir ao pôr do sol nas rochas de granito do cabo sobre o vasto Atlântico é inesquecível, a apenas 35 minutos da Casa da Cuncheira.`
  },
  'nature.fisterra.h1': { es: 'Faro de Finisterre', gl: 'Faro de Fisterra', en: 'Finisterre Lighthouse', fr: 'Phare du Finisterre', de: 'Leuchtturm von Finisterre', it: 'Faro di Finisterre', pt: 'Farol de Finisterra' },
  'nature.fisterra.h2': { es: 'Kilómetro 0 Camino Santiago', gl: 'Kilómetro 0 Camiño Santiago', en: 'Kilometer 0 Way of St. James', fr: 'Kilomètre 0 Chemin de Compostelle', de: 'Kilometer 0 Jakobsweg', it: 'Chilometro 0 Cammino di Santiago', pt: 'Quilómetro 0 Caminho de Santiago' },
  'nature.fisterra.h3': { es: 'Atardeceres Legendarios', gl: 'Atardeceres Lendarios', en: 'Legendary Sunsets', fr: 'Couchers de soleil Légendaires', de: 'Legendäre Sonnenuntergänge', it: 'Tramonti Leggendari', pt: 'Pôr do sol Lendário' },
  'common.back': { es: 'Volver al inicio', gl: 'Volver ao inicio', en: 'Back to home', fr: 'Retour à l\'accueil', de: 'Zurück zum Start', it: 'Torna alla home', pt: 'Voltar ao início' },
  'gastronomy.back': { es: 'Volver al inicio', gl: 'Volver ao inicio', en: 'Back to home', fr: 'Retour à l\'accueil', de: 'Zurück zum Start', it: 'Torna alla home', pt: 'Voltar ao início' },

  // Weather
  'weather.title': {
    es: 'El tiempo en la Costa da Morte',
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
    it: 'Radar in tempo reale e previsioni del tempo per pianificare il tuo soggiorno.',
    pt: 'Radar em tempo real e previsão meteorológica para planejar a sua estadia.'
  },
  'weather.loading': {
    es: 'Cargando radar meteorológico en tiempo real...',
    gl: 'Cargando radar meteorolóxico en tempo real...',
    en: 'Loading real-time weather radar...',
    fr: 'Chargement du radar météo en temps réel...',
    de: 'Echtzeit-Wetterradar wird geladen...',
    it: 'Caricamento del radar meteo in tempo reale...',
    pt: 'A carregar radar meteorológico em tempo real...'
  },
  'weather.title_iframe': {
    es: 'Previsión meteorológica de Lira y Carnota en Windy',
    gl: 'Previsión meteorolóxica de Lira e Carnota en Windy',
    en: 'Weather forecast for Lira and Carnota on Windy',
    fr: 'Prévisions météo pour Lira et Carnota sur Windy',
    de: 'Wettervorhersage für Lira und Carnota auf Windy',
    it: 'Previsioni meteo per Lira e Carnota su Windy',
    pt: 'Previsão meteorológica para Lira e Carnota no Windy'
  },
  'faq.title': {
    es: 'Preguntas frecuentes',
    gl: 'Preguntas frecuentes',
    en: 'Frequently Asked Questions',
    fr: 'Foire aux questions',
    de: 'Häufig gestellte Fragen',
    it: 'Domande frequenti',
    pt: 'Perguntas frequentes'
  },
  'faq.subtitle': {
    es: 'Todo lo que necesitas saber antes de reservar',
    gl: 'Todo o que precisas saber antes de reservar',
    en: 'Everything you need to know before booking',
    fr: 'Tout ce que vous devez savoir avant de réserver',
    de: 'Alles, was Sie vor der Buchung wissen müssen',
    it: 'Tutto quello che c\'è da sapere prima di prenotare',
    pt: 'Tudo o que precisa de saber antes de reservar'
  },
  'faq.access.q': {
    es: '¿Cómo es el acceso en coche y dónde se puede aparcar?',
    gl: 'Como é o acceso en coche e onde se pode aparcar?',
    en: 'How is car access and where can we park?',
    fr: 'Comment se fait l\'accès en voiture et où peut-on se garer ?',
    de: 'Wie ist die Zufahrt mit dem Auto und wo kann man parken?',
    it: 'Com\'è l\'accesso in auto e dove si può parcheggiare?',
    pt: 'Como é o acesso de carro e onde se pode estacionar?'
  },
  'faq.access.a': {
    es: 'Por las características del acceso, recomendamos dejar el vehículo en la carretera general AC-550 y continuar a pie hasta la casa por un sendero de aproximadamente 120 metros.\n\nEs posible acceder en coche hasta la vivienda, pero el camino es estrecho y cuenta con una curva cerrada, por lo que únicamente resulta adecuado para vehículos pequeños. Como referencia, vehículos de tamaño superior a un Volkswagen Polo pueden tener dificultades para realizar el acceso y las maniobras con comodidad.\n\nPor este motivo, la mayoría de nuestros huéspedes optan por aparcar junto a la carretera general y recorrer a pie el corto trayecto hasta la casa.',
    gl: 'Polas características do acceso, recomendamos deixar o vehículo na estrada xeral AC-550 e continuar a pé ata a casa por un sendeiro de aproximadamente 120 metros.\n\nÉ posible acceder en coche ata a vivenda, pero o camiño é estreito e conta cunha curva pechada, polo que unicamente resulta adecuado para vehículos pequenos. Como referencia, vehículos de tamaño superior a un Volkswagen Polo poden ter dificultades para realizar o acceso e as maniobras con comodidade.\n\nPor este motivo, a maioría dos nosos hóspedes optan por aparcar xunto á estrada xeral e percorrer a pé o curto traxecto ata a casa.',
    en: 'Due to the characteristics of the access road, we recommend leaving your vehicle on the main AC-550 road and walking the remaining 120 meters along the footpath to the house.\n\nIt is possible to reach the property by car, but the lane is narrow with a sharp bend, making it suitable only for small vehicles. As a guide, cars larger than a Volkswagen Polo may experience difficulties accessing and maneuvering comfortably.\n\nFor this reason, most of our guests choose to park by the main road and enjoy the short walk to the house.',
    fr: 'En raison des particularités de l\'accès, nous vous recommandons de garer votre véhicule sur la route principale AC-550 et de continuer à pied jusqu\'à la maison par un sentier d\'environ 120 mètres.\n\nL\'accès en voiture jusqu\'à la maison est possible, mais le chemin est étroit avec un virage serré, convenant uniquement aux petits véhicules. À titre indicatif, les voitures plus grandes qu\'une Volkswagen Polo peuvent rencontrer des difficultés pour manœuvrer facilement.\n\nC\'est pourquoi la plupart de nos clients préfèrent se garer près de la route principale et faire le court trajet à pied.',
    de: 'Aufgrund der Besonderheiten der Zufahrt empfehlen wir, das Fahrzeug an der Hauptstraße AC-550 abzustellen und die letzten ca. 120 Meter zu Fuß über den Pfad zum Haus zu gehen.\n\nEine Zufahrt mit dem Auto bis zum Haus ist möglich, der Weg ist jedoch eng mit einer scharfen Kurve und nur für Kleinwagen geeignet. Als Richtwert: Fahrzeuge, die größer als ein VW Polo sind, können Schwierigkeiten beim Befahren und Rangieren haben.\n\nAus diesem Grund parken die meisten unserer Gäste an der Hauptstraße und gehen das kurze Stück zu Fuß zum Haus.',
    it: 'A causa delle caratteristiche dell\'accesso, consigliamo di lasciare l\'auto sulla strada principale AC-550 e proseguire a piedi fino alla casa attraverso un sentiero di circa 120 metri.\n\nÈ possibile arrivare in auto fino all\'abitazione, ma la strada è stretta con una curva a gomito ed è adatta solo a veicoli piccoli. Come riferimento, auto più grandi di una Volkswagen Polo potrebbero avere difficoltà a transitare e manovrare comodamente.\n\nPer questo motivo, la maggior parte dei nostri ospiti preferisce parcheggiare lungo la strada principale e fare a piedi il breve tragitto fino alla casa.',
    pt: 'Devido às características do acesso, recomendamos deixar o veículo na estrada principal AC-550 e continuar a pé até à casa por um caminho de cerca de 120 metros.\n\nÉ possível aceder de carro até à habitação, mas o caminho é estreito e tem uma curva apertada, sendo apenas adequado para veículos pequenos. Como referência, carros maiores que um Volkswagen Polo podem ter dificuldades de acesso e manobra com comodidade.\n\nPor esta razão, a maioria dos nossos hóspedes prefere estacionar junto à estrada principal e fazer a pé o curto percurso até à casa.'
  },
  'faq.q1': {
    es: '¿Cuál es la política de cancelación?',
    gl: 'Cal é a política de cancelación?',
    en: 'What is the cancellation policy?',
    fr: 'Quelle est la politique d\'annulation?',
    de: 'Wie sehen die Stornierungsbedingungen aus?',
    it: 'Qual è la politica di cancellazione?',
    pt: 'Qual é a política de cancelamento?'
  },
  'faq.a1': {
    es: 'Para consultar nuestra política de cancelación, revisa las condiciones disponibles en nuestra página de reservas: [Consultar condiciones y reservar](/booking).',
    gl: 'Para consultar a nosa política de cancelación, revisa as condicións dispoñibles na nosa páxina de reservas: [Consultar condicións e reservar](/booking).',
    en: 'To view our cancellation policy, please check the terms and conditions on our booking page: [View terms & book online](/booking).',
    fr: 'Pour consulter notre politique d\'annulation, veuillez vérifier les conditions disponibles sur notre page de réservation : [Consulter les conditions et réserver](/booking).',
    de: 'Unsere Stornierungsbedingungen finden Sie direkt auf unserer Buchungsseite: [Bedingungen einsehen & buchen](/booking).',
    it: 'Per consultare la nostra politica di cancellazione, verifica i termini disponibili sulla nostra pagina di prenotazione: [Consulta le condizioni e prenota](/booking).',
    pt: 'Para consultar a nossa política de cancelamento, consulte as condições disponíveis na nossa página de reservas: [Consultar condições e reservar](/booking).'
  },
  'faq.q2': {
    es: '¿Se admiten mascotas?',
    gl: 'Admítense mascotas?',
    en: 'Are pets allowed?',
    fr: 'Les animaux sont-ils acceptés?',
    de: 'Sind Haustiere erlaubt?',
    it: 'Sono ammessi animali domestici?',
    pt: 'Animais de estimação são permitidos?'
  },
  'faq.a2': {
    es: 'No admitimos mascotas en el alojamiento.',
    gl: 'Non admitimos mascotas no aloxamento.',
    en: 'Pets are not allowed in the accommodation.',
    fr: 'Les animaux ne sont pas admis dans l\'établissement.',
    de: 'Haustiere sind in der Unterkunft nicht gestattet.',
    it: 'Non sono ammessi animali domestici nella struttura.',
    pt: 'Não são permitidos animais de estimação no alojamento.'
  },
  'faq.q3': {
    es: '¿Hay WiFi y qué velocidad tiene?',
    gl: 'Hai WiFi e que velocidade ten?',
    en: 'Is there WiFi and what is the speed?',
    fr: 'Y a-t-il du WiFi et quelle est sa vitesse?',
    de: 'Gibt es WLAN und wie schnell ist es?',
    it: 'C\'è il WiFi e che velocità ha?',
    pt: 'Existe WiFi e qual é a velocidade?'
  },
  'faq.a3': {
    es: 'Sí, la casa tiene WiFi mediante conexión por antena de telefonía 5G, perfecta para trabajar en remoto o disfrutar de entretenimiento.',
    gl: 'Si, a casa ten WiFi mediante conexión por antena de telefonía 5G, perfecta para traballar en remoto ou gozar de entretemento.',
    en: 'Yes, the house has WiFi via a 5G cellular antenna connection, perfect for remote work or enjoying entertainment.',
    fr: 'Oui, la maison dispose d\'une connexion WiFi via antenne de téléphonie 5G, parfaite pour le télétravail ou les loisirs.',
    de: 'Ja, das Haus verfügt über WLAN über eine 5G-Mobilfunkantenne, perfekt für mobiles Arbeiten oder Streaming.',
    it: 'Sì, la casa dispone di WiFi tramite connessione con antenna di telefonia 5G, perfetta per il lavoro a distanza o per il tempo libero.',
    pt: 'Sim, a casa dispõe de WiFi mediante ligação por antena de telefonia 5G, perfeita para trabalho remoto ou lazer.'
  },
  'faq.q4': {
    es: '¿A qué distancia está la playa?',
    gl: 'A que distancia está a praia?',
    en: 'How far is the beach?',
    fr: 'À quelle distance se trouve la plage?',
    de: 'Wie weit ist der Strand entfernt?',
    it: 'Quanto dista la spiaggia?',
    pt: 'A que distância fica a praia?'
  },
  'faq.a4': {
    es: 'Las espectaculares playas de **Carnota y Louro** están a solo 10 minutos en coche, mientras que las playas locales de **Cancelo, Cons y Mar de Lira** se encuentran a unos 10/15 minutos a pie. Además, en un radio de 15-20 minutos en coche encontrarás muchas otras calas y playas increíbles por descubrir.',
    gl: 'As espectaculares praias de **Carnota e Louro** están a só 10 minutos en coche, mentres que as praias locais de **Cancelo, Cons e Mar de Lira** atópanse a uns 10/15 minutos a pé. Ademais, nun raio de 15-20 minutos en coche atoparás moitas outras calas e praias incribles por descubrir.',
    en: 'The spectacular beaches of **Carnota and Louro** are just 10 minutes away by car, while the local beaches of **Cancelo, Cons, and Mar de Lira** are within a 10–15 minute walk. In addition, within a 15–20 minute drive you will discover many other breathtaking coves and beaches.',
    fr: 'Les superbes plages de **Carnota et Louro** se trouvent à seulement 10 minutes en voiture, tandis que les plages locales de **Cancelo, Cons et Mar de Lira** sont accessibles en 10 à 15 minutes à pied. De plus, à 15-20 minutes en voiture, vous découvrirez de nombreuses autres criques magnifiques.',
    de: 'Die spektakulären Strände von **Carnota und Louro** sind nur 10 Autominuten entfernt, während die örtlichen Buchten **Cancelo, Cons und Mar de Lira** in etwa 10–15 Gehminuten erreichbar sind. Im Umkreis von 15–20 Autominuten gibt es zudem viele weitere traumhafte Buchten zu entdecken.',
    it: 'Le spettacolari spiagge di **Carnota e Louro** si trovano a soli 10 minuti di auto, mentre le spiagge locali di **Cancelo, Cons e Mar de Lira** sono a circa 10-15 minuti a piedi. Inoltre, nel raggio di 15-20 minuti di auto troverai molte altre splendide calette.',
    pt: 'As espectaculares praias de **Carnota e Louro** ficam a apenas 10 minutos de carro, enquanto as praias locais de **Cancelo, Cons e Mar de Lira** se encontram a cerca de 10/15 minutos a pé. Além disso, num raio de 15-20 minutos de carro encontrará muitas outras enseadas e praias incríveis para descobrir.'
  },
  'faq.q5': {
    es: '¿Hay supermercados cerca?',
    gl: 'Hai supermercados preto?',
    en: 'Are there supermarkets nearby?',
    fr: 'Y a-t-il des supermarchés à proximité?',
    de: 'Gibt es Supermärkte in der Nähe?',
    it: 'Ci sono supermercati nelle vicinanze?',
    pt: 'Existen supermercados por perto?'
  },
  'faq.a5': {
    es: 'Sí, en Carnota (a menos de 10 minutos en coche) y en Muros (a unos 15-20 minutos), encontrarás supermercados, farmacias y todo lo necesario para tu estancia. Además, en Lira hay varias tiendas de comestibles y panaderías locales con productos frescos y de proximidad. Para compras más grandes, en Cee encontrarás también hipermercados y una amplia variedad de comercios y servicios.',
    gl: 'Si, en Carnota (a menos de 10 minutos en coche) e en Muros (a uns 15-20 minutos), atoparás supermercados, farmacias e todo o necesario para a túa estancia. Ademais, en Lira hai varias tendas de comestibles e panadarías locais con produtos frescos e de proximidade. Para compras máis grandes, en Cee atoparás tamén hipermercados e unha ampla variedade de comercios e servizos.',
    en: 'Yes, in Carnota (under 10 minutes by car) and Muros (about 15–20 minutes), you will find supermarkets, pharmacies, and everything you need for your stay. In addition, in Lira there are several local grocery shops and bakeries with fresh, local produce. For larger shopping trips, in Cee you will also find hypermarkets and a wide range of shops and services.',
    fr: 'Oui, à Carnota (à moins de 10 minutes en voiture) et à Muros (à environ 15-20 minutes), vous trouverez des supermarchés, des pharmacies et tout le nécessaire pour votre séjour. De plus, à Lira, il y a plusieurs épiceries et boulangeries locales avec des produits frais de proximité. Pour les achats plus importants, vous trouverez également des hypermarchés et de nombreux commerces à Cee.',
    de: 'Ja, in Carnota (unter 10 Autominuten) und in Muros (ca. 15–20 Minuten) finden Sie Supermärkte, Apotheken und alles, was Sie für Ihren Aufenthalt benötigen. Außerdem gibt es in Lira mehrere örtliche Lebensmittelgeschäfte und Bäckereien mit frischen regionalen Produkten. Für größere Einkäufe finden Sie in Cee auch Hypermärkte und vielfältige Geschäfte.',
    it: 'Sì, a Carnota (a meno di 10 minuti di auto) e a Muros (a circa 15-20 minuti), troverai supermercati, farmacie e tutto il necessario per il tuo soggiorno. Inoltre, a Lira ci sono diversi negozi di alimentari e panetterie locali con prodotti freschi e a km 0. Per acquisti più grandi, a Cee troverai anche ipermercati e un\'ampia scelta di negozi e servizi.',
    pt: 'Sim, em Carnota (a menos de 10 minutos de carro) e em Muros (a cerca de 15-20 minutos), encontrará supermercados, farmácias e tudo o que é necessário para a sua estadia. Além disso, em Lira existem várias mercearias e padarias locais com produtos frescos e de proximidade. Para compras maiores, em Cee encontrará também hipermercados e uma grande variedade de comércio e serviços.'
  },
  'faq.q6': {
    es: '¿Es necesario coche?',
    gl: 'É necesario coche?',
    en: 'Is a car necessary?',
    fr: 'Une voiture est-elle nécessaire?',
    de: 'Ist ein Auto notwendig?',
    it: 'È necessaria l\'auto?',
    pt: 'É necessário carro?'
  },
  'faq.a6': {
    es: 'Sí, recomendamos tener coche para explorar la zona cómodamente, aunque también hay opciones de transporte local.',
    gl: 'Si, recomendamos ter coche para explorar a zona comodamente, aínda que tamén hai opcións de transporte local.',
    en: 'Yes, we recommend having a car to explore the area comfortably, although there are also local transport options.',
    fr: 'Oui, nous recommandons d\'avoir une voiture pour explorer la région confortablement, bien qu\'il existe également des options de transport local.',
    de: 'Ja, wir empfehlen ein Auto, um die Gegend bequem zu erkunden, obwohl es auch lokale Verkehrsmittel gibt.',
    it: 'Sì, consigliamo di avere un\'auto per esplorare comodamente la zona, anche se ci sono opzioni di trasporto locale.',
    pt: 'Sim, recomendamos ter um carro para explorar a área confortavelmente, embora também existam opções de transporte local.'
  },
  'faq.q7': {
    es: '¿La casa tiene aire acondicionado y calefacción?',
    gl: 'A casa ten aire acondicionado e calefacción?',
    en: 'Does the house have air conditioning and heating?',
    fr: 'La maison dispose-t-elle de la climatisation et du chauffage ?',
    de: 'Verfügt das Haus über Klimaanlage und Heizung?',
    it: 'La casa dispone di aria condizionata e riscaldamento?',
    pt: 'A casa tem ar condicionado e aquecimento?'
  },
  'faq.a7': {
    es: 'Sí, la casa cuenta con un sistema de climatización frío/calor, que proporciona tanto aire acondicionado como calefacción, para garantizar una temperatura agradable y el máximo confort en cualquier época del año.',
    gl: 'Si, a casa conta cun sistema de climatización frío/calor, que proporciona tanto aire acondicionado como calefacción, para garantir unha temperatura agradable e o máximo confort en calquera época do ano.',
    en: 'Yes, the house features a dual cooling/heating climate control system, providing both air conditioning and heating to ensure a pleasant temperature and maximum comfort all year round.',
    fr: 'Oui, la maison dispose d\'un système de climatisation réversible chaud/froid, offrant à la fois climatisation et chauffage, pour garantir une température idéale et un confort optimal en toute saison.',
    de: 'Ja, das Haus verfügt über eine moderne Warm-/Kalt-Klimaanlage, die sowohl kühlt als auch heizt, um zu jeder Jahreszeit eine angenehme Wohlfühltemperatur zu gewährleisten.',
    it: 'Sì, la casa dispone di un sistema di climatizzazione reversibile caldo/freddo, che fornisce sia aria condizionata che riscaldamento, per garantire il massimo comfort in qualsiasi periodo dell\'anno.',
    pt: 'Sim, a casa dispõe de um sistema de climatização quente/frio, que proporciona tanto ar condicionado como aquecimento, garantindo uma temperatura agradável e o máximo conforto em qualquer época do ano.'
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
