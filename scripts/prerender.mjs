import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/booking',
    title: 'Reserva Directa en Casa da Cuncheira | Mejor Precio en Lira, Carnota',
    description: 'Reserva directamente tu estancia en Casa da Cuncheira (Lira, Carnota). Consulta disponibilidad en tiempo real, mejores tarifas sin comisiones y confirmación inmediata.',
    h1: 'Reserva Directa Oficial en Casa da Cuncheira (Lira, Carnota)',
    content: `
      <h2>Alojamiento vacacional oficial (VUT-CO-002236) en la Costa da Morte</h2>
      <p>Reserva tu estancia con el mejor precio garantizado y sin gastos de intermediarios ni comisiones de terceros en Casa da Cuncheira.</p>
      <h3>Ventajas de la reserva directa oficial:</h3>
      <ul>
        <li><strong>Mejor tarifa asegurada:</strong> Ahorra entre un 15% y un 20% respecto a plataformas como Booking o Airbnb.</li>
        <li><strong>Pago seguro y encriptado:</strong> Motor oficial de AvaiBook con protocolos bancarios seguros SSL.</li>
        <li><strong>Atención directa del anfitrión:</strong> Asistencia personalizada para tu viaje, rutas y recomendaciones gastronómicas locales.</li>
        <li><strong>Confirmación instantánea:</strong> Calendario sincronizado en tiempo real y recepción inmediata del bono de reserva.</li>
      </ul>
      <h3>Características del alojamiento:</h3>
      <p>Casa completa con capacidad para 6 huéspedes, 4 dormitorios, jardín privado con barbacoa y vistas al Atlántico, situada a solo 500 metros de la playa de Mar de Lira.</p>
      <p><a href="/">Inicio Casa da Cuncheira</a> | <a href="/gastronomy">Restaurantes en Lira y Carnota</a> | <a href="/nature/que-ver-en-carnota">Qué ver en Carnota</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/hero_optimized.webp'
  },
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
        <li><strong><a href="/nature/lira-carnota">Puerto de Portocubelo y Calas de Lira:</a></strong> El puerto pesquero artesanal y las calas naturales de Lira (Praia de Cons y Praia do Cancelo).</li>
        <li><strong><a href="/nature/monte-pindo">Monte Pindo y cumbre de A Moa (627 m):</a></strong> El mítico Olimpo Celta de granito rosado con vistas de 360 grados sobre el Atlántico.</li>
        <li><strong><a href="/nature/fervenza-do-ezaro">Fervenza do Ézaro:</a></strong> La única cascada de Europa continental que se precipita directamente al mar.</li>
        <li><strong><a href="/nature/monte-louro">Monte Louro y Playa de Area Maior:</a></strong> Espacio protegido con sistema dunar y la laguna litoral de As Xarfas.</li>
        <li><strong>Casco histórico de Muros:</strong> Villa marinera medieval con calles porticadas de piedra y tabernas tradicionales.</li>
      </ol>
      <h3>Vídeo: El Legado de Carnota (Concello de Carnota)</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 16px; margin: 25px 0;">
        <iframe src="https://www.youtube-nocookie.com/embed/e0uLM1qa0qk" title="Vídeo O Legado - Concello de Carnota" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p><a href="/">Alojamiento en Casa da Cuncheira (Lira, Carnota)</a> | <a href="/booking">Consultar disponibilidad y reserva directa</a></p>
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
      <p>Praia de Cons y Praia do Cancelo son pequeñas playas naturales y agrestes combinadas con formaciones rocosas («cons») y carácter atlántico, ideales para desconectar en un entorno virgen y tranquilo.</p>
      <h3>El Hórreo Monumental de Lira</h3>
      <p>Con casi 37 metros de largo y 22 pares de pies de piedra, rivaliza históricamente en tamaño y belleza con el hórreo de Carnota.</p>
      <p><a href="/">Casa da Cuncheira: Tu casa en Lira</a> | <a href="/booking">Reservar online</a></p>
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
        <li><strong>Mar da Morosa (Lira, Carnota):</strong> Cocina creativa gallega con pescados frescos y vistas al mar.</li>
        <li><strong>A Chalana de Rucho (Lira):</strong> Pescados del día a la brasa y mariscos de la lonja.</li>
        <li><strong>O Cuberto (Carnota):</strong> Gastronomía tradicional gallega y carnes de primera calidad.</li>
        <li><strong>O Moncho Burger (Carnota):</strong> Hamburguesas gourmet y ambiente informal.</li>
        <li><strong>A Xouba (Muros):</strong> Taberna marinera en el casco histórico de Muros.</li>
        <li><strong>Restaurante San Francisco (Louro, Muros):</strong> Arroces marineros y mariscos junto a la playa.</li>
      </ul>
      <p><a href="/">Volver a Casa da Cuncheira</a> | <a href="/booking">Reservar estancia</a></p>
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
      <h3>Vídeo: Playa y Entorno Natural de Carnota</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 16px; margin: 25px 0;">
        <iframe src="https://www.youtube-nocookie.com/embed/e0uLM1qa0qk" title="Vídeo O Legado - Concello de Carnota" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p><a href="/">Alojamiento en Casa da Cuncheira</a> | <a href="/booking">Consultar disponibilidad</a></p>
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
      <p><a href="/">Descubre Casa da Cuncheira</a> | <a href="/booking">Reservar alojamiento</a></p>
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
      <p><a href="/">Alojarse en Casa da Cuncheira</a> | <a href="/booking">Reservar estancia</a></p>
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
      <h3>Vídeo: Cascada de Ézaro al Mar</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 16px; margin: 25px 0;">
        <iframe src="https://www.youtube-nocookie.com/embed/zNO89I471V4" title="Vídeo Cascada de Ézaro" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p><a href="/">Volver a Casa da Cuncheira</a> | <a href="/booking">Reservar casa vacacional</a></p>
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
      <p><a href="/">Casa da Cuncheira en Lira, Carnota</a> | <a href="/booking">Reservar online</a></p>
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
      <p><a href="/">Casa da Cuncheira</a> | <a href="/booking">Reservar</a></p>
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
      <p><a href="/">Casa da Cuncheira</a> | <a href="/booking">Reservar</a></p>
    `,
    image: 'https://www.casadacuncheira.com/images/muros_villages_optimized.webp'
  },
  {
    path: '/aviso-legal',
    title: 'Aviso Legal y Condiciones de Uso | Casa da Cuncheira',
    description: 'Información legal, registro oficial VUT-CO-002236 de Casa da Cuncheira (Lira, Carnota) y condiciones de uso del sitio web según la LSSI-CE.',
    h1: 'Aviso Legal y Condiciones de Uso',
    content: `
      <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 2rem;">Última actualización: Agosto 2026 • Información legal exigible según la Ley 34/2002 (LSSI-CE)</p>

      <h2>1. Datos Identificativos del Titular y Explotador</h2>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos y de contacto relativos a la actividad de este sitio web:</p>
      <ul>
        <li><strong>Denominación comercial:</strong> Casa da Cuncheira</li>
        <li><strong>Titular del dominio web, inmueble y habilitación turística:</strong> César Caamaño Beiro (53549213S) • Contacto: <a href="mailto:casadacuncheira@gmail.com">casadacuncheira@gmail.com</a></li>
        <li><strong>Gestión y Explotación de la actividad de alojamiento:</strong> Hanno Gallinger (X0792551V) • Domicilio: Lariño 318, 15292 Carnota (A Coruña) • Contacto: <a href="mailto:faroinsua@gmail.com">faroinsua@gmail.com</a></li>
        <li><strong>Registro Oficial de Viviendas de Uso Turístico (Xunta de Galicia):</strong> VUT-CO-002236</li>
        <li><strong>Ubicación de la vivienda turística:</strong> Casa Da Cuncheira - Casa Azul, Aldea Carballal, 70, 15292 Lira, Carnota, A Coruña</li>
        <li><strong>Teléfono de atención al huésped:</strong> <a href="tel:+34607952250">+34 607 952 250</a></li>
      </ul>

      <h2>2. Objeto del Sitio Web</h2>
      <p>El presente sitio web (<a href="https://www.casadacuncheira.com">https://www.casadacuncheira.com</a>) tiene como finalidad ofrecer información descriptiva, fotográfica, turística y de ubicación sobre el alojamiento vacacional <strong>Casa da Cuncheira</strong> en Lira (Carnota, Costa da Morte).</p>
      <p>Asimismo, la web facilita el acceso a la consulta de disponibilidad y contratación de estancias conectando con el motor de reservas directas de AvaiBook (<a href="https://bookonline.pro/es/property/350327" target="_blank" rel="noopener noreferrer">bookonline.pro</a>).</p>

      <h2>3. Condiciones de Acceso y Uso</h2>
      <p>El acceso a este sitio web es libre y gratuito. El usuario se compromete a realizar un uso adecuado, lícito y conforme a la buena fe de los contenidos y servicios, absteniéndose de:</p>
      <ul>
        <li>Incurrir en actividades ilícitas, ilegales o contrarias al orden público y a la normativa aplicable.</li>
        <li>Intentar acceder, manipular o vulnerar la seguridad de los servidores o sistemas técnicos asociados al sitio.</li>
        <li>Realizar consultas masivas automatizadas o scraping no autorizado con fines lesivos.</li>
      </ul>

      <h2>4. Propiedad Intelectual e Industrial</h2>
      <p>Todos los elementos que forman parte de este sitio web, incluyendo diseño gráfico, logotipos, textos, fotografías del alojamiento y del entorno, vídeos, código fuente y estructura de navegación, son titularidad exclusiva de Casa da Cuncheira o de terceros que han autorizado expresamente su inclusión.</p>
      <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin la autorización previa y por escrito de sus legítimos titulares.</p>

      <h2>5. Política de Enlaces a Terceros</h2>
      <p>Este sitio web incluye enlaces a plataformas y servicios de terceros, tales como:</p>
      <ul>
        <li><strong>Motor de reservas online (AvaiBook / bookonline.pro):</strong> Pasarela segura externa para tramitar reservas y pagos.</li>
        <li><strong>Mapas y servicios de localización (Google Maps):</strong> Consulta de ubicación geográfica.</li>
        <li><strong>Widgets meteorológicos (Windy.com):</strong> Consulta de previsión marítima y del viento.</li>
        <li><strong>Redes sociales (Instagram, Facebook):</strong> Canales informativos complementarios.</li>
      </ul>
      <p>Casa da Cuncheira no ejerce control sobre los contenidos o políticas de privacidad de dichos sitios web externos y declina cualquier responsabilidad derivada de su uso fuera del presente dominio.</p>

      <h2>6. Legislación Aplicable y Jurisdicción</h2>
      <p>Las relaciones entre el usuario y los responsables de Casa da Cuncheira se regirán por la normativa española vigente.</p>
      <p>En caso de conflicto o controversia, las partes se someterán a los Juzgados y Tribunales competentes conforme a las normas procesales españolas, respetando en todo caso el fuero legalmente establecido para los consumidores y usuarios por el Real Decreto Legislativo 1/2007 (TRLGDCU).</p>

      <p><a href="/">Volver a la página principal</a> | <a href="/privacidad">Política de Privacidad</a> | <a href="/cookies">Política de Cookies</a></p>
    `
  },
  {
    path: '/privacidad',
    title: 'Política de Privacidad y Protección de Datos | Casa da Cuncheira',
    description: 'Tratamiento de datos personales, bases jurídicas RGPD, registro oficial de huéspedes y ejercicio de derechos en Casa da Cuncheira.',
    h1: 'Política de Privacidad y Protección de Datos',
    content: `
      <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 2rem;">Última actualización: Agosto 2026 • En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD)</p>

      <h2>1. Identificación y Responsables del Tratamiento</h2>
      <p>A efectos de lo dispuesto en el RGPD, la LOPDGDD y la LSSI-CE, se detallan los responsables de los distintos tratamientos de datos personales que tienen lugar a través del sitio web y de la actividad turística:</p>
      <h3>Alojamiento, Reservas y Huéspedes</h3>
      <p><strong>Responsable del Tratamiento:</strong> Hanno Gallinger (X0792551V)</p>
      <p><strong>Ámbito:</strong> Gestión y explotación turística de Casa da Cuncheira (VUT-CO-002236), tramitación de reservas, atención directa, facturación y registro oficial de viajeros (SES.HOSPEDAJES).</p>
      <p><strong>Domicilio:</strong> Lariño 318, 15292 Carnota (A Coruña)</p>
      <p><strong>Contacto privacidad:</strong> <a href="mailto:faroinsua@gmail.com">faroinsua@gmail.com</a></p>

      <h3>Sitio Web, Analítica y Cookies</h3>
      <p><strong>Responsable del Tratamiento:</strong> César Caamaño Beiro (53549213S)</p>
      <p><strong>Ámbito:</strong> Titular del dominio web, del inmueble y de la habilitación turística oficial VUT-CO-002236. Responsable del entorno digital, analítica y gestión del consentimiento de cookies.</p>
      <p><strong>Domicilio:</strong> Casa Da Cuncheira - Casa Azul, Aldea Carballal, 70, 15292 Lira, Carnota, A Coruña</p>
      <p><strong>Contacto privacidad:</strong> <a href="mailto:casadacuncheira@gmail.com">casadacuncheira@gmail.com</a></p>

      <h2>2. Tratamientos de Datos Personales, Finalidades y Bases Jurídicas</h2>
      <p>A continuación se detallan de forma exhaustiva y transparente los tratamientos de datos personales que realmente se llevan a cabo:</p>

      <h3>A. Gestión de consultas y atención al usuario (Email y Teléfono)</h3>
      <p><strong>Datos tratados:</strong> Nombre, dirección de correo electrónico, teléfono y contenido del mensaje transmitido por el usuario.</p>
      <p><strong>Finalidad:</strong> Atender solicitudes de información, dudas de disponibilidad, características de la casa y consultas precontractuales.</p>
      <p><strong>Base jurídica:</strong> Aplicación de medidas precontractuales a petición del interesado (Art. 6.1.b RGPD) e interés legítimo en atender a los usuarios (Art. 6.1.f RGPD).</p>
      <p><strong>Conservación:</strong> Durante el tiempo necesario para resolver la consulta y un máximo de 1 año tras su resolución para histórico de soporte, salvo que de ella se derive una reserva.</p>

      <h3>B. Gestión de reservas y prestación del servicio de alojamiento</h3>
      <p><strong>Datos tratados:</strong> Nombre y apellidos del titular de la reserva, datos de contacto (email, teléfono, dirección), fechas de estancia, número de huéspedes y confirmación de pago.</p>
      <p><strong>Finalidad:</strong> Tramitar la reserva directa, formalizar la contratación de la estancia, coordinar la entrada (auto check-in o bienvenida) y prestar el servicio de alojamiento.</p>
      <p><strong>Base jurídica:</strong> Ejecución del contrato de hospedaje en el que el interesado es parte (Art. 6.1.b RGPD).</p>
      <p><strong>Conservación:</strong> Durante la vigencia de la reserva y, posteriormente, durante el plazo de 5 años para atender posibles responsabilidades civiles contractuales (Art. 1964 Código Civil).</p>

      <h3>C. Registro oficial de viajeros (Parte de Entrada de Hospedaje)</h3>
      <p><strong>Datos tratados:</strong> Datos de filiación de los huéspedes mayores de 14 años (nombre, apellidos, tipo y número de documento de identidad/pasaporte, nacionalidad, fecha de nacimiento, fecha de entrada/salida y firma).</p>
      <p><strong>Finalidad:</strong> Confección del parte de entrada de viajeros y comunicación a las Fuerzas y Cuerpos de Seguridad del Estado (Guardia Civil / plataforma SES.HOSPEDAJES) en cumplimiento de la normativa de seguridad ciudadana.</p>
      <p><strong>Base jurídica:</strong> Cumplimiento de una obligación legal aplicable al responsable del tratamiento (Art. 6.1.c RGPD), en virtud de la Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana, el Real Decreto 933/2021 de 26 de octubre y el Decreto 12/2017 de la Xunta de Galicia.</p>
      <p><strong>Conservación:</strong> Los libros-registro y partes de viajeros deben conservarse obligatoriamente durante un periodo de 3 años desde la finalización del servicio de hospedaje, a disposición de las autoridades competentes (Art. 7 RD 933/2021).</p>
      <p><em>Nota: Estos datos se solicitan exclusivamente durante el proceso de check-in / registro previo a la entrada, no mediante la navegación ordinaria por este sitio web.</em></p>

      <h3>D. Facturación, contabilidad y obligaciones fiscales</h3>
      <p><strong>Datos tratados:</strong> Nombre, apellidos o razón social, NIF/CIF, dirección fiscal y datos económicos de la estancia.</p>
      <p><strong>Finalidad:</strong> Emisión de facturas y cumplimiento de obligaciones contables y tributarias.</p>
      <p><strong>Base jurídica:</strong> Cumplimiento de una obligación legal (Art. 6.1.c RGPD) en aplicación de la Ley 58/2003 General Tributaria y el artículo 30 del Código de Comercio.</p>
      <p><strong>Conservación:</strong> Entre 4 años (prescripción fiscal) y 6 años (libros contables y justificantes mercantiles).</p>

      <h3>E. Analítica web, cookies y medición estadística agregada</h3>
      <p><strong>Responsable específico del tratamiento:</strong> César Caamaño Beiro (Titular del sitio web).</p>
      <p><strong>Datos tratados:</strong> Identificador seudónimo de cliente (_ga), dirección IP anonimizada, páginas visitadas y características técnicas de navegación.</p>
      <p><strong>Finalidad:</strong> Medición agregada de tráfico, rendimiento técnico y optimización del sitio web mediante Google Analytics.</p>
      <p><strong>Base jurídica:</strong> Consentimiento explícito del usuario (Art. 6.1.a RGPD y Art. 22.2 LSSI-CE), otorgado a través del banner de cookies.</p>
      <p><strong>Conservación:</strong> Hasta un máximo de 2 años en el navegador o hasta la retirada del consentimiento.</p>

      <h2>3. Destinatarios y Encargados del Tratamiento</h2>
      <p>No se cederán datos a terceros salvo imperativo legal. Para la correcta prestación de los servicios, colaboran los siguientes proveedores en calidad de Encargados del Tratamiento (Art. 28 RGPD):</p>
      <ul>
        <li><strong>AvaiBook On-line, S.L.U. (Zaragoza, España):</strong> Proveedor del motor de reservas online y software de gestión de hospedaje. Actúa como Encargado del Tratamiento para la tramitación de reservas y como Responsable independiente para su pasarela de pagos seguros bajo normativa PSD2.</li>
        <li><strong>Google Ireland Limited (Dublín, Irlanda):</strong> Servicios de correo electrónico (Gmail) y analítica web (Google Analytics con Google Consent Mode v2 y anonimización de IP activa).</li>
        <li><strong>Fuerzas y Cuerpos de Seguridad del Estado (Guardia Civil / SES.HOSPEDAJES):</strong> Cesión por obligación legal en cumplimiento del registro de viajeros.</li>
        <li><strong>Administración Tributaria (AEAT):</strong> Cesión por obligación legal fiscal.</li>
      </ul>

      <h2>4. Transferencias Internacionales de Datos</h2>
      <p>Con carácter general, los datos se almacenan en servidores dentro del Espacio Económico Europeo (EEE). En los casos en que proveedores tecnológicos como Google presten soporte técnico desde EE.UU., las transferencias internacionales se encuentran amparadas en el <strong>Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework)</strong> y en la suscripción de Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea.</p>

      <h2>5. Ejercicio de Derechos</h2>
      <p>El usuario puede ejercer en cualquier momento sus derechos reconocidos por el RGPD y la LOPDGDD:</p>
      <ul>
        <li><strong>Acceso:</strong> Conocer qué datos personales están siendo tratados.</li>
        <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
        <li><strong>Supresión («derecho al olvido»):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
        <li><strong>Limitación del tratamiento:</strong> Solicitar que se suspenda temporalmente el tratamiento en los supuestos legalmente previstos.</li>
        <li><strong>Portabilidad:</strong> Recibir los datos en formato estructurado de uso común y lectura mecánica.</li>
        <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos por motivos derivados de su situación particular.</li>
        <li><strong>Retirada del consentimiento:</strong> Retirar en cualquier momento el consentimiento otorgado previamente para cookies analíticas sin afectar a la licitud del tratamiento previo.</li>
      </ul>
      <p>Para ejercer estos derechos, puede remitir una solicitud por escrito indicando en el asunto "Protección de Datos - Ejercicio de Derechos" al canal correspondiente:</p>
      <ul>
        <li><strong>Para consultas, reservas, facturación y estancia:</strong> <a href="mailto:faroinsua@gmail.com">faroinsua@gmail.com</a> (Hanno Gallinger).</li>
        <li><strong>Para navegación web, analítica y cookies:</strong> <a href="mailto:casadacuncheira@gmail.com">casadacuncheira@gmail.com</a> (César Caamaño Beiro).</li>
      </ul>

      <h2>6. Reclamación ante la Autoridad de Control</h2>
      <p>Si considera que sus derechos no han sido debidamente atendidos o que el tratamiento de sus datos infringe la normativa aplicable, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica (<a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) o por escrito en C/ Jorge Juan, 6, 28001 Madrid.</p>

      <p><a href="/">Volver a la página principal</a> | <a href="/aviso-legal">Aviso Legal</a> | <a href="/cookies">Política de Cookies</a></p>
    `
  },
  {
    path: '/cookies',
    title: 'Política de Cookies | Casa da Cuncheira',
    description: 'Información sobre las cookies técnicas y analíticas de Casa da Cuncheira, tabla de almacenamiento real y panel de configuración.',
    h1: 'Política de Cookies',
    content: `
      <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 2rem;">Última actualización: Agosto 2026 • En cumplimiento del artículo 22.2 de la LSSI-CE y la Guía sobre el uso de cookies de la AEPD</p>

      <h2>1. ¿Qué son las Cookies y el Almacenamiento Local?</h2>
      <p>Una cookie es un pequeño archivo de texto que un sitio web descarga en tu navegador o dispositivo al visitarlo. Además de las cookies tradicionales, este sitio web puede utilizar tecnologías de almacenamiento web como <code>localStorage</code> para recordar tus preferencias de privacidad de forma segura y eficiente.</p>
      <p>Estas herramientas permiten que la página funcione correctamente, recuerde tus selecciones (como el idioma o la aceptación de cookies) y, en su caso, analice estadísticamente las visitas de forma anónima para mejorar el contenido y el rendimiento.</p>

      <h2>2. Inventario Real de Cookies y Almacenamiento Utilizados</h2>
      <p>En este sitio web únicamente se utilizan las cookies y elementos de almacenamiento estrictamente necesarios o autorizados por el usuario:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.875rem; text-align: left;">
        <thead>
          <tr style="background-color: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 10px;">Nombre</th>
            <th style="padding: 10px;">Proveedor</th>
            <th style="padding: 10px;">Finalidad</th>
            <th style="padding: 10px;">Duración</th>
            <th style="padding: 10px;">Tipo</th>
            <th style="padding: 10px;">Consentimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px; font-family: monospace; font-weight: bold;">cdc_cookie_consent_v1</td>
            <td style="padding: 10px;">casadacuncheira.com (Propio)</td>
            <td style="padding: 10px;">Almacena en <code>localStorage</code> el estado y la fecha de tus preferencias de consentimiento de cookies.</td>
            <td style="padding: 10px;">1 año</td>
            <td style="padding: 10px;"><strong>Técnica</strong></td>
            <td style="padding: 10px;">Exenta (necesaria)</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px; font-family: monospace; font-weight: bold;">_ga</td>
            <td style="padding: 10px;">Google Analytics (Google Ireland Ltd.)</td>
            <td style="padding: 10px;">Registra un identificador seudónimo único para generar datos estadísticos agregados sobre cómo el visitante usa el sitio web.</td>
            <td style="padding: 10px;">2 años (o 14 meses)</td>
            <td style="padding: 10px;"><strong>Analítica</strong></td>
            <td style="padding: 10px;">Requiere consentimiento</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px; font-family: monospace; font-weight: bold;">_ga_213MC8TBHN</td>
            <td style="padding: 10px;">Google Analytics (Google Ireland Ltd.)</td>
            <td style="padding: 10px;">Mantiene el estado de la sesión y recopila métricas técnicas agregadas.</td>
            <td style="padding: 10px;">2 años</td>
            <td style="padding: 10px;"><strong>Analítica</strong></td>
            <td style="padding: 10px;">Requiere consentimiento</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Servicios de Terceros e Incrustaciones de Contenido</h2>
      <p>El sitio web integra componentes de proveedores externos para mejorar la información turística ofrecida:</p>
      <ul>
        <li><strong>Windy.com (Previsión meteorológica):</strong> Se carga mediante un <code>iframe</code> de forma diferida (lazy load). Windy puede gestionar almacenamiento de sesión propio para la interactividad del mapa meteorológico.</li>
        <li><strong>Google Maps (Localización):</strong> Incrustación técnica para mostrar la ubicación física de la casa y lugares de interés.</li>
        <li><strong>YouTube (Vídeos turísticos de Ézaro y Carnota):</strong> Se carga utilizando el dominio de privacidad mejorada <code>youtube-nocookie.com</code>, evitando cookies de seguimiento previas a la reproducción del vídeo.</li>
        <li><strong>Motor de reservas AvaiBook (bookonline.pro):</strong> Al pulsar en «Reservar», el usuario es redirigido de forma segura a la plataforma externa de AvaiBook, la cual aplica su propia política de cookies y seguridad de pagos.</li>
      </ul>

      <h2>4. Cómo Deshabilitar o Eliminar Cookies desde tu Navegador</h2>
      <p>Además de utilizar nuestro panel de configuración, puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo configurando las opciones del navegador que utilices:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

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

    // Technical SEO cleanup for legal pages
    const isLegalRoute = ['/aviso-legal', '/privacidad', '/cookies'].includes(route.path);
    if (isLegalRoute) {
      // 1. Remove meta keywords (irrelevant and commercial)
      pageHtml = pageHtml.replace(/\s*<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i, '');

      // 2. Remove hero image preload (not used visually above-the-fold on legal pages)
      pageHtml = pageHtml.replace(/\s*<!-- Preload Hero Image for Core Web Vitals \(LCP\) -->\s*<link\s+rel="preload"\s+as="image"\s+href="\/images\/hero_optimized\.webp"[^>]*\/?>/i, '');

      // 3. Remove FAQPage schema from global JSON-LD graph (FAQs are not visible content on legal pages)
      pageHtml = pageHtml.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (match, jsonContent) => {
        try {
          const parsed = JSON.parse(jsonContent);
          if (parsed && Array.isArray(parsed['@graph'])) {
            parsed['@graph'] = parsed['@graph'].filter((item) => item['@type'] !== 'FAQPage');
            return `<script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n  </script>`;
          }
        } catch (e) {
          console.error('Error parsing JSON-LD in prerender:', e);
        }
        return match;
      });
    }

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
        <a href="/booking" style="color: #ffffff; text-decoration: underline; margin-left: 15px;">Reservar</a>
      </nav>
    </header>

    <main style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #334155; padding: 40px 20px; max-width: 1000px; margin: 0 auto;">
      <article>
        <h1 style="font-size: 2.5rem; color: #0f172a; margin-bottom: 20px;">${route.h1}</h1>
        ${route.content}
      </article>
    </main>

    <footer style="padding: 20px; background-color: #1e293b; color: #94a3b8; text-align: center; margin-top: 40px;">
      <p>© 2026 Casa da Cuncheira. Vivienda de uso turístico VUT-CO-002236 · Lira, Carnota (Costa da Morte).</p>
      <p style="margin-top: 8px;">
        <a href="/aviso-legal" style="color: #cbd5e1; margin: 0 8px;">Aviso Legal</a> |
        <a href="/privacidad" style="color: #cbd5e1; margin: 0 8px;">Política de Privacidad</a> |
        <a href="/cookies" style="color: #cbd5e1; margin: 0 8px;">Política de Cookies</a>
      </p>
    </footer>`;

    pageHtml = pageHtml.replace(
      /<div id="root">[\s\S]*<\/div>(?=\s*<script|\s*<\/body>)/i,
      `<div id="root">${fallbackBody}</div>`
    );

    const outPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf8');
    console.log(`Prerendered: ${route.path} -> ${outPath}`);
  }

  console.log('✅ All routes successfully prerendered for static SEO hosting!');
}

prerender();
