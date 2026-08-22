import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/nature/que-ver-en-carnota',
    title: 'Qué ver en Carnota y Lira: 8 Lugares Imprescindibles | Casa da Cuncheira',
    description: 'Guía esencial con los 8 lugares que ver en Carnota y alrededores: Playa de Carnota, Hórreo de Carnota, Lira, Monte Pindo, Ézaro y Monte Louro.',
    h1: 'Qué ver en Carnota y Costa da Morte: Los 8 imprescindibles',
    content: `
      <h2>Los 8 mejores lugares para visitar en Carnota y sus alrededores</h2>
      <p>El municipio de Carnota y su comarca concentran algunos de los parajes naturales y monumentos etnográficos más espectaculares de Galicia:</p>
      <ol>
        <li><strong><a href="/nature/praia-carnota">Playa de Carnota y Boca do Río:</a></strong> Más de 7 km de arena blanca virgen con lagunas y piscinas naturales que se forman durante la bajamar.</li>
        <li><strong>Hórreo de Carnota:</strong> Monumento Nacional del siglo XVIII con 34.7 metros de longitud sustentado sobre 22 pares de pies.</li>
        <li><strong><a href="/nature/lira-carnota">Hórreo y Parroquia de Lira:</a></strong> Su hórreo monumental de casi 37 metros y el pueblo marinero tradicional.</li>
        <li><strong><a href="/nature/lira-carnota">Puerto de Portocubelo y Calas de Lira:</a></strong> El puerto pesquero artesanal y las aguas tranquilas de Praia de Cons.</li>
        <li><strong><a href="/nature/monte-pindo">Monte Pindo y cumbre de A Moa (627 m):</a></strong> El mítico Olimpo Celta de granito rosado con vistas de 360 grados sobre el Atlántico.</li>
        <li><strong><a href="/nature/fervenza-do-ezaro">Fervenza do Ézaro:</a></strong> La única cascada de Europa continental que se precipita directamente al mar.</li>
        <li><strong><a href="/nature/monte-louro">Monte Louro y Playa de Area Maior:</a></strong> Espacio protegido con sistema dunar y la laguna litoral de As Xarfas.</li>
        <li><strong>Casco histórico de Muros:</strong> Villa marinera medieval con calles porticadas de piedra y tabernas tradicionales.</li>
      </ol>
      <p><a href="/">Alojamiento en Casa da Cuncheira (Lira, Carnota)</a> | <a href="https://bookonline.pro/es/property/350327">Consultar disponibilidad y reserva directa</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/carnota_horreo.webp'
  },
  {
    path: '/nature/lira-carnota',
    title: 'Lira y Puerto de Portocubelo (Carnota): Guía Marinera | Casa da Cuncheira',
    description: 'Descubre Lira en Carnota: el puerto pesquero de Portocubelo, la reserva marina Os Miñarzos, la cala de Praia de Cons y el hórreo monumental de Lira.',
    h1: 'Lira y Portocubelo: Autenticidad marinera en Carnota',
    content: `
      <h2>Pueblo marinero, pesca artesanal y calas resguardadas</h2>
      <p>Lira es una de las parroquias marineras más auténticas de la Costa da Morte, resguardada de los vientos del norte y con una rica tradición pesquera artesanal.</p>
      <h3>Puerto de Portocubelo y Reserva Marina Os Miñarzos</h3>
      <p>El puerto de Portocubelo es el corazón marinero de Lira, pionero en la creación de la Reserva Marina de Interés Pesquero "Os Miñarzos" para la protección del pulpo y pescados de roca.</p>
      <h3>Calas de Lira: Praia de Cons y Praia do Cancelo</h3>
      <p>Praia de Cons ofrece arena dorada y aguas tranquilas protegidas del mar abierto, ideal para el baño y el relax a pocos minutos a pie de los alojamientos locales.</p>
      <h3>El Hórreo Monumental de Lira</h3>
      <p>Con casi 37 metros de largo y 22 pares de pies de piedra, rivaliza históricamente en tamaño y belleza con el hórreo de Carnota.</p>
      <p><a href="/">Casa da Cuncheira: Tu casa en Lira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar online</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/house/moa_beach.webp'
  },
  {
    path: '/gastronomy',
    title: 'Dónde comer en Carnota y Lira: Restaurantes y Gastronomía | Casa da Cuncheira',
    description: 'Guía de los mejores restaurantes en Lira, Carnota y la ría de Muros. Pescados y mariscos frescos, cocina tradicional gallega y recomendaciones locales.',
    h1: 'Gastronomía gallega: Dónde comer en Lira y Carnota',
    content: `
      <h2>Restaurantes recomendados en Lira, Carnota y alrededores</h2>
      <p>Descubre la auténtica gastronomía de la Costa da Morte y la Ría de Muros e Noia. Pescados de roca salvajes, pulpo de la reserva marina Os Miñarzos y mariscos de lonja:</p>
      <ul>
        <li><strong>Mar da Morosa (Portocubelo, Lira):</strong> Cocina creativa gallega con pescados frescos y vistas al puerto de Lira.</li>
        <li><strong>A Chalana de Rucho (Lira):</strong> Pescados del día a la brasa y mariscos de la lonja.</li>
        <li><strong>O Cuberto (Carnota):</strong> Gastronomía tradicional gallega y carnes de primera calidad.</li>
        <li><strong>O Moncho Burger (Carnota):</strong> Hamburguesas gourmet y ambiente informal.</li>
        <li><strong>A Xouba (Muros):</strong> Taberna marinera en el casco histórico de Muros.</li>
        <li><strong>Restaurante San Francisco (Louro, Muros):</strong> Arroces marineros y mariscos junto a la playa.</li>
      </ul>
      <p><a href="/">Volver a Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar estancia</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/gastronomy_hero.png'
  },
  {
    path: '/nature/praia-carnota',
    title: 'Playa de Carnota y Boca do Río: Guía completa | Casa da Cuncheira',
    description: 'Descubre la Playa de Carnota, el arenal más largo de Galicia con más de 7 km de arena blanca, dunas protegidas y las piscinas naturales de Boca do Río.',
    h1: 'Playa de Carnota y Boca do Río: Naturaleza virgen en Galicia',
    content: `
      <h2>El arenal más extenso de Galicia</h2>
      <p>Con más de 7 kilómetros de longitud, la Playa de Carnota es un espacio protegido dentro de la Red Natura 2000 que combina dunas vírgenes, marismas y aguas cristalinas.</p>
      <h3>Boca do Río: Piscinas naturales</h3>
      <p>En la desembocadura del río Valdebois (Boca do Río), las mareas bajas forman lagunas y piscinas naturales de agua templada y arena finísima, perfectas para el baño.</p>
      <h3>Sectores y accesos</h3>
      <p>Accesos acondicionados desde Caldebarcos (norte), Boca do Río (centro) con pasarelas de madera y aparcamiento, y Cancelo / Lira (sur).</p>
      <p><a href="/">Alojamiento en Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Consultar disponibilidad</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/carnota_beach_optimized.webp'
  },
  {
    path: '/nature/monte-pindo',
    title: 'Monte Pindo y Cumbre de A Moa: Ruta y Guía | Casa da Cuncheira',
    description: 'Ruta de senderismo al Monte Pindo, el mítico Olimpo Celta de Galicia, hasta la cumbre de A Moa (627 m) con vistas panorámicas a Carnota y Finisterre.',
    h1: 'Monte Pindo: El Olimpo Celta y la cumbre de A Moa',
    content: `
      <h2>Senderismo en el gigante de granito de la Costa da Morte</h2>
      <p>El Monte Pindo es un macizo granítico legendario (627 m) lleno de formaciones rocosas míticas, historias y una biodiversidad única.</p>
      <h3>Rutas de subida a A Moa</h3>
      <p>Desde O Fieiro (4.5 km ida/vuelta, 300 m desnivel, 2-2.5 h) o desde el pueblo costero de O Pindo (9.5 km, 600 m desnivel, 4-4.5 h). Vistas panorámicas de 360 grados sobre toda la Playa de Carnota y Fisterra.</p>
      <h3>Consejos de seguridad</h3>
      <p>Calzado de montaña con buen agarre, agua suficiente (no hay fuentes en la cumbre) y evitar días de niebla cerrada o lluvia sobre la roca resbaladiza.</p>
      <p><a href="/">Descubre Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar alojamiento</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/moa_view_optimized.webp'
  },
  {
    path: '/nature/monte-louro',
    title: 'Monte Louro, Playa de Area Maior y Laguna de As Xarfas | Casa da Cuncheira',
    description: 'Guía para visitar Monte Louro, la salvaje playa de Area Maior y la laguna protegida de As Xarfas en la entrada de la ría de Muros e Noia.',
    h1: 'Monte Louro, Playa de Area Maior y Laguna de As Xarfas',
    content: `
      <h2>Un enclave paisajístico excepcional en la ría de Muros</h2>
      <p>Monte Louro (241 m) es una pirámide granítica que custodia la entrada de la ría de Muros. A sus pies se extienden la salvaje playa de Area Maior y el ecosistema dunar-lacustre protegido de As Xarfas.</p>
      <p><a href="/">Alojarse en Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar estancia</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/monte_louro_optimized.webp'
  },
  {
    path: '/nature/fervenza-do-ezaro',
    title: 'Fervenza do Ézaro y Mirador: Cascada al Mar | Casa da Cuncheira',
    description: 'Descubre la Fervenza do Ézaro en Dumbría, la única cascada de Europa continental que desemboca directamente en el océano Atlántico, y su mirador.',
    h1: 'Fervenza do Ézaro: La cascada que desemboca en el océano',
    content: `
      <h2>Espectáculo natural único en Europa</h2>
      <p>El río Xallas se precipita en una espectacular caída de más de 40 metros directamente al mar en la ensenada de Ézaro, a solo 15 minutos de Casa da Cuncheira.</p>
      <h3>Fervenza a nivel del mar vs Mirador do Ézaro</h3>
      <p>Pasarelas de madera llanas junto al puerto para ver la caída del agua y subida al Mirador do Ézaro para disfrutar de vistas panorámicas a toda la ría.</p>
      <p><a href="/">Volver a Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar casa vacacional</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/ezaro.webp'
  },
  {
    path: '/nature/cabo-finisterre',
    title: 'Cabo Fisterra (Finisterre) y el Faro del Fin del Mundo | Casa da Cuncheira',
    description: 'Visita el mítico Cabo Fisterra (Finisterre) y su emblemático faro de 1853. El final del Camino de Santiago y los mejores atardeceres de la Costa da Morte.',
    h1: 'Cabo Fisterra (Finisterre): El mítico confín del mundo atlántico',
    content: `
      <h2>Donde la tierra termina y el sol se sumerge en el océano</h2>
      <p>Durante siglos, Cabo Fisterra fue considerado el fin del mundo conocido ("Finis Terrae") y continúa siendo uno de los lugares más magnéticos de Galicia.</p>
      <h3>El Faro de 1853 y el Kilómetro Cero</h3>
      <p>Erigido sobre un acantilado a 143 metros de altitud, alberga el mojón del Km 0 donde los peregrinos concluyen la prolongación jacobea mirando al Atlántico.</p>
      <p><a href="/">Casa da Cuncheira en Lira, Carnota</a> | <a href="https://bookonline.pro/es/property/350327">Reservar online</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/fisterra_optimized.webp'
  },
  {
    path: '/nature/atardeceres-magicos',
    title: 'Atardeceres Mágicos en la Costa da Morte | Casa da Cuncheira',
    description: 'Los mejores lugares para contemplar puestas de sol inolvidables en Carnota, Lira y la Costa da Morte desde Casa da Cuncheira.',
    h1: 'Atardeceres mágicos en el litoral atlántico de Galicia',
    content: `
      <h2>Las mejores puestas de sol de Galicia</h2>
      <p>Desde la terraza de Casa da Cuncheira o desde las playas de Lira y Carnota, los atardeceres sobre el Atlántico tiñen de dorado las rocas y el mar.</p>
      <p><a href="/">Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/fisterra_sunset_optimized.webp'
  },
  {
    path: '/nature/pueblos-marineros',
    title: 'Pueblos Marineros de la Ría de Muros y Carnota | Casa da Cuncheira',
    description: 'Descubre el encanto de las villas marineras gallegas: Lira, Portocubelo, Muros y Corcubión con su arquitectura tradicional y puertos pesqueros.',
    h1: 'Pueblos marineros con encanto: Lira, Muros y la ría',
    content: `
      <h2>Arquitectura tradicional y ambiente marinero</h2>
      <p>Calles empedradas, soportales, casas marineras y lonjas donde el pescado llega fresco cada tarde.</p>
      <p><a href="/">Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/muros_villages_optimized.webp'
  },
  {
    path: '/aviso-legal',
    title: 'Aviso Legal y Condiciones de Uso | Casa da Cuncheira',
    description: 'Información legal, registro oficial VUT-CO-002236 de Casa da Cuncheira (Lira, Carnota) y condiciones de uso del sitio web según la LSSI-CE.',
    h1: 'Aviso Legal y Condiciones de Uso',
    content: `
      <h2>Datos Identificativos del Titular y Registro Oficial</h2>
      <p>En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa de que Casa da Cuncheira es una vivienda de uso turístico con registro oficial <strong>VUT-CO-002236</strong> de la Xunta de Galicia, situada en Aldea Carballal 70, Lira (Carnota, A Coruña).</p>
      <p>Titular del dominio e inmueble: César Caamaño Beiro (53549213S) • casadacuncheira@gmail.com</p>
      <p>Gestión y Explotación: Hanno Gallinger (X0792551V, Lariño 318, Carnota) • faroinsua@gmail.com | Teléfono: +34 607 952 250</p>
      <p><a href="/">Volver a la página principal</a> | <a href="/privacidad">Política de Privacidad</a> | <a href="/cookies">Política de Cookies</a></p>
    `
  },
  {
    path: '/privacidad',
    title: 'Política de Privacidad y Protección de Datos | Casa da Cuncheira',
    description: 'Tratamiento de datos personales, bases jurídicas RGPD, registro oficial de huéspedes y ejercicio de derechos en Casa da Cuncheira.',
    h1: 'Política de Privacidad y Protección de Datos',
    content: `
      <h2>Tratamiento de Datos y Protección de la Privacidad (RGPD)</h2>
      <p>Información detallada sobre el tratamiento de datos personales de usuarios y huéspedes conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
      <p>Responsable Alojamiento y Reservas: Hanno Gallinger | Responsable Web y Cookies: César Caamaño Beiro (VUT-CO-002236, Lira, Carnota).</p>
      <p>Ejercicio de derechos: <a href="mailto:faroinsua@gmail.com">faroinsua@gmail.com</a> (Estancia) / <a href="mailto:casadacuncheira@gmail.com">casadacuncheira@gmail.com</a> (Web/Cookies)</p>
      <p><a href="/">Volver a la página principal</a> | <a href="/aviso-legal">Aviso Legal</a> | <a href="/cookies">Política de Cookies</a></p>
    `
  },
  {
    path: '/cookies',
    title: 'Política de Cookies | Casa da Cuncheira',
    description: 'Información sobre las cookies técnicas y analíticas de Casa da Cuncheira, tabla de almacenamiento real y panel de configuración.',
    h1: 'Política de Cookies',
    content: `
      <h2>Uso de Cookies y Almacenamiento Local</h2>
      <p>Información sobre las cookies técnicas estrictamente necesarias y cookies analíticas anónimas de Google Analytics según el artículo 22.2 de la LSSI-CE.</p>
      <p><a href="/">Volver a la página principal</a> | <a href="/aviso-legal">Aviso Legal</a> | <a href="/privacidad">Política de Privacidad</a></p>
    `
  }
];

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.warn('dist/index.html not found, skipping prerender.');
    return;
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  for (const route of routes) {
    const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const canonicalUrl = `https://www.casadacuncheira.com${route.path}`;

    let pageHtml = baseHtml;

    // Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace OpenGraph Title, Description, Image & URL
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    if (route.image) {
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image" content="${route.image}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:image" content="${route.image}" />`
      );
    }

    // Replace Twitter Title and Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // Insert Breadcrumb Schema into Head
    const breadcrumbSchema = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Casa da Cuncheira",
        "item": "https://www.casadacuncheira.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${route.title.split('|')[0].trim()}",
        "item": "${canonicalUrl}"
      }
    ]
  }
  </script>`;
    pageHtml = pageHtml.replace('</head>', `${breadcrumbSchema}\n</head>`);

    // Replace static fallback body content inside #root
    const fallbackBody = `
    <header style="padding: 20px; background-color: #1e293b; color: #ffffff;">
      <nav aria-label="Navegación">
        <a href="/" style="color: #ffffff; text-decoration: none; font-weight: bold; font-size: 1.25rem;">Casa da Cuncheira</a>
        <span style="margin: 0 10px;">|</span>
        <a href="/" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Inicio</a>
        <a href="/nature/que-ver-en-carnota" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Qué ver en Carnota</a>
        <a href="/nature/lira-carnota" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Lira</a>
        <a href="/gastronomy" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Gastronomía</a>
        <a href="/#house" style="color: #ffffff; text-decoration: none; margin: 0 10px;">La Casa</a>
        <a href="/#contact" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Contacto</a>
        <a href="https://bookonline.pro/es/property/350327" rel="noopener noreferrer" style="color: #ffffff; text-decoration: underline; margin-left: 15px;">Reservar</a>
      </nav>
    </header>

    <main style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #334155; padding: 40px 20px; max-width: 1000px; margin: 0 auto;">
      <article>
        <h1 style="font-size: 2.5rem; color: #0f172a; margin-bottom: 20px;">${route.h1}</h1>
        ${route.content}
      </article>
    </main>

    <footer style="padding: 20px; background-color: #1e293b; color: #94a3b8; text-align: center; margin-top: 40px;">
      <p>© 2026 Casa da Cuncheira. Alojamiento vacacional en Lira, Carnota (Costa da Morte).</p>
      <p style="margin-top: 8px;">
        <a href="/aviso-legal" style="color: #cbd5e1; margin: 0 8px;">Aviso Legal</a> |
        <a href="/privacidad" style="color: #cbd5e1; margin: 0 8px;">Política de Privacidad</a> |
        <a href="/cookies" style="color: #cbd5e1; margin: 0 8px;">Política de Cookies</a>
      </p>
    </footer>`;

    pageHtml = pageHtml.replace(
      /<div id="root">[\s\S]*?<\/div>/i,
      `<div id="root">${fallbackBody}</div>`
    );

    const outPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf8');
    console.log(`Prerendered: ${route.path} -> ${outPath}`);
  }

  console.log('✅ All routes successfully prerendered for static SEO hosting!');
}

prerender();
