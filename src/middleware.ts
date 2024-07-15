import type { NextRequest } from 'next/server'
import { TOKEN } from './utils/token'
import { isExpired } from "react-jwt"
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(TOKEN.ACCESS)?.value

  const protectedRoutes = ["/dashboard", "/account", "/account/services", "/account/profile", "/account/wallet"]

  if ((!currentUser || isExpired(currentUser)) && protectedRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL('/', request.url))
  } 

}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}