import { motion } from 'motion/react';
import { Waves, Mountain, Sun, Wind } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Costa Atlántica',
      description: 'Playas salvajes y acantilados impresionantes',
    },
    {
      icon: Mountain,
      title: 'Monte Pindo',
      description: 'El Olimpo celta con vistas únicas',
    },
    {
      icon: Sun,
      title: 'Atardeceres Mágicos',
      description: 'Las mejores puestas de sol de Galicia',
    },
    {
      icon: Wind,
      title: 'Aire Puro',
      description: 'Naturaleza en estado puro',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
