// Real Google reviews for Witter Tech (posted under the legal name
// Witt-Tech Solutions). These are the customer's own published reviews,
// reused on the home page and the /reviews page. Do not invent reviews.
import { SITE } from './site'

// Rating lives in lib/site.js (single source of truth); re-exported here so
// existing `import { RATING }` call sites keep working.
export const RATING = SITE.rating

export const REVIEWS = [
  {
    name: 'Mark Bynes',
    source: 'Google review',
    text: "He met me, took my computer to his lab, and within only a couple hours it was fixed, and for way less money than I expected. I'm currently writing this review from that computer. His 5-star status is well deserved.",
  },
  {
    name: 'Haylis Perez',
    source: 'Google review',
    text: "My gaming PC just crashed on me while playing and I couldn't get it back up and running. He fixed the problem within a couple hours and for a reasonable price. Very professional.",
  },
  {
    name: 'Blayze',
    source: 'Google review',
    text: "Needed my computer fixed quick for work and he set me up in one day. Went to dinner, came back, and everything was running smoothly. Definitely worth the money.",
  },
  {
    name: 'Naomi Simmons',
    source: 'Google review',
    text: 'Quick to respond to my request, gave me an accurate quote and had the job done so fast. I will definitely reach out to him for all my future tech needs!',
  },
  {
    name: 'Silvera and Sons Automotive Repair',
    source: 'Google review, business client',
    text: 'We had an issue with the tower for our alignment machine. Joseph was able to get to us the same day. He even spoke directly to the company that makes the alignment machine.',
  },
  {
    name: 'Jose M',
    source: 'Google review',
    text: 'He takes the time to explain and search for solutions, super trustful and efficient, highly recommended!',
  },
  {
    name: 'Ryan',
    source: 'Google review',
    text: 'I had a messed up computer screen. Joseph got the part and fixed it up in a day, good as new. Great work at a good price.',
  },
]

// Google search URL for the profile. Swap for the exact Maps place URL when
// available (also used for the "leave a review" link).
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Witt-Tech+Solutions+Kissimmee+FL+reviews'
