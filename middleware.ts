import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const protectedRoutes = ["/dashboard", "/students", "/marks", "/attendance", "/reports", "/notices", "/ai-tools", "/settings"];
export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  const hasSession = request.cookies.get("school-ai-session");
  if (isProtected && !hasSession) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*", "/students/:path*", "/marks/:path*", "/attendance/:path*", "/reports/:path*", "/notices/:path*", "/ai-tools/:path*", "/settings/:path*"] };
