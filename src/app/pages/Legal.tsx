import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';
import { SEOHead } from '../components/SEOHead';

export function Legal() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <SEOHead
        title="Aviso Legal, Privacidad y Cookies | Casa da Cuncheira"
        description="Información legal, política de privacidad, términos de uso y registro turístico de Casa da Cuncheira (Lira, Carnota)."
        canonicalUrl="https://www.casadacuncheira.com/aviso-legal"
        ogType="website"
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
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/60 space-y-8"
        >
          <header className="border-b border-border/40 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Aviso Legal y Política de Privacidad
            </h1>
            <p className="text-muted-foreground text-sm">
              Última actualización: Agosto 2026 • Casa da Cuncheira (Carnota, A Coruña)
            </p>
          </header>

          {/* 1. Titularidad */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-semibold text-foreground">1. Datos Identificativos del Titular</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong>Denominación comercial:</strong> {STATIC_TEXTS.brand}</li>
              <li><strong>Titular responsable:</strong> César Caamaño Beiro</li>
              <li><strong>Registro Turístico Oficial (Xunta de Galicia):</strong> {STATIC_TEXTS.license} (Vivienda de Uso Turístico)</li>
              <li><strong>Ubicación de la vivienda:</strong> {STATIC_TEXTS.location}</li>
              <li><strong>Correo electrónico de contacto:</strong> <a href={`mailto:${STATIC_TEXTS.email}`} className="text-primary underline">{STATIC_TEXTS.email}</a></li>
              <li><strong>Teléfono de atención al cliente:</strong> <a href={`tel:${STATIC_TEXTS.phone.replace(/\s+/g, '')}`} className="text-primary underline">{STATIC_TEXTS.phone}</a></li>
            </ul>
          </section>

          {/* 2. Objeto y Condiciones */}
          <section className="space-y-4 border-t border-border/30 pt-6">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-xl font-semibold text-foreground">2. Finalidad del Sitio Web y Condiciones de Uso</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              El presente sitio web tiene por objeto facilitar información sobre el alojamiento vacacional Casa da Cuncheira, sus características, entorno natural en Carnota y Costa da Morte, así como permitir a los usuarios consultar disponibilidad y gestionar reservas directas a través de la plataforma integrada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El acceso y utilización de este sitio web atribuye la condición de usuario e implica la aceptación plena de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          {/* 3. Privacidad */}
          <section className="space-y-4 border-t border-border/30 pt-6">
            <div className="flex items-center gap-3 text-primary">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-semibold text-foreground">3. Protección de Datos de Carácter Personal (RGPD)</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa que los datos personales facilitados a través de formularios de contacto o reservas serán tratados con la única finalidad de gestionar las solicitudes recibidas y formalizar las reservas de alojamiento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Los datos no serán cedidos a terceros salvo obligación legal o necesidad directa vinculada a la ejecución del servicio de estancia. El usuario puede ejercer sus derechos de acceso, rectificación, supresión y limitación dirigiéndose por escrito a <a href={`mailto:${STATIC_TEXTS.email}`} className="text-primary underline">{STATIC_TEXTS.email}</a>.
            </p>
          </section>

          {/* 4. Cookies */}
          <section className="space-y-4 border-t border-border/30 pt-6">
            <h2 className="text-xl font-semibold text-foreground">4. Política de Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Este sitio web utiliza cookies técnicas imprescindibles para el correcto funcionamiento de la navegación, selección de idioma y seguridad. No se recopilan datos personales con fines publicitarios ni se realiza venta de información a terceros.
            </p>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
