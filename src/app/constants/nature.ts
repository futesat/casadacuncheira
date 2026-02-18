export interface NatureLocation {
    title: string;
    summary: string;
    description: string;
    image: string;
    location: string;
    googleMaps?: string;
    highlights: string[];
    gpxPath?: string;
    youtubeId?: string;
}

export const getNatureData = (t: (key: string) => any): Record<string, NatureLocation> => ({
    'praia-carnota': {
        title: t('location.carnota.title'),
        summary: t('location.carnota.desc'),
        description: t('location.carnota.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/carnota_beach_optimized.webp`,
        location: 'Carnota, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/Praia+de+Carnota/@42.8256331,-9.1121822,14z/',
        highlights: [
            t('nature.carnota.h1'),
            t('nature.carnota.h2'),
            t('nature.carnota.h3')
        ]
    },
    'monte-pindo': {
        title: t('location.pindo.title'),
        summary: t('location.pindo.desc'),
        description: t('location.pindo.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/moa_view_optimized.webp`,
        location: 'Carnota, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/A+Moa/@42.8949021,-9.1066704,15z/',
        gpxPath: `${(import.meta as any).env.BASE_URL}gpx/a-moa.gpx`,
        highlights: [
            t('nature.pindo.h1'),
            t('nature.pindo.h2'),
            t('nature.pindo.h3')
        ]
    },
    'monte-louro': {
        title: t('location.louro.title'),
        summary: t('location.louro.desc'),
        description: t('location.louro.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/monte_louro_optimized.webp`,
        location: 'Louro, Muros',
        googleMaps: 'https://www.google.com/maps/place/Monte+Louro/@42.741088,-9.0784407,15.25z/',
        highlights: [
            t('nature.louro.h1'),
            t('nature.louro.h2'),
            t('nature.louro.h3')
        ]
    },
    'fervenza-do-ezaro': {
        title: t('location.ezaro.title'),
        summary: t('location.ezaro.desc'),
        description: t('location.ezaro.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/ezaro.webp`,
        location: 'Ézaro, Dumbría',
        googleMaps: 'https://www.google.com/maps/place/Fervenza+do+%C3%89zaro/@42.9127818,-9.1163152,17z/',
        highlights: [
            t('nature.ezaro.h1'),
            t('nature.ezaro.h2'),
            t('nature.ezaro.h3')
        ],
        youtubeId: 'zNO89I471V4'
    },
    'cabo-finisterre': {
        title: t('location.fisterra.title'),
        summary: t('location.fisterra.desc'),
        description: t('location.fisterra.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/fisterra_optimized.webp`,
        location: 'Fisterra, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/Cabo+Fisterra/@42.8824334,-9.2721869,15.25z/',
        highlights: [
            t('nature.fisterra.h1'),
            t('nature.fisterra.h2'),
            t('nature.fisterra.h3')
        ]
    }
});
