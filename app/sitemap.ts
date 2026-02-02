import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://msduoyazilim.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bursa-yazilim`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/bursa-yazilim-gelistirme`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.94,
    },
    {
      url: `${baseUrl}/bursa-yazilim-ekibi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.93,
    },
    {
      url: `${baseUrl}/bursa-yazilim-firmasi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.94,
    },
    {
      url: `${baseUrl}/entegrasyon`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}#about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}#web-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#mobile-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#technologies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}#why-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#process`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}#portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.9,
    },
  ]
}
