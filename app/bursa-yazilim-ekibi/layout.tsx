import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Ekibi | Deneyimli Yazılım Uzmanları - MSYazılımDuo',
  description: 'MSYazılımDuo Bursa yazılım ekibi ile tanışın. Full-stack developer, React, Node.js, mobile uzmanlarından oluşan profesyonel ekibimiz ile projelerinizi hayata geçirin. Bursa\'da 5+ yıl tecrübe.',
  keywords: [
    'bursa yazılım ekibi',
    'bursa yazılım uzmanları',
    'bursa yazılım geliştirici',
    'bursa full stack developer',
    'bursa react developer',
    'bursa node.js developer',
    'bursa mobil uygulama geliştirici',
    'bursa yazılım takımı',
    'yazılım ekibi bursa',
    'bursa yazılımcı',
  ],
  openGraph: {
    title: 'Bursa Yazılım Ekibi | MSYazılımDuo',
    description: 'Deneyimli yazılım uzmanlarından oluşan Bursa yazılım ekibimiz ile tanışın.',
    url: 'https://msduoyazilim.com/bursa-yazilim-ekibi',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Ekibi - MSYazılımDuo',
      },
    ],
  },
  alternates: {
    canonical: 'https://msduoyazilim.com/bursa-yazilim-ekibi',
  },
};

export default function BursaYazilimEkibiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
