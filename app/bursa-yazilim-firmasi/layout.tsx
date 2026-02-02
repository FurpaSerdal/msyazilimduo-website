import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bursa Yazılım Şirketi | Kurumsal Yazılım Çözümleri - MSYazılımDuo',
  description: 'Bursa yazılım şirketi MSYazılımDuo ile kurumsal web sitesi, e-ticaret, mobil uygulama ve yazılım çözümleri. Bursa\'da 5+ yıllık tecrübe, 50+ başarılı proje. ISO standartlarında hizmet.',
  keywords: [
    'bursa yazılım şirketi',
    'bursa yazılım firması',
    'yazılım şirketi bursa',
    'bursa yazılım',
    'bursa web yazılım şirketi',
    'kurumsal yazılım bursa',
    'yazılım firması bursa',
    'bursa yazılım ajansı',
    'bursa web ajansı',
    'profesyonel yazılım bursa',
    'güvenilir yazılım firması bursa',
  ],
  openGraph: {
    title: 'Bursa Yazılım Şirketi | MSYazılımDuo',
    description: 'Bursa\'nın güvenilir yazılım şirketi. Kurumsal çözümler ve profesyonel hizmet.',
    url: 'https://msduoyazilim.com/bursa-yazilim-firmasi',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bursa Yazılım Şirketi - MSYazılımDuo',
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
