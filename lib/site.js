// Single source of truth for company / NAP (name, address, phone) and brand
// facts. Import from here instead of hardcoding, so a rebrand or a phone change
// is a one-line edit rather than a 17-file find-and-replace.
//
//   phone       -> human display, e.g. "407-624-8459"
//   phoneHref   -> tel: link target (digits only, no formatting)
//   phoneSchema -> E.164-style value for JSON-LD `telephone`
export const SITE = {
  name: 'Witter Tech',
  legalName: 'Witt-Tech Solutions LLC',
  founder: 'Joe Witter',
  foundingYear: 2019,
  url: 'https://wittertech.com',
  email: 'joe@wittertech.com',
  phone: '407-624-8459',
  phoneHref: 'tel:14076248459',
  phoneSchema: '+1-407-624-8459',
  hours: 'Mon-Fri 8am-7pm',
  certs: 'CompTIA A+ & Network+, Microsoft certified',
  rating: { value: '5.0', count: 36 },
  social: {
    facebook: 'https://www.facebook.com/WittTechSol/',
    instagram: 'https://www.instagram.com/witt.tech.solutions/',
  },
  // Primary service cities, in priority order.
  cities: ['Kissimmee', 'Orlando', 'St. Cloud', 'Celebration', 'Davenport'],
}

// Convenience derived strings, so the same sentence is not retyped per page.
export const MAILTO = `mailto:${SITE.email}`
export const TRUST_RATING = `Rated ${SITE.rating.value} on Google, ${SITE.rating.count} reviews`
