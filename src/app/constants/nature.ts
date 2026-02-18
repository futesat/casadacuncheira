export interface NatureLocation {
    title: string;
    summary: string;
    description: string;
    image: string;
    location: string;
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
        highlights: [
            t('nature.fisterra.h1'),
            t('nature.fisterra.h2'),
            t('nature.fisterra.h3')
        ]
    }
});
