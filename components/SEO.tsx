
import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website' 
}) => {
  const siteTitle = COMPANY_INFO.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Máy Phát Điện Công Nghiệp Chính Hãng`;
  const defaultDescription = "VNGPOWER chuyên cung cấp máy phát điện công nghiệp Cummins, Hyundai, Mitsubishi chính hãng. Dịch vụ bảo trì, sửa chữa uy tín toàn quốc.";
  const metaDescription = description || defaultDescription;
  const metaImage = image || 'https://images.unsplash.com/photo-1565619624098-e65978406562?q=80&w=1200&auto=format&fit=crop';
  const metaUrl = url || window.location.href;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper function to update or create meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'description', metaDescription);

    // 4. Update Open Graph Tags (Facebook/Zalo)
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:image', metaImage);
    setMetaTag('property', 'og:url', metaUrl);
    setMetaTag('property', 'og:site_name', siteTitle);

    // 5. Update Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', metaImage);

  }, [fullTitle, metaDescription, metaImage, metaUrl, type, siteTitle]);

  return null;
};

export default SEO;
