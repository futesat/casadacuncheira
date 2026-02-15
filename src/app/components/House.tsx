import { motion } from 'motion/react';
import { Bed, Bath, Users, Wifi, Tv, Coffee, Wind, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function House() {
  const { t } = useLanguage();

  const images = [
    `${import.meta.env.BASE_URL}images/house/casa.jpg`,
    `${import.meta.env.BASE_URL}images/house/habitacion1.jpg`,
    `${import.meta.env.BASE_URL}images/house/habitacion2.jpg`,
    `${import.meta.env.BASE_URL}images/house/habitacion3.jpg`,
    `${import.meta.env.BASE_URL}images/house/baño.jpg`,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
  };

  const features = [
    { icon: Bed, label: '4', subtitle: t('house.bedrooms') },
    { icon: Bath, label: '2', subtitle: t('house.bathrooms') },
    { icon: Users, label: '6', subtitle: t('house.capacity') },
  ];

  const amenities = [
    { icon: Wifi, label: t('house.amenities.wifi') },
    { icon: Tv, label: t('house.amenities.tv') },
    { icon: Coffee, label: t('house.amenities.kitchen') },
    { icon: Wind, label: t('house.amenities.heating') },
    { icon: Waves, label: t('house.amenities.view') },
  ];

  return (
    <section id="house" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            {t('house.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            {t('house.description')}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
                <img
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Main Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/30 rounded-2xl p-8"
          >
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl mb-1">{feature.label}</div>
                  <div className="text-sm text-muted-foreground">{feature.subtitle}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <amenity.icon className="w-5 h-5 text-accent" />
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
