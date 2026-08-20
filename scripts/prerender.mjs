import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/gastronomy',
    title: 'Dónde comer en Carnota y Lira: Restaurantes y Gastronomía | Casa da Cuncheira',
    description: 'Guía de los mejores restaurantes en Lira, Carnota y la ría de Muros. Pescados y mariscos frescos, cocina tradicional gallega y recomendaciones locales.',
    h1: 'Gastronomía gallega: Dónde comer en Lira y Carnota',
    content: `
      <h2>Restaurantes recomendados en Lira, Carnota y alrededores</h2>
      <p>Descubre la auténtica gastronomía de la Costa da Morte y la Ría de Muros e Noia. Desde las mejores marisquerías hasta taperías tradicionales:</p>
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
      <p>En la desembocadura del río Valdebois (Boca do Río), las mareas forman piscinas naturales de agua templada y arena finísima, ideales para el baño y el descanso familiar.</p>
      <h3>Patrimonio y hórreos de Carnota y Lira</h3>
      <p>Muy cerca del arenal se pueden visitar los monumentales hórreos de Carnota y Lira, joyas del patrimonio etnográfico gallego.</p>
      <p><a href="/">Alojamiento en Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Consultar disponibilidad</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/carnota_beach_optimized.webp'
  },
  {
    path: '/nature/monte-pindo',
    title: 'Monte Pindo y Pico de A Moa: Ruta y Guía | Casa da Cuncheira',
    description: 'Ruta de senderismo al Monte Pindo, el mítico Olimpo Celta de Galicia, hasta la cumbre de A Moa (627 m) con vistas panorámicas a Carnota y Finisterre.',
    h1: 'Monte Pindo: El Olimpo Celta y la cumbre de A Moa',
    content: `
      <h2>Senderismo en el gigante de granito de la Costa da Morte</h2>
      <p>El Monte Pindo es un macizo granítico legendario lleno de formaciones rocosas míticas, historias y una biodiversidad única.</p>
      <h3>Ruta a la cumbre de A Moa (627 m)</h3>
      <p>La subida hasta el punto más alto ofrece una de las panorámicas más impresionantes de toda Galicia: la Playa de Carnota completa, el Cabo Finisterre y el océano Atlántico.</p>
      <p><a href="/">Descubre Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar alojamiento</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/moa_view_optimized.webp'
  },
  {
    path: '/nature/monte-louro',
    title: 'Monte Louro y Laguna de Xarfas: Espacio Natural | Casa da Cuncheira',
    description: 'Guía para visitar Monte Louro, la playa de Area Maior y la laguna protegida de As Xarfas en la entrada de la ría de Muros e Noia.',
    h1: 'Monte Louro, Playa de Area Maior y Laguna de Xarfas',
    content: `
      <h2>Un enclave paisajístico excepcional</h2>
      <p>Monte Louro es una pirámide granítica que custodia la entrada de la ría de Muros. A sus pies se extienden la salvaje playa de Area Maior y el ecosistema dunar de la laguna de Xarfas.</p>
      <p><a href="/">Alojarse en Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar estancia</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/monte_louro_optimized.webp'
  },
  {
    path: '/nature/fervenza-do-ezaro',
    title: 'Fervenza do Ézaro (Cascada del Ézaro): Guía | Casa da Cuncheira',
    description: 'Descubre la Fervenza do Ézaro en Dumbría, la única cascada de Europa que desemboca directamente en el océano Atlántico.',
    h1: 'Fervenza do Ézaro: La cascada que desemboca en el mar',
    content: `
      <h2>Espectáculo único de la naturaleza</h2>
      <p>El río Xallas se precipita en una espectacular caída de más de 40 metros directamente al mar en la ensenada de Ézaro, a solo 15 minutos de Casa da Cuncheira.</p>
      <p><a href="/">Volver a Casa da Cuncheira</a> | <a href="https://bookonline.pro/es/property/350327">Reservar casa vacacional</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/ezaro.webp'
  },
  {
    path: '/nature/cabo-finisterre',
    title: 'Cabo Finisterre y el Fin del Mundo: Guía | Casa da Cuncheira',
    description: 'Visita el mítico Cabo Finisterre y su emblemático faro. El final del Camino de Santiago y los mejores atardeceres de la Costa da Morte.',
    h1: 'Cabo Finisterre: El mítico fin del mundo en la Costa da Morte',
    content: `
      <h2>Donde la tierra termina y empieza el océano</h2>
      <p>El Cabo Finisterre (Fisterra) ha fascinado a viajeros y peregrinos desde la antigüedad como el punto más occidental de Europa continental.</p>
      <p><a href="/">Casa da Cuncheira en Carnota</a> | <a href="https://bookonline.pro/es/property/350327">Reservar online</a></p>
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
    title: 'Aviso Legal, Privacidad y Cookies | Casa da Cuncheira',
    description: 'Información legal, política de privacidad, términos de uso y registro turístico oficial VUT-CO-002236 de Casa da Cuncheira (Lira, Carnota).',
    h1: 'Aviso Legal y Política de Privacidad',
    content: `
      <h2>Datos Identificativos del Titular y Registro Oficial</h2>
      <p>En cumplimiento de la LSSI-CE y el RGPD, se informa de que Casa da Cuncheira es una vivienda de uso turístico con registro oficial <strong>VUT-CO-002236</strong>, situada en Aldea Carballal 70, Lira (Carnota, A Coruña).</p>
      <p>Titular: César Caamaño Beiro | Gestión y Explotación: Hanno Gallinger (NIF: X0792551V)</p>
      <p>Contacto: <a href="mailto:casadacuncheira@gmail.com">casadacuncheira@gmail.com</a> | Teléfono: +34 607 952 250</p>
      <p><a href="/">Volver a la página principal de Casa da Cuncheira</a></p>
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
