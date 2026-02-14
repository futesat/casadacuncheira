/// <reference types="vite/client" />

declare module '*.jpg' {
    const jpgContent: string;
    export default jpgContent;
}

declare module '*.png' {
    const pngContent: string;
    export default pngContent;
}

declare module '*.svg' {
    const svgContent: string;
    export default svgContent;
}

declare module 'react-slick';
