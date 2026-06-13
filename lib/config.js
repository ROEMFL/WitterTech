// Coming-soon master switch.
//   COMING_SOON_ENABLED = true  -> the PUBLIC (production) site shows only a
//   "coming soon" home page; every other route redirects to it, and the chrome,
//   sitemap, and robots adjust (see middleware.js / layout.js / sitemap.js / robots.js).
//
// Local development ALWAYS shows the full real site so we can keep building it,
// because the gate below also requires production. To launch the real site to
// the public, set COMING_SOON_ENABLED to false and push.
export const COMING_SOON_ENABLED = true
export const COMING_SOON = COMING_SOON_ENABLED && process.env.NODE_ENV === 'production'
