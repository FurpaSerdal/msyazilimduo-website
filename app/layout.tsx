import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://msyazilimduo.com'),
  title: {
    default: "Bursa Yazılım | MSYazılımDuo - Profesyonel Web ve Mobil Uygulama Geliştirme",
    template: "%s | MSYazılımDuo - Bursa Yazılım"
  },
  description: "Bursa yazılım firması MSYazılımDuo ile profesyonel web sitesi, mobil uygulama ve yazılım geliştirme hizmetleri. Bursa'nın en iyi yazılım şirketi. Next.js, React, Node.js ile kurumsal çözümler. 7/24 destek, uygun fiyat, hızlı teslimat.",
  keywords: ["bursa yazılım", "bursa yazılım firması", "bursa yazılım şirketi", "bursa web tasarım", "bursa web sitesi", "yazılım geliştirme bursa", "web uygulama bursa", "mobil uygulama bursa", "bursa e-ticaret", "bursa dijital ajans", "nextjs bursa", "react bursa", "web tasarım bursa", "yazılım hizmeti bursa"],
  authors: [{ name: "MSYazılımDuo", url: "https://msyazilimduo.com" }],
  creator: "MSYazılımDuo",
  publisher: "MSYazılımDuo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://msyazilimduo.com",
    siteName: "MSYazılımDuo - Bursa Yazılım Firması",
    title: "Bursa Yazılım | MSYazılımDuo - Web Sitesi ve Mobil Uygulama",
    description: "Bursa'nın lider yazılım şirketi. Profesyonel web sitesi, mobil uygulama, e-ticaret ve kurumsal yazılım geliştirme. Modern teknolojilerle ölçeklenebilir çözümler.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MSYazılımDuo Yazılım Stüdyosu",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Yazılım | MSYazılımDuo - Web ve Mobil Uygulama Geliştirme",
    description: "Bursa'da profesyonel yazılım geliştirme hizmetleri. Web sitesi, mobil uygulama, e-ticaret çözümleri. Uygun fiyat, hızlı teslimat.",
    images: ["/og-image.svg"],
    creator: "@msyazilimduo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google82654c7cb7df78c1",
  },
  alternates: {
    canonical: "https://msyazilimduo.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
