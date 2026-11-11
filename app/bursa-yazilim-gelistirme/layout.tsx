import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Geliştirme | Web, E-Ticaret ve Mobil Uygulama',
  description:
    'React, Next.js, Node.js ve React Native ile Bursa yazılım geliştirme hizmetleri. Web sitesi, e-ticaret ve mobil uygulama paketleri ve şeffaf geliştirme süreci.',
  keywords: [
    'bursa yazılım geliştirme',
    'web geliştirme bursa',
    'mobil uygulama geliştirme bursa',
    'e-ticaret geliştirme bursa',
    'react geliştirme bursa',
    'next.js bursa',
    'node.js geliştirme',
  ],
  openGraph: {
    title: 'Bursa Yazılım Geliştirme | Web, E-Ticaret ve Mobil',
    description: 'React, Next.js ve React Native ile modern web, e-ticaret ve mobil uygulama geliştirme.',
    url: 'https://msduoyazilim.com/bursa-yazilim-gelistirme',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Geliştirme - msduoyazilim',
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
