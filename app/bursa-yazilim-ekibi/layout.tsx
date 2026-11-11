import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Ekibi | Full-Stack, Mobil ve UI/UX Uzmanları',
  description:
    'Full-stack developer, mobil uygulama geliştirici ve UI/UX uzmanlarından oluşan Bursa yazılım ekibimizle tanışın. Projelerinize özel teknik kadro.',
  keywords: [
    'bursa yazılım ekibi',
    'bursa yazılım uzmanları',
    'bursa full stack developer',
    'bursa react developer',
    'bursa node.js developer',
    'bursa mobil uygulama geliştirici',
    'bursa yazılımcı',
  ],
  openGraph: {
    title: 'Bursa Yazılım Ekibi | Uzman Geliştirici Kadrosu',
    description: 'Deneyimli full-stack, mobil ve UI/UX uzmanlarından oluşan Bursa yazılım ekibi.',
    url: 'https://msduoyazilim.com/bursa-yazilim-ekibi',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Ekibi - msduoyazilim',
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
