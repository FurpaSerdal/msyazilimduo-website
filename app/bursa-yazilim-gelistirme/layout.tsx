import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Geliştirme | Web ve Mobil Uygulama Hizmetleri',
  description: 'Bursa yazılım geliştirme hizmetleri ile profesyonel web sitesi, mobil uygulama, e-ticaret ve kurumsal yazılım çözümleri. React, Next.js, Node.js ile modern yazılım geliştirme. Garantili, hızlı ve güvenilir hizmet.',
  keywords: [
    'bursa yazılım geliştirme',
    'yazılım geliştirme bursa',
    'web geliştirme bursa',
    'mobil uygulama geliştirme bursa',
    'bursa yazılım hizmetleri',
    'react geliştirme bursa',
    'next.js bursa',
    'node.js geliştirme',
    'e-ticaret geliştirme bursa',
    'kurumsal yazılım bursa',
    'bursa web yazılım',
    'yazılım firması bursa',
  ],
  openGraph: {
    title: 'Bursa Yazılım Geliştirme | MSYazılımDuo',
    description: 'Profesyonel yazılım geliştirme hizmetleri. Web, mobil ve kurumsal çözümler.',
    url: 'https://msduoyazilim.com/bursa-yazilim-gelistirme',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Geliştirme - MSYazılımDuo',
      },
    ],
  },
  alternates: {
    canonical: 'https://msduoyazilim.com/bursa-yazilim-gelistirme',
  },
};

export default function BursaYazilimGelistirmeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
