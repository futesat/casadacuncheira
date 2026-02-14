import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hola@costadamorte.com',
      href: 'mailto:hola@costadamorte.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 981 000 000',
      href: 'tel:+34981000000',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Casa Da Cuncheira - Casa Azul, Ad, Aldea Carballal, 70, 15292 Carnota, A Coruña',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/casa_da_cuncheira/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/casadacuncheira/', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-8 bg-muted rounded-2xl hover:bg-secondary/50 transition-all group"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-2">{info.label}</div>
              <div className="text-center">{info.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-muted rounded-2xl overflow-hidden h-96 mb-12 relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.650881069634!2d-9.1235535!3d42.8033613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f2a0d06893c63%3A0x43153559f7b4b3bb!2sCasa%20da%20Cuncheira!5e0!3m2!1sen!2ses!4v1707950000000!5m2!1sen!2ses&maptype=satellite"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Casa da Cuncheira"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
