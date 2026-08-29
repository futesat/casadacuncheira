import { motion } from 'motion/react';
import { Star, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AIRBNB_LISTING_URL = 'https://www.airbnb.es/rooms/21168267';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials[0].author'),
      location: t('testimonials[0].location'),
      text: t('testimonials[0].text'),
      rating: 5,
      avatarBg: 'bg-primary/10 text-primary',
      initials: 'N',
    },
    {
      name: t('testimonials[1].author'),
      location: t('testimonials[1].location'),
      text: t('testimonials[1].text'),
      rating: 5,
      avatarBg: 'bg-primary/10 text-primary',
      initials: 'V',
    },
    {
      name: t('testimonials[2].author'),
      location: t('testimonials[2].location'),
      text: t('testimonials[2].text'),
      rating: 5,
      avatarBg: 'bg-primary/10 text-primary',
      initials: 'M',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            <svg
              className="w-3.5 h-3.5 fill-current text-[#FF385C]"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.54-3.567 7.806-8.25 7.806-3.376 0-6.195-1.782-7.5-4.66-1.305 2.878-4.124 4.66-7.5 4.66-4.683 0-8.25-3.266-8.25-7.806 0-1.127.31-2.296.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.037 1.963 10.492 1 12.5 1h3.5zm0 3h-3.5c-1.118 0-2.023.518-2.96 2.19l-.497.955C7.2 10.79 3.109 19.38 2.164 21.579l-.141.344C1.442 23.161 1.2 24.088 1.2 24.878 1.2 28.09 3.864 30.6 7.25 30.6c2.793 0 5.228-1.637 6.4-4.272l.448-1.01.448 1.01c1.172 2.635 3.607 4.272 6.4 4.272 3.386 0 6.05-2.51 6.05-5.722 0-.79-.242-1.717-.823-2.955l-.141-.344C24.891 19.38 20.8 10.79 18.957 7.145l-.497-.955C17.523 4.518 16.618 4 15.5 4H16zm0 11c2.761 0 5 2.239 5 5 0 2.227-1.458 4.116-3.486 4.764l-.514.144C16.66 24.97 16.335 25 16 25c-.335 0-.66-.03-.974-.088l-.514-.144C12.458 24.116 11 22.227 11 20c0-2.761 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3 0 1.306.835 2.418 2 2.83V20a1 1 0 012 0v2.83c1.165-.412 2-1.524 2-2.83 0-1.657-1.343-3-3-3z"/>
            </svg>
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>{t('testimonials.verified')}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.avatarBg} font-medium text-sm flex items-center justify-center shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-light">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Link to Airbnb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={AIRBNB_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-white/90 transition-all shadow-sm hover:shadow-md border border-border/60 cursor-pointer group"
          >
            <svg
              className="w-4 h-4 fill-current text-[#FF385C]"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.54-3.567 7.806-8.25 7.806-3.376 0-6.195-1.782-7.5-4.66-1.305 2.878-4.124 4.66-7.5 4.66-4.683 0-8.25-3.266-8.25-7.806 0-1.127.31-2.296.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.037 1.963 10.492 1 12.5 1h3.5zm0 3h-3.5c-1.118 0-2.023.518-2.96 2.19l-.497.955C7.2 10.79 3.109 19.38 2.164 21.579l-.141.344C1.442 23.161 1.2 24.088 1.2 24.878 1.2 28.09 3.864 30.6 7.25 30.6c2.793 0 5.228-1.637 6.4-4.272l.448-1.01.448 1.01c1.172 2.635 3.607 4.272 6.4 4.272 3.386 0 6.05-2.51 6.05-5.722 0-.79-.242-1.717-.823-2.955l-.141-.344C24.891 19.38 20.8 10.79 18.957 7.145l-.497-.955C17.523 4.518 16.618 4 15.5 4H16zm0 11c2.761 0 5 2.239 5 5 0 2.227-1.458 4.116-3.486 4.764l-.514.144C16.66 24.97 16.335 25 16 25c-.335 0-.66-.03-.974-.088l-.514-.144C12.458 24.116 11 22.227 11 20c0-2.761 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3 0 1.306.835 2.418 2 2.83V20a1 1 0 012 0v2.83c1.165-.412 2-1.524 2-2.83 0-1.657-1.343-3-3-3z"/>
            </svg>
            <span>{t('testimonials.cta')}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
