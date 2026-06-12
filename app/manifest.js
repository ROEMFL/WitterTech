export default function manifest() {
  return {
    name: 'Witter Tech',
    short_name: 'Witter Tech',
    description: 'Reliable tech repair and IT support in Central Florida. Honest pricing, same-day service.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#0d1117',
    icons: [
      { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  }
}
