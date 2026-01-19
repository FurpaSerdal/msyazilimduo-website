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
  metadataBase: new URL("https://msyazilimduo.com"),
  title: {
    default: "Bursa Yazılım | MSYazılımDuo - Profesyonel Web ve Mobil Uygulama Geliştirme",
    template: "%s | MSYazılımDuo - Bursa Yazılım",
  },
  description:
    "Bursa yazılım firması MSYazılımDuo ile profesyonel web sitesi, mobil uygulama ve yazılım geliştirme hizmetleri. Next.js, React, Node.js ile kurumsal çözümler.",
  keywords: [
    "bursa yazılım",
    "bursa yazılım firması",
    "bursa yazılım şirketi",
    "bursa web tasarım",
    "bursa web sitesi",
    "yazılım geliştirme bursa",
    "mobil uygulama bursa",
    "e-ticaret bursa",
    "web geliştirme bursa",
    "react geliştirme",
    "next.js bursa",
    "node.js bursa",
  ],
  authors: [{ name: "MSYazılımDuo", url: "https://msyazilimduo.com" }],
  creator: "MSYazılımDuo",
  publisher: "MSYazılımDuo",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://msyazilimduo.com",
    siteName: "MSYazılımDuo - Bursa Yazılım Firması",
    title: "Bursa Yazılım | MSYazılımDuo",
    description:
      "Bursa merkezli profesyonel web ve mobil uygulama geliştirme firması.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MSYazılımDuo Yazılım Firması",
      },
      {
        url: "/logo.png",
        width: 225,
        height: 225,
        alt: "MSYazılımDuo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Yazılım | MSYazılımDuo",
    description:
      "Bursa'da profesyonel web ve mobil yazılım geliştirme hizmetleri.",
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
      { url: "/favicon.ico" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png", rel: "icon" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png", rel: "icon" },
    ],
  },
  alternates: {
    canonical: "https://msyazilimduo.com",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MSYazılımDuo",
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
        <meta name="apple-mobile-web-app-title" content="MSYazılımDuo" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content="MSYazılımDuo" />
        
        {/* ✅ SCHEMA (LOCAL BUSINESS + SOFTWARE COMPANY) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SoftwareCompany", "LocalBusiness"],
              "name": "MSYazılımDuo",
              "url": "https://msyazilimduo.com",
              "logo": "https://msyazilimduo.com/logo.png",
              "image": "https://msyazilimduo.com/og-image.png",
              "description":
                "Bursa merkezli profesyonel web ve mobil uygulama geliştirme firması.",
              "telephone": "+90-535-529-7508",
              "email": "info@msyazilimduo.com",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "MSYazılımDuo Team"
              },
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
                "ratingValue": "4.9",
                "reviewCount": "120"
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
                "Web Development",
                "Mobile App Development",
                "E-Commerce Solutions",
                "React",
                "Next.js",
                "Node.js"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Web Site Geliştirme",
                  "description": "Modern web siteleri ve e-ticaret platformları"
                },
                {
                  "@type": "Service",
                  "name": "Mobil Uygulama Geliştirme",
                  "description": "iOS ve Android mobil uygulamalar"
                },
                {
                  "@type": "Service",
                  "name": "Yazılım Konsültasyonu",
                  "description": "Kurumsal yazılım çözümleri"
                }
              ]
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
