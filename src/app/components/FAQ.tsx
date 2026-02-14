import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuál es la política de cancelación?',
      answer: 'Cancelación gratuita hasta 7 días antes de la llegada. Entre 7 y 3 días antes, se cobra el 50% del total. Menos de 3 días, no hay reembolso.',
    },
    {
      question: '¿Se admiten mascotas?',
      answer: 'Sí, admitimos mascotas pequeñas y medianas con un cargo adicional de 20€ por estancia. Por favor, indícalo en tu reserva.',
    },
    {
      question: '¿Hay WiFi y qué velocidad tiene?',
      answer: 'Sí, la casa tiene WiFi de fibra óptica de alta velocidad (100 Mbps), perfecto para trabajar en remoto o disfrutar de entretenimiento.',
    },
    {
      question: '¿A qué distancia está la playa?',
      answer: 'La Playa de Carnota está a solo 10 minutos en coche. También hay otras playas preciosas a 15-20 minutos.',
    },
    {
      question: '¿Hay supermercados cerca?',
      answer: 'Sí, en Cee y Muros (a 10 minutos) hay supermercados, farmacias y todo lo necesario. También hay panaderías locales.',
    },
    {
      question: '¿Es necesario coche?',
      answer: 'Sí, recomendamos tener coche para explorar la zona cómodamente, aunque también hay opciones de transporte local.',
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas saber antes de reservar
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
              >
                <span className="pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
