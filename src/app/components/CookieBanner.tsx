import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cookie, Settings2, X, Check } from 'lucide-react';
import { Link } from 'react-router';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export function CookieBanner() {
  const {
    hasDecided,
    isSettingsOpen,
    consent,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    openSettings,
    closeSettings
  } = useCookieConsent();

  const [analyticsSelected, setAnalyticsSelected] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize modal state with current consent
  useEffect(() => {
    if (isSettingsOpen) {
      setAnalyticsSelected(consent?.analytics ?? false);
    }
  }, [isSettingsOpen, consent]);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSettingsOpen) {
        closeSettings();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, closeSettings]);

  return (
    <>
      {/* 1st Layer: Cookie Notice Banner (Blocking overlay) */}
      <AnimatePresence>
        {!hasDecided && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Aviso de cookies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-end justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-primary">
                    <Cookie className="w-5 h-5" />
                    <span className="font-semibold text-sm tracking-wide text-white">
                      Uso de cookies y privacidad
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web y, si nos das tu consentimiento, cookies analíticas de Google Analytics para medir de forma anónima el tráfico y mejorar la experiencia. Puedes aceptarlas, rechazarlas o configurar tus preferencias en cualquier momento. Consulta nuestra{' '}
                    <Link
                      to="/cookies"
                      className="underline text-white hover:text-primary font-normal transition-colors"
                    >
                      Política de Cookies
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={rejectNonEssential}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer text-center"
                  >
                    Rechazar no esenciales
                  </button>
                  <button
                    type="button"
                    onClick={openSettings}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-xl bg-transparent hover:bg-white/10 text-slate-200 border border-slate-700 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <Settings2 className="w-3.5 h-3.5" />
                    Configurar
                  </button>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white transition-all shadow-md cursor-pointer text-center"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2nd Layer: Preferences Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 text-slate-900">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 id="cookie-settings-title" className="text-xl font-bold tracking-tight">
                    Panel de configuración de cookies
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeSettings}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Cerrar panel de configuración"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 my-4 leading-relaxed font-light">
                Puedes seleccionar qué categorías de cookies permites en este sitio. Las cookies necesarias no pueden desactivarse ya que son imprescindibles para la navegación básica y recordar tus preferencias.
              </p>

              <div className="space-y-4 my-6">
                {/* Category: Necessary */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900">
                          Cookies técnicas y necesarias
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 rounded-md">
                          Obligatorias
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Permiten funciones básicas como la navegación segura, el idioma seleccionado y el almacenamiento de tus preferencias de privacidad. No almacenan datos de identificación personal.
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Category: Analytics */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-semibold text-sm text-slate-900 block">
                        Cookies analíticas y de medición
                      </span>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Nos permiten cuantificar el número de usuarios y realizar análisis estadístico anónimo del uso del sitio web mediante Google Analytics, para mejorar contenidos y rendimiento.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={analyticsSelected}
                        onChange={(e) => setAnalyticsSelected(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => savePreferences(analyticsSelected)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer text-center"
                >
                  Guardar preferencias
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white transition-all shadow-md cursor-pointer text-center"
                >
                  Aceptar todas
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
