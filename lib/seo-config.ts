// SEO Configuration for MSYazılımDuo
export const seoConfig = {
  siteName: "MSYazılımDuo - Bursa Yazılım",
  baseUrl: "https://msduoyazilim.com",
  description: "Bursa yazılım firması MSYazılımDuo ile profesyonel web sitesi, mobil uygulama ve yazılım geliştirme hizmetleri. Next.js, React, Node.js ile kurumsal çözümler.",
  
  // Contact information
  contact: {
    phone: "+90-535-529-7508",
    email: "info@msduoyazilim.com",
    address: "Bursa, Türkiye",
  },

  // Organization schema
  organization: {
    name: "MSYazılımDuo",
    foundingDate: "2020",
    location: "Bursa, Turkey",
    rating: {
      value: 4.9,
      count: 120,
    },
  },

  // Keywords for SEO
  keywords: {
    primary: [
      "bursa yazılım",
      "bursa yazılım firması",
      "bursa yazılım şirketi",
      "bursa web tasarım",
      "bursa web sitesi",
    ],
    secondary: [
      "yazılım geliştirme bursa",
      "mobil uygulama bursa",
      "e-ticaret bursa",
      "web geliştirme bursa",
      "react geliştirme",
      "next.js bursa",
      "node.js bursa",
    ],
  },

  // Social media profiles
  socialLinks: {
    instagram: "https://www.instagram.com/INSTAGRAM",
    linkedin: "https://www.linkedin.com/company/LINKEDIN",
    twitter: "https://twitter.com/TWITTER",
    facebook: "https://www.facebook.com/FACEBOOK",
    github: "https://github.com",
  },

  // Services for schema markup
  services: [
    {
      name: "Web Site Geliştirme",
      description: "Modern web siteleri, e-ticaret platformları ve kurumsal uygulamalar",
      url: "#web-development",
    },
    {
      name: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android mobil uygulamalar, React Native ile çapraz platform geliştirme",
      url: "#mobile-development",
    },
    {
      name: "Yazılım Konsültasyonu",
      description: "Kurumsal yazılım çözümleri, teknik danışmanlık ve proje yönetimi",
      url: "#consultation",
    },
  ],

  // Technology stack for schema
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],

  // Performance hints
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    caching: 31536000, // 1 year in seconds
  },
};

// JSON-LD Schema generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareCompany", "LocalBusiness"],
    "name": seoConfig.organization.name,
    "url": seoConfig.baseUrl,
    "logo": `${seoConfig.baseUrl}/logo.png`,
    "image": `${seoConfig.baseUrl}/og-image.png`,
    "description": seoConfig.description,
    "telephone": seoConfig.contact.phone,
    "email": seoConfig.contact.email,
    "foundingDate": seoConfig.organization.foundingDate,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bursa",
      "addressRegion": "TR-16",
      "addressCountry": "TR",
      "postalCode": "16000",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye",
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": seoConfig.organization.rating.value,
      "reviewCount": seoConfig.organization.rating.count,
    },
    "sameAs": Object.values(seoConfig.socialLinks),
    "contact": {
      "@type": "ContactPoint",
      "telephone": seoConfig.contact.phone,
      "contactType": "Business Support",
      "areaServed": "TR",
      "availableLanguage": ["tr", "en"],
    },
    "knowsAbout": seoConfig.technologies,
  };
}

export function generateServicesSchema() {
  return seoConfig.services.map(service => ({
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": `${seoConfig.baseUrl}${service.url}`,
    "provider": {
      "@type": "Organization",
      "name": seoConfig.organization.name,
    },
  }));
}
