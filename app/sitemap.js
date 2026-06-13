import { TIPS } from '@/lib/tips'
import { LOCATIONS } from '@/lib/locations'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { COMING_SOON } from '@/lib/config'

export default function sitemap() {
  const base = 'https://wittertech.com'
  if (COMING_SOON) {
    return [{ url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 }]
  }
  return [
    { url: base,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/service-areas`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pricing`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/tech-tips`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${base}/privacy`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    ...LOCATIONS.map(l => ({
      url: `${base}/service-areas/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...SERVICE_PAGES.map(s => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...TIPS.map(t => ({
      url: `${base}/tech-tips/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ]
}
