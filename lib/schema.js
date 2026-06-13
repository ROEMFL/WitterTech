// Centralized JSON-LD builders, so schema values stay in lockstep with SITE
// and are not retyped per page.
import { SITE } from './site'
import { REVIEWS } from './reviews'

// Stable @id for the business entity. Every LocalBusiness node across the site
// shares this @id so search engines merge them into one entity rather than
// reading them as duplicates.
const BUSINESS_ID = `${SITE.url}/#business`

// Base LocalBusiness, rendered once sitewide in app/layout.js.
// Deliberately carries NO aggregateRating or review[]: self-serving review
// markup belongs only on pages that actually display the reviews (home,
// /reviews), not on every page including /privacy.
export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    alternateName: SITE.legalName,
    description:
      'Reliable computer repair, Wi-Fi setup, smart home installation, and IT support for homes and small businesses in Kissimmee, Orlando, St. Cloud, Celebration, and Davenport. Honest upfront pricing, same-day service when available.',
    url: SITE.url,
    telephone: SITE.phoneSchema,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kissimmee',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    areaServed: SITE.cities.map(name => ({ '@type': 'City', name })),
    founder: { '@type': 'Person', name: SITE.founder },
    foundingDate: String(SITE.foundingYear),
    sameAs: [SITE.social.facebook, SITE.social.instagram],
  }
}

// Rating + a few real reviews, attached to the SAME business @id. Rendered only
// on the home page and /reviews, where the reviews are visibly displayed.
export function businessRatingJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: String(SITE.rating.count),
      bestRating: '5',
    },
    review: REVIEWS.slice(0, 3).map(r => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text,
    })),
  }
}

// Reusable LocalBusiness provider sub-node for Service schema (service +
// service-area pages), pointing at the same business @id.
export function providerNode() {
  return {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    telephone: SITE.phoneSchema,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/assets/og.png`,
    priceRange: '$$',
  }
}
