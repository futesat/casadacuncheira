import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bed,
  Bath,
  Users,
  Wifi,
  Tv,
  Coffee,
  Thermometer,
  Waves,
  Snowflake,
  Trees,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function House() {
  const { t } = useLanguage();
  const [fullscreenIndex, setFullscreenIndex] = React.useState<number | null>(null);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const imageNames = [
    'house_1.jpg',
    'living_room_1.jpg',
    'living_room_4.jpg',
    'living_dining_stairs_2.jpg',
    'dining_kitchen_2.jpg',
    'dining_kitchen_3.jpg',
    'kitchen_3.jpg',
    'kitchen_6.jpg',
    'bedroom_downstairs_3.jpg',
    'bedroom_left_4.jpg',
    'bedroom_right_3.jpg',
    'terrace_2.jpg',
    'terrace_6.jpg',
    'terrace_8.jpg',
    'finisterre_from_house_2.jpg',
    'finisterre_drone_1.jpg',
    'moa_from_house_1.jpg',
    'monte_louro.jpg',
    'location.jpg',
  ];

  const images = imageNames.map(
    (name) => `${(import.meta as any).env.BASE_URL}images/house/${name}`
  );

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (fullscreenIndex === null) return;
      if (e.key === 'Escape') {
        setFullscreenIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setFullscreenIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      } else if (e.key === 'ArrowRight') {
        setFullscreenIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      }
    },
    [fullscreenIndex, images.length]
  );

  React.useEffect(() => {
    if (fullscreenIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreenIndex, handleKeyDown]);

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullscreenIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullscreenIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
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
    { icon: Thermometer, label: t('house.amenities.heating') },
    { icon: Waves, label: t('house.amenities.view') },
    { icon: Snowflake, label: t('house.amenities.ac') },
    { icon: Trees, label: t('house.amenities.garden') },
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
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div
                    onClick={() => setFullscreenIndex(index)}
                    className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[600px] overflow-hidden bg-black cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver foto ${index + 1} a pantalla completa`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setFullscreenIndex(index);
                      }
                    }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Interior ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-3 rounded-full backdrop-blur-sm shadow-lg">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 [&_button]:bg-white/30 [&_button.bg-primary]:bg-white [&_button.bg-primary]:w-6" />
          </Carousel>
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none"
            onClick={() => setFullscreenIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setFullscreenIndex(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Cerrar pantalla completa"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
              {fullscreenIndex + 1} / {images.length}
            </div>

            {/* Previous button */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image display */}
            <motion.div
              key={fullscreenIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={images[fullscreenIndex]}
                alt={`Interior ${fullscreenIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
