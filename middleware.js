import { NextResponse } from 'next/server'
import { COMING_SOON } from './lib/config'

// While COMING_SOON is on, only the home page is reachable. Any other page-like
// route (no file extension) is redirected to "/". Static assets, _next, and
// files with extensions are excluded by the matcher below, so the logo, icons,
// robots.txt, and sitemap.xml stay accessible.
export function middleware(request) {
  if (!COMING_SOON) return NextResponse.next()
  const { pathname } = request.nextUrl
  if (pathname === '/') return NextResponse.next()
  const url = request.nextUrl.clone()
  url.pathname = '/'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
