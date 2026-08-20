import React from 'react';
import { createPortal } from 'react-dom';
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

  // Fotos horizontales optimizadas para el carrusel en la página
  const carouselImageNames = [
    'house_1.webp',
    'living_room_1.webp',
    'living_room_4.webp',
    'living_dining_stairs_2.webp',
    'dining_kitchen_2.webp',
    'dining_kitchen_3.webp',
    'kitchen_3.webp',
    'kitchen_6.webp',
    'bedroom_downstairs_3.webp',
    'bedroom_left_4.webp',
    'bedroom_right_3.webp',
    'terrace_2.webp',
    'terrace_6.webp',
    'terrace_8.webp',
    'finisterre_from_house_2.webp',
    'finisterre_drone_1.webp',
    'moa_from_house_1.webp',
    'carnota_beach.webp',
    'moa_beach.webp',
    'monte_louro.webp',
    'location.webp',
    'dron_house.webp',
  ];

  // Listado completo y ampliado de fotos (verticales y horizontales) para pantalla completa
  const allImageNames = [
    'house_1.webp',
    'dron_house.webp',
    'living_room_1.webp',
    'living_room_4.webp',
    'living_dining_stairs_2.webp',
    'dining_kitchen_2.webp',
    'dining_kitchen_3.webp',
    'kitchen_1.webp',
    'kitchen_3.webp',
    'kitchen_6.webp',
    'stairs_3.webp',
    'stairs_4.webp',
    'stairs_6.webp',
    'laundry_room_2.webp',
    'bedroom_downstairs_3.webp',
    'bathroom_downstairs_0.webp',
    'bedroom_central_1.webp',
    'bedroom_central_2.webp',
    'bedroom_central_3.webp',
    'bedroom_central_4.webp',
    'bedroom_central_7.webp',
    'bedroom_central_8.webp',
    'bedroom_left_1.webp',
    'bedroom_left_2.webp',
    'bedroom_left_4.webp',
    'bedroom_right_2.webp',
    'bedroom_right_3.webp',
    'bedroom_right_5.webp',
    'bedroom_right_6.webp',
    'terrace_2.webp',
    'terrace_6.webp',
    'terrace_8.webp',
    'finisterre_from_house_2.webp',
    'finisterre_drone_1.webp',
    'moa_from_house_1.webp',
    'carnota_beach.webp',
    'moa_beach.webp',
    'monte_louro.webp',
    'location.webp',
  ];

  const imageAltMap: Record<string, string> = {
    'house_1.webp': 'Fachada exterior de Casa da Cuncheira en Lira, Carnota',
    'dron_house.webp': 'Vista aérea con dron de Casa da Cuncheira y el litoral de Lira',
    'living_room_1.webp': 'Salón principal de Casa da Cuncheira con sofás confortables y vistas al mar',
    'living_room_4.webp': 'Zona de estar y lectura luminosa en Casa da Cuncheira',
    'living_dining_stairs_2.webp': 'Espacio abierto de salón comedor y escaleras de diseño',
    'dining_kitchen_2.webp': 'Comedor con mesa familiar para 6 personas y luz natural',
    'dining_kitchen_3.webp': 'Zona de comedor conectada con la cocina equipada',
    'kitchen_1.webp': 'Cocina moderna y espaciosa de Casa da Cuncheira',
    'kitchen_3.webp': 'Cocina completa con vitrocerámica, horno y electrodomésticos',
    'kitchen_6.webp': 'Detalle de menaje y equipamiento de cocina en Casa da Cuncheira',
    'stairs_3.webp': 'Escalera interior de madera de acceso a la planta alta',
    'stairs_4.webp': 'Detalle arquitectónico interior de la casa',
    'stairs_6.webp': 'Distribuidor y escalera de madera natural',
    'laundry_room_2.webp': 'Zona de lavandería con lavadora y espacio de plancha',
    'bedroom_downstairs_3.webp': 'Dormitorio acogedor en planta baja con cama doble',
    'bathroom_downstairs_0.webp': 'Cuarto de baño completo con ducha en planta baja',
    'bedroom_central_1.webp': 'Dormitorio principal con cama de matrimonio y luz exterior',
    'bedroom_central_2.webp': 'Cama doble espaciosa en dormitorio principal',
    'bedroom_central_3.webp': 'Vistas al paisaje gallego desde la habitación',
    'bedroom_central_4.webp': 'Decoración cálida y ropa de cama en dormitorio',
    'bedroom_central_7.webp': 'Habitación luminosa con mobiliario confortable',
    'bedroom_central_8.webp': 'Detalle de confort y descanso en Casa da Cuncheira',
    'bedroom_left_1.webp': 'Segundo dormitorio con cama de matrimonio y armario',
    'bedroom_left_2.webp': 'Espacio de descanso y almacenaje en habitación',
    'bedroom_left_4.webp': 'Dormitorio con ventana exterior y luz natural',
    'bedroom_right_2.webp': 'Tercer dormitorio con camas individuales confortables',
    'bedroom_right_3.webp': 'Habitación doble ideal para familias o amigos',
    'bedroom_right_5.webp': 'Detalle de lámpara y mesita en dormitorio',
    'bedroom_right_6.webp': 'Ambiente tranquilo y acogedor en dormitorio',
    'terrace_2.webp': 'Terraza exterior con mesa y vistas panorámicas al océano Atlántico',
    'terrace_6.webp': 'Zona exterior para disfrutar de los atardeceres en Carnota',
    'terrace_8.webp': 'Terraza y jardín de Casa da Cuncheira con vistas al mar',
    'finisterre_from_house_2.webp': 'Vistas lejanas hacia el Cabo Finisterre desde la propiedad',
    'finisterre_drone_1.webp': 'Panorámica de la Costa da Morte y el horizonte atlántico',
    'moa_from_house_1.webp': 'Vistas hacia el Monte Pindo y pico de A Moa desde Casa da Cuncheira',
    'carnota_beach.webp': 'Arenal virgen de la Playa de Carnota en la Costa da Morte',
    'moa_beach.webp': 'Playa y entorno costero entre Carnota y Monte Pindo',
    'monte_louro.webp': 'Vistas al Monte Louro y la entrada de la ría de Muros e Noia',
    'location.webp': 'Mapa y entorno geográfico de Lira, Carnota en Galicia',
  };

  const getImageAlt = (name: string, index: number) => {
    return imageAltMap[name] || `Fotografía ${index + 1} de Casa da Cuncheira en Carnota`;
  };

  const carouselImages = carouselImageNames.map(
    (name) => `${(import.meta as any).env.BASE_URL}images/house/${name}`
  );

  const allImages = allImageNames.map(
    (name) => `${(import.meta as any).env.BASE_URL}images/house/${name}`
  );

  const openFullscreen = (carouselIndex: number) => {
    const targetName = carouselImageNames[carouselIndex];
    const fullIdx = allImageNames.indexOf(targetName);
    setFullscreenIndex(fullIdx !== -1 ? fullIdx : 0);
  };

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (fullscreenIndex === null) return;
      if (e.key === 'Escape') {
        setFullscreenIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setFullscreenIndex((prev) =>
          prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
        );
      } else if (e.key === 'ArrowRight') {
        setFullscreenIndex((prev) =>
          prev !== null ? (prev + 1) % allImages.length : null
        );
      }
    },
    [fullscreenIndex, allImages.length]
  );

  React.useEffect(() => {
    if (fullscreenIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreenIndex, handleKeyDown]);

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullscreenIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
    );
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFullscreenIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            Vivienda de uso turístico · VUT-CO-002236
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            {t('house.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
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
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div
                    onClick={() => openFullscreen(index)}
                    className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[600px] overflow-hidden bg-black cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver foto ${index + 1} a pantalla completa`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openFullscreen(index);
                      }
                    }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={getImageAlt(carouselImageNames[index], index)}
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
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {fullscreenIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none"
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
                  {fullscreenIndex + 1} / {allImages.length}
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
                    src={allImages[fullscreenIndex]}
                    alt={getImageAlt(allImageNames[fullscreenIndex], fullscreenIndex)}
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
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
