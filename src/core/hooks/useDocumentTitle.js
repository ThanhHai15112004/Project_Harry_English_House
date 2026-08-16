import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_INFO } from '../constants';

/**
 * Custom Hook to dynamically update document title and meta description
 * Automatically syncs with active language (VI / EN)
 * 
 * @param {string|object} pageKeyOrConfig - i18n key under 'seo.' or config object
 * @param {string} [customTitle] - Optional custom title override
 */
export const useDocumentTitle = (pageKeyOrConfig, customTitle = null) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let title = '';
    let description = '';

    if (typeof pageKeyOrConfig === 'string') {
      const seoKey = `seo.${pageKeyOrConfig}`;
      title = customTitle || t(`${seoKey}.title`, { defaultValue: `${APP_INFO.BRAND_NAME}` });
      description = t(`${seoKey}.desc`, { defaultValue: APP_INFO.SUBTITLE });
    } else if (typeof pageKeyOrConfig === 'object' && pageKeyOrConfig !== null) {
      title = pageKeyOrConfig.title || APP_INFO.BRAND_NAME;
      description = pageKeyOrConfig.description || APP_INFO.SUBTITLE;
    } else {
      title = APP_INFO.BRAND_NAME;
      description = APP_INFO.SUBTITLE;
    }

    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title & Description for social sharing SEO
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);
  }, [pageKeyOrConfig, customTitle, i18n.language, t]);
};

export default useDocumentTitle;
