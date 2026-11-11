export { metadata } from "./metadata";

const entegrasyonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ERP Entegrasyon Çözümleri | MSYazılımDuo Bursa",
  description:
    "Bursa'da ERP entegrasyon, API geliştirme ve sistem entegrasyon hizmetleri. SAP, Logo, Mikro entegrasyonu.",
  url: "https://msduoyazilim.com/entegrasyon",
  mainEntity: {
    "@type": "Service",
    name: "ERP Entegrasyon",
    description: "Profesyonel ERP entegrasyon çözümleri ve API geliştirme hizmetleri",
    provider: {
      "@type": "Organization",
      name: "MSYazılımDuo",
      alternateName: "msduoyazilim",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bursa",
        addressCountry: "TR",
      },
    },
    areaServed: "Bursa",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Entegrasyon Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP Entegrasyon",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Geliştirme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Veri Senkronizasyon",
          },
        },
      ],
    },
  },
};

export default function EntegrasyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entegrasyonSchema) }}
      />
      {children}
    </>
  );
}
