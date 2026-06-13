import { COMING_SOON } from '@/lib/config'

export default function robots() {
  if (COMING_SOON) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/services', '/about', '/contact', '/faq', '/tech-tips', '/privacy', '/service-areas', '/pricing', '/reviews'],
      },
      sitemap: 'https://wittertech.com/sitemap.xml',
    }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://wittertech.com/sitemap.xml',
  }
}
