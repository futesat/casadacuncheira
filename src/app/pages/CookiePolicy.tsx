import { motion } from 'motion/react';
import { ArrowLeft, Cookie, Settings2, ShieldCheck, Database, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { SEOHead } from '../components/SEOHead';

export function CookiePolicy() {
  const { t } = useLanguage();
  const { openSettings } = useCookieConsent();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <SEOHead
        title="Política de Cookies | Casa da Cuncheira"
        description="Información sobre las cookies técnicas y analíticas utilizadas en Casa da Cuncheira, tabla de almacenamiento real y gestor de preferencias."
        canonicalUrl="https://www.casadacuncheira.com/cookies"
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
              Política de Cookies
            </h1>
            <p className="text-muted-foreground text-sm font-light">
              Última actualización: Agosto 2026 • En cumplimiento del artículo 22.2 de la LSSI-CE y la Guía sobre el uso de cookies de la AEPD
            </p>
          </header>

          {/* 1. ¿Qué son las cookies? */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Cookie className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">1. ¿Qué son las Cookies y el Almacenamiento Local?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Una cookie es un pequeño archivo de texto que un sitio web descarga en tu navegador o dispositivo al visitarlo. Además de las cookies tradicionales, este sitio web puede utilizar tecnologías de almacenamiento web como <code>localStorage</code> para recordar tus preferencias de privacidad de forma segura y eficiente.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Estas herramientas permiten que la página funcione correctamente, recuerde tus selecciones (como el idioma o la aceptación de cookies) y, en su caso, analice estadísticamente las visitas de forma anónima para mejorar el contenido y el rendimiento.
            </p>
          </section>

          {/* Botón de configuración directa */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
                Gestionar tus preferencias en este momento
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light">
                Puedes revisar, modificar o revocar tu consentimiento para cookies no esenciales cuando desees.
              </p>
            </div>
            <button
              type="button"
              onClick={openSettings}
              className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
              Configurar cookies
            </button>
          </section>

          {/* 2. Inventario Real de Cookies */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Database className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">2. Inventario Real de Cookies y Almacenamiento Utilizados</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              En este sitio web únicamente se utilizan las cookies y elementos de almacenamiento estrictamente necesarios o autorizados por el usuario:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Nombre</th>
                    <th className="p-3.5">Proveedor</th>
                    <th className="p-3.5">Finalidad</th>
                    <th className="p-3.5">Duración</th>
                    <th className="p-3.5">Tipo</th>
                    <th className="p-3.5">Consentimiento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 font-mono text-slate-900 font-semibold">cdc_cookie_consent_v1</td>
                    <td className="p-3.5">casadacuncheira.com (Propio)</td>
                    <td className="p-3.5">Almacena en <code>localStorage</code> el estado y la fecha de tus preferencias de consentimiento de cookies.</td>
                    <td className="p-3.5">1 año</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[11px] font-bold">Técnica</span></td>
                    <td className="p-3.5 text-slate-500">Exenta (necesaria)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 font-mono text-slate-900 font-semibold">_ga</td>
                    <td className="p-3.5">Google Analytics (Google Ireland Ltd.)</td>
                    <td className="p-3.5">Registra un identificador seudónimo único para generar datos estadísticos agregados sobre cómo el visitante usa el sitio web.</td>
                    <td className="p-3.5">2 años (o 14 meses)</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Analítica</span></td>
                    <td className="p-3.5 font-semibold text-primary">Requiere consentimiento</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3.5 font-mono text-slate-900 font-semibold">_ga_WFGJHSJ4</td>
                    <td className="p-3.5">Google Analytics (Google Ireland Ltd.)</td>
                    <td className="p-3.5">Mantiene el estado de la sesión y recopila métricas técnicas agregadas.</td>
                    <td className="p-3.5">2 años</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">Analítica</span></td>
                    <td className="p-3.5 font-semibold text-primary">Requiere consentimiento</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Servicios de Terceros e Incrustaciones */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">3. Servicios de Terceros e Incrustaciones de Contenido</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              El sitio web integra componentes de proveedores externos para mejorar la información turística ofrecida:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm sm:text-base">
              <li><strong>Windy.com (Previsión meteorológica):</strong> Se carga mediante un <code>iframe</code> de forma diferida (lazy load). Windy puede gestionar almacenamiento de sesión propio para la interactividad del mapa meteorológico.</li>
              <li><strong>Google Maps (Localización):</strong> Incrustación técnica para mostrar la ubicación física de la casa y lugares de interés.</li>
              <li><strong>YouTube (Vídeo de la Cascada de Ézaro):</strong> Se carga utilizando el dominio de privacidad mejorada <code>youtube-nocookie.com</code>, evitando cookies de seguimiento previas a la reproducción del vídeo.</li>
              <li><strong>Motor de reservas AvaiBook (bookonline.pro):</strong> Al pulsar en «Reservar», el usuario es redirigido de forma segura a la plataforma externa de AvaiBook, la cual aplica su propia política de cookies y seguridad de pagos.</li>
            </ul>
          </section>

          {/* 4. Gestión desde el Navegador */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <h2 className="text-xl font-bold text-foreground">4. Cómo Deshabilitar o Eliminar Cookies desde tu Navegador</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Además de utilizar nuestro panel de configuración, puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo configurando las opciones del navegador que utilices:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm sm:text-base">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
