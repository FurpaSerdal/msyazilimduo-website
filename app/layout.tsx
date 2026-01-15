import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://msyazilimduo.com'),
  title: {
    default: "MSYazılımDuo | Profesyonel Web ve Yazılım Geliştirme Hizmetleri",
    template: "%s | MSYazılımDuo"
  },
  description: "Bursa merkezli yazılım stüdyosu. Next.js, React, Node.js ile kurumsal web uygulamaları, mobil uygulama geliştirme, e-ticaret çözümleri ve cloud hizmetleri. 20+ başarılı proje deneyimi.",
  keywords: ["web geliştirme", "yazılım geliştirme", "mobil uygulama", "e-ticaret", "nextjs", "react", "bursa yazılım", "freelance yazılımcı", "kurumsal web tasarım", "full-stack developer", "react native", "node.js"],
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
    siteName: "MSYazılımDuo Yazılım Stüdyosu",
    title: "MSYazılımDuo | Profesyonel Web ve Yazılım Geliştirme",
    description: "Modern teknolojilerle ölçeklenebilir, güvenli ve yüksek performanslı yazılım çözümleri. Next.js, React, Node.js uzmanı.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MSYazılımDuo Yazılım Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSYazılımDuo | Profesyonel Web ve Yazılım Geliştirme",
    description: "Modern teknolojilerle ölçeklenebilir, güvenli ve yüksek performanslı yazılım çözümleri.",
    images: ["/og-image.jpg"],
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
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
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
