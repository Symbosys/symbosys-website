import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

/**
 * Next.js 16 Proxy Layer
 * Acts as the primary network boundary for route protection.
 */
export const proxy = auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isAuthRoute = nextUrl.pathname.startsWith("/auth");
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");

    // 1. Always allow API routes for Auth
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // 2. Redirect authenticated users away from login pages
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/admin", nextUrl));
        }
        return NextResponse.next();
    }

    // 3. Protect Admin routes from unauthenticated access
    if (isAdminRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/auth/login", nextUrl));
        }
        return NextResponse.next();
    }

    return NextResponse.next();
});

// Mandatory exports for Next.js 16
export default proxy;

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
