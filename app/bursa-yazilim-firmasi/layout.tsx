import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Şirketi | Kurumsal Referanslar ve İş Ortaklığı',
  description:
    '2020\'den beri Bursa\'da faaliyet gösteren güvenilir yazılım şirketi msduoyazilim. Kurumsal referanslarımız, %98 müşteri memnuniyeti ve uzun vadeli bakım desteği.',
  keywords: [
    'bursa yazılım şirketi',
    'bursa web yazılım şirketi',
    'güvenilir yazılım firması bursa',
    'bursa yazılım ajansı',
    'bursa web ajansı',
    'kurumsal yazılım bursa',
  ],
  openGraph: {
    title: 'Bursa Yazılım Şirketi | Referanslar ve Kurumsal Hizmetler',
    description: 'Bursa\'nın güvenilir yazılım şirketi. Kurumsal referanslar, SLA destek ve profesyonel iş ortaklığı.',
    url: 'https://msduoyazilim.com/bursa-yazilim-firmasi',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Şirketi - msduoyazilim',
      },
    ],
  },
  alternates: {
    canonical: 'https://msduoyazilim.com/bursa-yazilim-firmasi',
  },
};

export default function BursaYazilimFirmasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
