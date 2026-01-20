import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://msduoyazilim.com"),
  title: "ERP Entegrasyon Çözümleri | MSYazılımDuo Bursa",
  description:
    "Bursa'da ERP entegrasyon, API geliştirme ve sistem entegrasyon hizmetleri. SAP, Logo, Mikro entegrasyonu ve veri senkronizasyon çözümleri.",
  keywords: [
    "erp entegrasyon",
    "bursa entegrasyon",
    "sap entegrasyon",
    "logo entegrasyon",
    "mikro entegrasyon",
    "api geliştirme",
    "veri senkronizasyon",
    "bursa yazılım entegrasyon",
    "entegrasyon çözümleri",
  ],
  alternates: {
    canonical: "https://msduoyazilim.com/entegrasyon",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://msduoyazilim.com/entegrasyon",
    siteName: "MSYazılımDuo",
    title: "ERP Entegrasyon Çözümleri | MSYazılımDuo",
    description:
      "Bursa'da ERP entegrasyon, API geliştirme ve sistem entegrasyon hizmetleri. SAP, Logo, Mikro entegrasyonu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MSYazılımDuo ERP Entegrasyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Entegrasyon Çözümleri | MSYazılımDuo",
    description:
      "Bursa'da ERP entegrasyon, API geliştirme ve sistem entegrasyon hizmetleri. SAP, Logo, Mikro entegrasyonu.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
