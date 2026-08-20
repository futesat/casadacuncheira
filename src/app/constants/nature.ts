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
    metaTitle?: string;
    metaDescription?: string;
    relatedSlugs?: string[];
}

export const getNatureData = (t: (key: string) => any): Record<string, NatureLocation> => ({
    'praia-carnota': {
        title: t('location.carnota.title'),
        summary: t('location.carnota.desc'),
        description: t('location.carnota.longDesc'),
        metaTitle: t('seo.carnotaTitle'),
        metaDescription: t('seo.carnotaDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/carnota_beach_optimized.webp`,
        location: 'Carnota, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/Praia+de+Carnota/@42.8256331,-9.1121822,14z/',
        highlights: [
            t('nature.carnota.h1'),
            t('nature.carnota.h2'),
            t('nature.carnota.h3')
        ],
        relatedSlugs: ['monte-pindo', 'lira-carnota', 'que-ver-en-carnota']
    },
    'monte-pindo': {
        title: t('location.pindo.title'),
        summary: t('location.pindo.desc'),
        description: t('location.pindo.longDesc'),
        metaTitle: t('seo.pindoTitle'),
        metaDescription: t('seo.pindoDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/moa_view_optimized.webp`,
        location: 'Carnota, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/A+Moa/@42.8949021,-9.1066704,15z/',
        gpxPath: `${(import.meta as any).env.BASE_URL}gpx/a-moa.gpx`,
        highlights: [
            t('nature.pindo.h1'),
            t('nature.pindo.h2'),
            t('nature.pindo.h3')
        ],
        relatedSlugs: ['fervenza-do-ezaro', 'praia-carnota', 'que-ver-en-carnota']
    },
    'lira-carnota': {
        title: t('location.lira.title'),
        summary: t('location.lira.desc'),
        description: t('location.lira.longDesc'),
        metaTitle: t('seo.liraTitle'),
        metaDescription: t('seo.liraDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/house/moa_beach.webp`,
        location: 'Lira, Carnota (A Coruña)',
        googleMaps: 'https://www.google.com/maps/place/Lira,+15292+Carnota,+A+Coru%C3%B1a/',
        highlights: [
            t('nature.lira.h1'),
            t('nature.lira.h2'),
            t('nature.lira.h3')
        ],
        relatedSlugs: ['praia-carnota', 'que-ver-en-carnota', 'monte-pindo']
    },
    'que-ver-en-carnota': {
        title: t('location.carnota_guide.title'),
        summary: t('location.carnota_guide.desc'),
        description: t('location.carnota_guide.longDesc'),
        metaTitle: t('seo.carnotaGuideTitle'),
        metaDescription: t('seo.carnotaGuideDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/carnota_beach_optimized.webp`,
        location: 'Carnota, Costa da Morte',
        googleMaps: 'https://www.google.com/maps/place/Carnota,+A+Coru%C3%B1a/',
        highlights: [
            t('nature.carnota_guide.h1'),
            t('nature.carnota_guide.h2'),
            t('nature.carnota_guide.h3')
        ],
        relatedSlugs: ['praia-carnota', 'monte-pindo', 'lira-carnota', 'fervenza-do-ezaro']
    },
    'monte-louro': {
        title: t('location.louro.title'),
        summary: t('location.louro.desc'),
        description: t('location.louro.longDesc'),
        metaTitle: t('seo.louroTitle'),
        metaDescription: t('seo.louroDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/monte_louro_optimized.webp`,
        location: 'Louro, Muros',
        googleMaps: 'https://www.google.com/maps/place/Monte+Louro/@42.741088,-9.0784407,15.25z/',
        highlights: [
            t('nature.louro.h1'),
            t('nature.louro.h2'),
            t('nature.louro.h3')
        ],
        relatedSlugs: ['que-ver-en-carnota', 'praia-carnota', 'lira-carnota']
    },
    'fervenza-do-ezaro': {
        title: t('location.ezaro.title'),
        summary: t('location.ezaro.desc'),
        description: t('location.ezaro.longDesc'),
        metaTitle: t('seo.ezaroTitle'),
        metaDescription: t('seo.ezaroDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/ezaro.webp`,
        location: 'Ézaro, Dumbría',
        googleMaps: 'https://www.google.com/maps/place/Fervenza+do+%C3%89zaro/@42.9127818,-9.1163152,17z/',
        highlights: [
            t('nature.ezaro.h1'),
            t('nature.ezaro.h2'),
            t('nature.ezaro.h3')
        ],
        youtubeId: 'zNO89I471V4',
        relatedSlugs: ['monte-pindo', 'cabo-finisterre', 'que-ver-en-carnota']
    },
    'cabo-finisterre': {
        title: t('location.fisterra.title'),
        summary: t('location.fisterra.desc'),
        description: t('location.fisterra.longDesc'),
        metaTitle: t('seo.fisterraTitle'),
        metaDescription: t('seo.fisterraDescription'),
        image: `${(import.meta as any).env.BASE_URL}images/fisterra_optimized.webp`,
        location: 'Fisterra, A Coruña',
        googleMaps: 'https://www.google.com/maps/place/Cabo+Fisterra/@42.8824334,-9.2721869,15.25z/',
        highlights: [
            t('nature.fisterra.h1'),
            t('nature.fisterra.h2'),
            t('nature.fisterra.h3')
        ],
        relatedSlugs: ['fervenza-do-ezaro', 'monte-pindo', 'que-ver-en-carnota']
    },
    'atardeceres-magicos': {
        title: t('nature.sunset.title'),
        summary: t('nature.sunset.summary'),
        description: t('nature.sunset.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/fisterra_sunset_optimized.webp`,
        location: 'A Costa da Morte',
        highlights: [
            t('nature.sunset.h1'),
            t('nature.sunset.h2'),
            t('nature.sunset.h3')
        ],
        relatedSlugs: ['cabo-finisterre', 'praia-carnota', 'lira-carnota']
    },
    'pueblos-marineros': {
        title: t('nature.villages.title'),
        summary: t('nature.villages.summary'),
        description: t('nature.villages.longDesc'),
        image: `${(import.meta as any).env.BASE_URL}images/muros_villages_optimized.webp`,
        location: 'Península de O Barbanza & Ría de Muros e Noia',
        highlights: [
            t('nature.villages.h1'),
            t('nature.villages.h2'),
            t('nature.villages.h3')
        ],
        relatedSlugs: ['lira-carnota', 'monte-louro', 'que-ver-en-carnota']
    }
});
