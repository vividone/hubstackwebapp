import type { NextRequest } from 'next/server'
import { TOKEN } from './utils/token'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(TOKEN.ACCESS)?.value
 
  if (!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/', request.url))
  }

  if (!currentUser && request.nextUrl.pathname.startsWith('/account')) {
    return Response.redirect(new URL('/', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}