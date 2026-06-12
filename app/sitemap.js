import { TIPS } from '@/lib/tips'

export default function sitemap() {
  const base = 'https://wittertech.com'
  return [
    { url: base,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/tech-tips`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    ...TIPS.map(t => ({
      url: `${base}/tech-tips/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ]
}
