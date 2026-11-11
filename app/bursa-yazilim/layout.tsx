import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Özel Yazılım & Kurumsal Çözümler',
  description:
    'Bursa merkezli işletmeler için özel yazılım, kurumsal web sitesi ve dijital dönüşüm çözümleri. Yerinde teknik destek ve garantili proje teslimi.',
  keywords: [
    'bursa yazılım',
    'bursa özel yazılım',
    'bursa kurumsal yazılım',
    'bursa web tasarım',
    'bursa mobil uygulama',
    'bursa dijital dönüşüm',
  ],
  openGraph: {
    title: 'Bursa Özel Yazılım & Kurumsal Çözümler | msduoyazilim',
    description: 'Bursa işletmelerine özel yazılım, web ve mobil çözümler. Yerel destek, garantili hizmet.',
    url: 'https://msduoyazilim.com/bursa-yazilim',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Özel Yazılım Çözümleri - msduoyazilim',
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
