import { motion } from 'motion/react';
import { ArrowLeft, Lock, FileCheck2, UserCheck, Server, Globe2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <SEOHead
        title="Política de Privacidad y Protección de Datos | Casa da Cuncheira"
        description="Información detallada sobre el tratamiento de datos personales, bases jurídicas RGPD, registro obligatorio de viajeros y ejercicio de derechos en Casa da Cuncheira."
        canonicalUrl="https://www.casadacuncheira.com/privacidad"
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
              Política de Privacidad y Protección de Datos
            </h1>
            <p className="text-muted-foreground text-sm font-light">
              Última actualización: Agosto 2026 • En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD)
            </p>
          </header>

          {/* 1. Responsables del Tratamiento */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Lock className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">1. Identificación y Responsables del Tratamiento</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              A efectos de lo dispuesto en el RGPD, la LOPDGDD y la LSSI-CE, se detallan los responsables de los distintos tratamientos de datos personales que tienen lugar a través del sitio web y de la actividad turística:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Responsable Alojamiento */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide text-primary">Alojamiento, Reservas y Huéspedes</h3>
                <p><strong>Responsable del Tratamiento:</strong> Hanno Gallinger (X0792551V)</p>
                <p><strong>Ámbito:</strong> Gestión y explotación turística de Casa da Cuncheira (VUT-CO-002236), tramitación de reservas, atención directa, facturación y registro oficial de viajeros (SES.HOSPEDAJES).</p>
                <p><strong>Domicilio:</strong> {STATIC_TEXTS.managerAddress}</p>
                <p><strong>Contacto privacidad:</strong> <a href={`mailto:${STATIC_TEXTS.email}`} className="text-primary underline hover:opacity-80">{STATIC_TEXTS.email}</a></p>
              </div>

              {/* Responsable Web y Cookies */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide text-primary">Sitio Web, Analítica y Cookies</h3>
                <p><strong>Responsable del Tratamiento:</strong> César Caamaño Beiro (53549213S)</p>
                <p><strong>Ámbito:</strong> Titular del dominio web, del inmueble y de la habilitación turística oficial VUT-CO-002236. Responsable del entorno digital, analítica y gestión del consentimiento de cookies.</p>
                <p><strong>Domicilio:</strong> {STATIC_TEXTS.location}</p>
                <p><strong>Contacto privacidad:</strong> <a href={`mailto:${STATIC_TEXTS.ownerEmail}`} className="text-primary underline hover:opacity-80">{STATIC_TEXTS.ownerEmail}</a></p>
              </div>
            </div>
          </section>

          {/* 2. Tratamientos reales y bases jurídicas */}
          <section className="space-y-6 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <FileCheck2 className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">2. Tratamientos de Datos Personales, Finalidades y Bases Jurídicas</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              A continuación se detallan de forma exhaustiva y transparente los tratamientos de datos personales que realmente se llevan a cabo:
            </p>

            <div className="space-y-6">
              {/* Tratamiento A: Consultas */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-base">A. Gestión de consultas y atención al usuario (Email y Teléfono)</h3>
                <p><strong>Datos tratados:</strong> Nombre, dirección de correo electrónico, teléfono y contenido del mensaje transmitido por el usuario.</p>
                <p><strong>Finalidad:</strong> Atender solicitudes de información, dudas de disponibilidad, características de la casa y consultas precontractuales.</p>
                <p><strong>Base jurídica:</strong> Aplicación de medidas precontractuales a petición del interesado (Art. 6.1.b RGPD) e interés legítimo en atender a los usuarios (Art. 6.1.f RGPD).</p>
                <p><strong>Conservación:</strong> Durante el tiempo necesario para resolver la consulta y un máximo de 1 año tras su resolución para histórico de soporte, salvo que de ella se derive una reserva.</p>
              </div>

              {/* Tratamiento B: Reservas */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-base">B. Gestión de reservas y prestación del servicio de alojamiento</h3>
                <p><strong>Datos tratados:</strong> Nombre y apellidos del titular de la reserva, datos de contacto (email, teléfono, dirección), fechas de estancia, número de huéspedes y confirmación de pago.</p>
                <p><strong>Finalidad:</strong> Tramitar la reserva directa, formalizar la contratación de la estancia, coordinar la entrada (auto check-in o bienvenida) y prestar el servicio de alojamiento.</p>
                <p><strong>Base jurídica:</strong> Ejecución del contrato de hospedaje en el que el interesado es parte (Art. 6.1.b RGPD).</p>
                <p><strong>Conservación:</strong> Durante la vigencia de la reserva y, posteriormente, durante el plazo de 5 años para atender posibles responsabilidades civiles contractuales (Art. 1964 Código Civil).</p>
              </div>

              {/* Tratamiento C: Registro de Huéspedes */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-base">C. Registro oficial de viajeros (Parte de Entrada de Hospedaje)</h3>
                <p><strong>Datos tratados:</strong> Datos de filiación de los huéspedes mayores de 14 años (nombre, apellidos, tipo y número de documento de identidad/pasaporte, nacionalidad, fecha de nacimiento, fecha de entrada/salida y firma).</p>
                <p><strong>Finalidad:</strong> Confección del parte de entrada de viajeros y comunicación a las Fuerzas y Cuerpos de Seguridad del Estado (Guardia Civil / plataforma SES.HOSPEDAJES) en cumplimiento de la normativa de seguridad ciudadana.</p>
                <p><strong>Base jurídica:</strong> Cumplimiento de una obligación legal aplicable al responsable del tratamiento (Art. 6.1.c RGPD), en virtud de la Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana, el Real Decreto 933/2021 de 26 de octubre y el Decreto 12/2017 de la Xunta de Galicia.</p>
                <p><strong>Conservación:</strong> Los libros-registro y partes de viajeros deben conservarse obligatoriamente durante un periodo de <strong>3 años</strong> desde la finalización del servicio de hospedaje, a disposición de las autoridades competentes (Art. 7 RD 933/2021).</p>
                <p className="text-xs text-slate-500 italic">Nota: Estos datos se solicitan exclusivamente durante el proceso de check-in / registro previo a la entrada, no mediante la navegación ordinaria por este sitio web.</p>
              </div>

              {/* Tratamiento D: Facturación */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-base">D. Facturación, contabilidad y obligaciones fiscales</h3>
                <p><strong>Datos tratados:</strong> Nombre, apellidos o razón social, NIF/CIF, dirección fiscal y datos económicos de la estancia.</p>
                <p><strong>Finalidad:</strong> Emisión de facturas y cumplimiento de obligaciones contables y tributarias.</p>
                <p><strong>Base jurídica:</strong> Cumplimiento de una obligación legal (Art. 6.1.c RGPD) en aplicación de la Ley 58/2003 General Tributaria y el artículo 30 del Código de Comercio.</p>
                <p><strong>Conservación:</strong> Entre 4 años (prescripción fiscal) y 6 años (libros contables y justificantes mercantiles).</p>
              </div>

              {/* Tratamiento E: Analítica */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
                <h3 className="font-bold text-slate-900 text-base">E. Analítica web, cookies y medición estadística agregada</h3>
                <p><strong>Responsable específico del tratamiento:</strong> César Caamaño Beiro (Titular del sitio web).</p>
                <p><strong>Datos tratados:</strong> Identificador seudónimo de cliente (`_ga`), dirección IP anonimizada, páginas visitadas y características técnicas de navegación.</p>
                <p><strong>Finalidad:</strong> Medición agregada de tráfico, rendimiento técnico y optimización del sitio web mediante Google Analytics.</p>
                <p><strong>Base jurídica:</strong> Consentimiento explícito del usuario (Art. 6.1.a RGPD y Art. 22.2 LSSI-CE), otorgado a través del banner de cookies.</p>
                <p><strong>Conservación:</strong> Hasta un máximo de 2 años en el navegador o hasta la retirada del consentimiento.</p>
              </div>
            </div>
          </section>

          {/* 3. Destinatarios y Encargados */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Server className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">3. Destinatarios y Encargados del Tratamiento</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              No se cederán datos a terceros salvo imperativo legal. Para la correcta prestación de los servicios, colaboran los siguientes proveedores en calidad de Encargados del Tratamiento (Art. 28 RGPD):
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-sm sm:text-base">
              <li><strong>AvaiBook On-line, S.L.U. (Zaragoza, España):</strong> Proveedor del motor de reservas online y software de gestión de hospedaje. Actúa como Encargado del Tratamiento para la tramitación de reservas y como Responsable independiente para su pasarela de pagos seguros bajo normativa PSD2.</li>
              <li><strong>Google Ireland Limited (Dublín, Irlanda):</strong> Servicios de correo electrónico (Gmail) y analítica web (Google Analytics con Google Consent Mode v2 y anonimización de IP activa).</li>
              <li><strong>Fuerzas y Cuerpos de Seguridad del Estado (Guardia Civil / SES.HOSPEDAJES):</strong> Cesión por obligación legal en cumplimiento del registro de viajeros.</li>
              <li><strong>Administración Tributaria (AEAT):</strong> Cesión por obligación legal fiscal.</li>
            </ul>
          </section>

          {/* 4. Transferencias internacionales */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <Globe2 className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">4. Transferencias Internacionales de Datos</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Con carácter general, los datos se almacenan en servidores dentro del Espacio Económico Europeo (EEE). En los casos en que proveedores tecnológicos como Google presten soporte técnico desde EE.UU., las transferencias internacionales se encuentran amparadas en el <strong>Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework)</strong> y en la suscripción de Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea.
            </p>
          </section>

          {/* 5. Derechos de los usuarios */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <UserCheck className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">5. Ejercicio de Derechos</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              El usuario puede ejercer en cualquier momento sus derechos reconocidos por el RGPD y la LOPDGDD:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm sm:text-base">
              <li><strong>Acceso:</strong> Conocer qué datos personales están siendo tratados.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Supresión («derecho al olvido»):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Limitación del tratamiento:</strong> Solicitar que se suspenda temporalmente el tratamiento en los supuestos legalmente previstos.</li>
              <li><strong>Portabilidad:</strong> Recibir los datos en formato estructurado de uso común y lectura mecánica.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos por motivos derivados de su situación particular.</li>
              <li><strong>Retirada del consentimiento:</strong> Retirar en cualquier momento el consentimiento otorgado previamente para cookies analíticas sin afectar a la licitud del tratamiento previo.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Para ejercer estos derechos, puede remitir una solicitud por escrito indicando en el asunto "Protección de Datos - Ejercicio de Derechos" al canal correspondiente:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm sm:text-base">
              <li><strong>Para consultas, reservas, facturación y estancia:</strong> <a href={`mailto:${STATIC_TEXTS.email}`} className="text-primary underline hover:opacity-80 font-medium">{STATIC_TEXTS.email}</a> (Hanno Gallinger).</li>
              <li><strong>Para navegación web, analítica y cookies:</strong> <a href={`mailto:${STATIC_TEXTS.ownerEmail}`} className="text-primary underline hover:opacity-80 font-medium">{STATIC_TEXTS.ownerEmail}</a> (César Caamaño Beiro).</li>
            </ul>
          </section>

          {/* 6. Reclamación ante la Autoridad de Control */}
          <section className="space-y-4 border-t border-border/30 pt-8">
            <div className="flex items-center gap-3 text-primary">
              <ShieldAlert className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-bold text-foreground">6. Reclamación ante la Autoridad de Control</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Si considera que sus derechos no han sido debidamente atendidos o que el tratamiento de sus datos infringe la normativa aplicable, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica (<a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">www.aepd.es</a>) o por escrito en C/ Jorge Juan, 6, 28001 Madrid.
            </p>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
