import { motion } from 'motion/react';
import { ArrowLeft, Building2, Shield, Scale, ExternalLink, Copyright, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';
import { SEOHead } from '../components/SEOHead';

export function LegalNotice() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <SEOHead
        title="Aviso Legal y Condiciones de Uso | Casa da Cuncheira"
        description="Información identificativa de Casa da Cuncheira, registro de vivienda de uso turístico VUT-CO-002236 y condiciones generales de uso del sitio web."
        canonicalUrl="https://www.casadacuncheira.com/aviso-legal"
        ogType="article"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('common.back')}
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/60 space-y-10"
        >
          <header className="border-b border-border/40 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Aviso Legal y Condiciones de Uso
            </h1>
            <p className="text-muted-foreground text-sm font-light">
              Última actualización: Agosto 2026 • Información legal exigible según la Ley 34/2002 (LSSI-CE)
            </p>
          </header>

          {/* 1. Datos Identificativos */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Building2 className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">1. Datos Identificativos del Titular y Explotador</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos y de contacto relativos a la actividad de este sitio web:
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 text-sm">
              <p><strong>Denominación comercial:</strong> {STATIC_TEXTS.brand}</p>
              <p><strong>Titular del dominio web, inmueble y habilitación turística:</strong> César Caamaño Beiro (53549213S) • Contacto: <a href={`mailto:${STATIC_TEXTS.ownerEmail}`} className="text-primary underline hover:opacity-80">{STATIC_TEXTS.ownerEmail}</a></p>
              <p><strong>Gestión y Explotación de la actividad de alojamiento:</strong> Hanno Gallinger (X0792551V) • Domicilio: {STATIC_TEXTS.managerAddress} • Contacto: <a href={`mailto:${STATIC_TEXTS.email}`} className="text-primary underline hover:opacity-80">{STATIC_TEXTS.email}</a></p>
              <p><strong>Inscripción en el Rexistro de Empresas e Actividades Turísticas (REAT):</strong> VUT-CO-009477 (Xunta de Galicia).</p>
              <p><strong>Categoría:</strong> Vivenda de Uso Turístico (VUT).</p>
              <p><strong>Teléfono de atención al huésped:</strong> <a href={`tel:${STATIC_TEXTS.phone.replace(/\s+/g, '')}`} className="text-primary underline hover:opacity-80">{STATIC_TEXTS.phone}</a></p>
            </div>
          </section>

          {/* 2. Objeto del Sitio Web */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Shield className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">2. Objeto y Ámbito de Aplicación</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              El presente Aviso Legal regula el acceso, navegación y utilización del sitio web{' '}
              <a href="https://www.casadacuncheira.com" className="text-primary underline hover:opacity-80">
                www.casadacuncheira.com
              </a>
              , así como las responsabilidades derivadas del uso de sus contenidos.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Asimismo, la web facilita el acceso a la consulta de disponibilidad y contratación de estancias conectando con el motor de reservas directas de AvaiBook (<a href="https://bookonline.pro/es/property/350327" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 inline-flex items-center gap-1">bookonline.pro <ExternalLink className="w-3 h-3" /></a>).
            </p>
          </section>

          {/* 3. Condiciones de Uso y Responsabilidad del Usuario */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Scale className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">3. Condiciones de Acceso y Uso</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              El acceso a este sitio web es libre y gratuito. El usuario se compromete a realizar un uso adecuado, lícito y conforme a la buena fe de los contenidos y servicios, absteniéndose de:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm sm:text-base">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias al orden público y a la normativa aplicable.</li>
              <li>Intentar acceder, manipular o vulnerar la seguridad de los servidores o sistemas técnicos asociados al sitio.</li>
              <li>Realizar consultas masivas automatizadas o scraping no autorizado con fines lesivos.</li>
            </ul>
          </section>

          {/* 4. Propiedad Intelectual e Industrial */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Copyright className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">4. Propiedad Intelectual e Industrial</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Todos los elementos que forman parte de este sitio web, incluyendo diseño gráfico, logotipos, textos, fotografías del alojamiento y del entorno, vídeos, código fuente y estructura de navegación, son titularidad exclusiva de Casa da Cuncheira o de terceros que han autorizado expresamente su inclusión.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin la autorización previa y por escrito de sus legítimos titulares.
            </p>
          </section>

          {/* 5. Enlaces Externos */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <ExternalLink className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">5. Política de Enlaces a Terceros</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Este sitio web incluye enlaces a plataformas y servicios de terceros, tales como:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm sm:text-base">
              <li><strong>Motor de reservas online (AvaiBook / bookonline.pro):</strong> Pasarela segura externa para tramitar reservas y pagos.</li>
              <li><strong>Mapas y servicios de localización (Google Maps):</strong> Consulta de ubicación geográfica.</li>
              <li><strong>Widgets meteorológicos (Windy.com):</strong> Consulta de previsión marítima y del viento.</li>
              <li><strong>Redes sociales (Instagram, Facebook):</strong> Canales informativos complementarios.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Casa da Cuncheira no ejerce control sobre los contenidos o políticas de privacidad de dichos sitios web externos y declina cualquier responsabilidad derivada de su uso fuera del presente dominio.
            </p>
          </section>

          {/* 6. Legislación y Jurisdicción */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">6. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Las relaciones entre el usuario y los responsables de Casa da Cuncheira se regirán por la normativa española vigente.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              En caso de conflicto o controversia, las partes se someterán a los Juzgados y Tribunales competentes conforme a las normas procesales españolas, respetando en todo caso el fuero legalmente establecido para los consumidores y usuarios por el Real Decreto Legislativo 1/2007 (TRLGDCU).
            </p>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
