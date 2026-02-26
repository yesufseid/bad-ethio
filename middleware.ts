import { NextRequest, NextResponse } from "next/server"

const SESSION_COOKIE = "bad_admin_session"

export function middleware(req: NextRequest) {
        const { pathname } = req.nextUrl

        // Protect all /admin/* routes except /admin/login
        if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
                const sessionCookie = req.cookies.get(SESSION_COOKIE)?.value
                const expected = process.env.ADMIN_SESSION_SECRET ?? "fallback-secret"

                if (sessionCookie !== expected) {
                        const loginUrl = req.nextUrl.clone()
                        loginUrl.pathname = "/admin/login"
                        return NextResponse.redirect(loginUrl)
                }
        }

        return NextResponse.next()
}

export const config = {
        matcher: ["/admin/:path*"],
}
