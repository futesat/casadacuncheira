import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: STATIC_TEXTS.email,
      href: `mailto:${STATIC_TEXTS.email}`,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: STATIC_TEXTS.phone,
      href: `tel:${STATIC_TEXTS.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: STATIC_TEXTS.location,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: STATIC_TEXTS.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: STATIC_TEXTS.social.facebook, label: 'Facebook' },
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
            src={STATIC_TEXTS.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contact.mapTitle')}
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
