import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://msduoyazilim.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bursa-yazilim`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/bursa-yazilim-gelistirme`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.94,
    },
    {
      url: `${baseUrl}/bursa-yazilim-ekibi`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.93,
    },
    {
      url: `${baseUrl}/bursa-yazilim-firmasi`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.94,
    },
    {
      url: `${baseUrl}/entegrasyon`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
    },
  ];
}
