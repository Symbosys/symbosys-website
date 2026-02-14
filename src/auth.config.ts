import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isAuthRoute = nextUrl.pathname.startsWith("/auth");
            const isAdminRoute = nextUrl.pathname.startsWith("/admin");

            // 1. Protect Admin routes
            if (isAdminRoute) {
                if (isLoggedIn) return true;
                return false; // Redirects to /auth/login
            }

            // 2. Redirect logged-in users away from auth pages
            if (isAuthRoute) {
                if (isLoggedIn) {
                    return Response.redirect(new URL("/admin", nextUrl));
                }
                return true;
            }

            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.id && session.user) {
                session.user.id = token.id as string;
            }
            if (token.role && session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    providers: [],
    session: { strategy: "jwt" },
} satisfies NextAuthConfig;
