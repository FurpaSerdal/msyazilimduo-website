import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://msduoyazilim.com"),
  title: {
    default: "Bursa Yazılım Firması | msduoyazilim - Bursa Yazılım Geliştirme Hizmetleri",
    template: "%s | msduoyazilim Bursa Yazılım",
  },
  description:
    "Bursa yazılım firması msduoyazilim - Bursa yazılım geliştirme, Bursa yazılım ekibi ile profesyonel web sitesi, mobil uygulama ve e-ticaret çözümleri. Bursa'da yazılım geliştirme hizmetleri, React, Next.js, Node.js. 20+ başarılı proje, güvenilir Bursa yazılım şirketi.",
  keywords: [
    "bursa yazılım",
    "bursa yazılım firması",
    "bursa yazılım şirketi",
    "bursa yazılım geliştirme",
    "bursa yazılım ekibi",
    "bursa yazılım hizmetleri",
    "yazılım geliştirme bursa",
    "yazılım firması bursa",
    "yazılım şirketi bursa",
    "bursa web tasarım",
    "bursa web sitesi",
    "bursa web geliştirme",
    "bursa web yazılım",
    "mobil uygulama bursa",
    "e-ticaret bursa",
    "web geliştirme bursa",
    "bursa yazılım ajansı",
    "bursa yazılımcı",
    "bursa yazılım uzmanı",
    "react geliştirme bursa",
    "next.js bursa",
    "node.js bursa",
    "kurumsal yazılım bursa",
    "bursa dijital ajans",
  ],
  authors: [{ name: "msduoyazilim", url: "https://msduoyazilim.com" }],
  creator: "msduoyazilim",
  publisher: "msduoyazilim",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://msduoyazilim.com",
    siteName: "msduoyazilim - Bursa Yazılım Firması",
    title: "Bursa Yazılım Firması | msduoyazilim - Bursa Yazılım Geliştirme Hizmetleri",
    description:
      "Bursa yazılım ekibi msduoyazilim - Bursa yazılım firması olarak profesyonel web ve mobil yazılım geliştirme hizmetleri sunuyoruz. Bursa'da yazılım geliştirme, e-ticaret, web tasarım çözümleri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "msduoyazilim Bursa Yazılım Firması",
      },
      {
        url: "/logo.png",
        width: 225,
        height: 225,
        alt: "msduoyazilim Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Yazılım Firması | msduoyazilim - Bursa Yazılım Ekibi",
    description:
      "Bursa yazılım geliştirme hizmetleri. Bursa yazılım firması msduoyazilim ile profesyonel web ve mobil uygulama çözümleri.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo-icon.svg",
        color: "#2563eb",
      },
    ],
  },
  alternates: {
    canonical: "https://msduoyazilim.com",
  },
  verification: {
    google: "gSgjagAAXKFJDFBfbXMBba97ELCO-3GlqNLlz2KUmZI",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "msduoyazilim",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Performance: Optimize font loading */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* SEO: Additional meta tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="msduoyazilim" />
        
        {/* ✅ SCHEMA (LOCAL BUSINESS + SOFTWARE COMPANY) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SoftwareCompany", "LocalBusiness", "ProfessionalService"],
              "name": "msduoyazilim - Bursa Yazılım Firması",
              "alternateName": ["msduoyazilim", "msduoyazilim", "Bursa Yazılım"],
              "url": "https://msduoyazilim.com",
              "logo": "https://msduoyazilim.com/logo.png",
              "image": "https://msduoyazilim.com/og-image.png",
              "description":
                "Bursa yazılım firması msduoyazilim - Bursa yazılım geliştirme, Bursa yazılım ekibi ile profesyonel web sitesi, mobil uygulama ve e-ticaret çözümleri sunuyoruz.",
              "telephone": "+90-535-529-7508",
              "email": "info@msduoyazilim.com",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "msduoyazilim Team"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bursa",
                "addressRegion": "TR-16",
                "addressCountry": "TR",
                "postalCode": "16000",
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bursa"
                },
                {
                  "@type": "Region",
                  "name": "Marmara"
                },
                {
                  "@type": "Country",
                  "name": "Türkiye"
                }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "120",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.instagram.com/INSTAGRAM",
                "https://www.linkedin.com/company/LINKEDIN",
                "https://twitter.com/TWITTER",
                "https://www.facebook.com/FACEBOOK"
              ],
              "contact": {
                "@type": "ContactPoint",
                "telephone": "+90-535-529-7508",
                "contactType": "Business Support",
                "areaServed": "TR",
                "availableLanguage": ["tr", "en"]
              },
              "knowsAbout": [
                "Bursa Yazılım",
                "Web Development",
                "Mobile App Development",
                "E-Commerce Solutions",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Bursa Web Site Geliştirme",
                  "description": "Bursa'da modern web siteleri, e-ticaret platformları ve kurumsal uygulamalar geliştirme",
                  "areaServed": "Bursa",
                  "provider": {
                    "@type": "Organization",
                    "name": "msduoyazilim"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Bursa Mobil Uygulama Geliştirme",
                  "description": "iOS ve Android mobil uygulamalar, React Native ile çapraz platform geliştirme",
                  "areaServed": "Bursa",
                  "provider": {
                    "@type": "Organization",
                    "name": "msduoyazilim"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Bursa Yazılım Konsültasyonu",
                  "description": "Kurumsal yazılım çözümleri, teknik danışmanlık ve proje yönetimi",
                  "areaServed": "Bursa",
                  "provider": {
                    "@type": "Organization",
                    "name": "msduoyazilim"
                  }
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bursa Yazılım Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Web Geliştirme"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Mobil Uygulama"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "E-Ticaret"
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
