export interface Restaurant {
    name: string;
    description: string;
    image: string;
    location: string;
    type: string;
    rating: number;
    website: string;
    phone?: string;
    googleMaps?: string;
}

export const getRestaurants = (t: (key: string) => any): Restaurant[] => [
    {
        name: 'Mar da\'morosa',
        description: t('gastronomy.morosa.desc'),
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
        location: 'Mallou, 182, 15293 Carnota, A Coruña',
        type: t('gastronomy.type.seafood'),
        rating: 4.6,
        website: 'https://amorosarestaurante.com',
        phone: '+34 981 857 463',
        googleMaps: 'https://www.google.com/maps/place/Mar+da+Morosa/@42.8149197,-9.1037103,631m/data=!3m3!1e3!4b1!5s0xd2ed6007edb3cfb:0x5fa64f6c604b794!4m6!3m5!1s0xd2ed7940011d765:0x4d515bb16e57e3fb!8m2!3d42.8149158!4d-9.1011354!16s%2Fg%2F11ghf_wsbv?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'A Chalana de Rucho',
        description: t('gastronomy.chalana.desc'),
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80',
        location: 'Aldea Carballal - Lira, 72, 15292 Carnota, A Coruña',
        type: t('gastronomy.type.tapas'),
        rating: 4.3,
        website: 'https://achalanaderucho.es',
        phone: '+34 981 761 314',
        googleMaps: 'https://www.google.com/maps/place/A+Chalana+de+Rucho/@42.8027754,-9.12331,631m/data=!3m2!1e3!4b1!4m9!3m8!1s0xd2f2a0d0aedf16d:0x7ffa9556780b43de!5m2!4m1!1i2!8m2!3d42.8027715!4d-9.1207351!16s%2Fg%2F11df0fy80k?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'O Cuberto',
        description: t('gastronomy.ocuberto.desc'),
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80',
        location: 'Rúa Igrexas, 15293 Carnota, A Coruña',
        type: t('gastronomy.type.tapas'),
        rating: 4.6,
        website: 'https://ocubertocarnota.com',
        phone: '+34 664 392 010',
        googleMaps: 'https://www.google.com/maps/place/O+Cuberto/@42.8234723,-9.0925967,631m/data=!3m1!1e3!4m6!3m5!1s0xd2ed6100195ce07:0x52d8013a9ca2eb5c!8m2!3d42.8234684!4d-9.0900218!16s%2Fg%2F11c0py_fhl?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        name: 'O Moncho Burguer',
        description: t('gastronomy.moncho.desc'),
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80',
        location: 'Rúa Lira S/N, 15292 Carnota, A Coruña',
        type: t('gastronomy.type.burger'),
        rating: 4.6,
        website: 'https://omonchoburguer.com',
        phone: '+34 680 280 812',
        googleMaps: 'https://www.google.com/maps/place/O%E2%80%99Moncho+burguer/@42.8028893,-9.1286953,631m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd2f2a6daefb85b5:0xa417f7b282aff2fb!8m2!3d42.8028893!4d-9.1286953!16s%2Fg%2F119vwc9dt?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    }
];
