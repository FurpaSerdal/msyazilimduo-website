import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Firması | Profesyonel Web ve Mobil Yazılım Hizmetleri',
  description: 'Bursa yazılım firması MSYazılımDuo ile profesyonel web sitesi, mobil uygulama geliştirme ve yazılım çözümleri. Bursa\'da 20+ başarılı proje, yerel destek ve garantili hizmet.',
  keywords: [
    'bursa yazılım',
    'bursa yazılım firması',
    'bursa yazılım şirketi',
    'bursa web tasarım',
    'bursa mobil uygulama',
    'yazılım firması bursa',
    'web geliştirme bursa',
    'bursa yazılım geliştirme',
  ],
  openGraph: {
    title: 'Bursa Yazılım Firması | MSYazılımDuo',
    description: 'Bursa\'nın önde gelen yazılım firması. Web, mobil ve yazılım çözümleri.',
    url: 'https://msduoyazilim.com/bursa-yazilim',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Firması - MSYazılımDuo',
      },
    ],
  },
  alternates: {
    canonical: 'https://msduoyazilim.com/bursa-yazilim',
  },
};

export default function BursaYazilimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
