import type { NextRequest } from 'next/server'
import { TOKEN } from './utils/token'
import { isExpired } from "react-jwt"
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(TOKEN.ACCESS)?.value

  if(!currentUser || isExpired(currentUser)) {
    console.log("expired")
  }

  if ((!currentUser || isExpired(currentUser)) && (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/account"))) {
    return Response.redirect(new URL('/', request.url))
  } 

}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}