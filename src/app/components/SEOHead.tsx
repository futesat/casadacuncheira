import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { STATIC_TEXTS } from '../constants/static';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'place';
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

export function SEOHead({
  title,
  description,
  canonicalUrl = 'https://www.casadacuncheira.com/',
  ogImage = 'https://www.casadacuncheira.com/images/hero_optimized.webp',
  ogType = 'website',
  structuredData,
}: SEOHeadProps) {
  const { language, t } = useLanguage();

  const finalTitle = title || t('seo.defaultTitle') || `${STATIC_TEXTS.brand} | Alojamiento vacacional en Lira, Carnota`;
  const finalDescription = description || t('seo.defaultDescription') || 'Descubre Casa da Cuncheira, alojamiento vacacional en Lira, Carnota. Casa completa para 6 personas con vistas al mar, wifi 5G y terraza en plena Costa da Morte.';

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // 2. Update html lang attribute
    document.documentElement.lang = language || 'es';

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 3. Meta Description
    setMetaTag('description', finalDescription);

    // 4. Open Graph Tags
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDescription, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', STATIC_TEXTS.brand, true);
    setMetaTag('og:locale', language === 'gl' ? 'gl_ES' : language === 'en' ? 'en_US' : `${language}_${language.toUpperCase()}`, true);

    // 5. Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDescription);
    setMetaTag('twitter:image', ogImage);

    // 6. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;

    // 7. Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Clean up dynamic JSON-LD when component unmounts if needed
      const existingScript = document.getElementById('dynamic-jsonld');
      if (existingScript) {
        existingScript.textContent = '';
      }
    };
  }, [finalTitle, finalDescription, canonicalUrl, ogImage, ogType, language, structuredData]);

  return null;
}
