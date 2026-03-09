"use server"

import { cookies } from "next/headers"
import { createHash } from "crypto"
import { redirect } from "next/navigation"

const SESSION_COOKIE = "bad_admin_session"

function hashPassword(pw: string): string {
        return createHash("sha256").update(pw).digest("hex")
}

function makeSessionToken(): string {
        return process.env.ADMIN_SESSION_SECRET ?? "fallback-secret"
}

export async function adminLoginAction(password: string): Promise<{ error?: string }> {
        const expected = process.env.ADMIN_PASSWORD_HASH?.trim() || hashPassword("admin123") // Default password is "admin123" if not set
        if (!expected) return { error: "Admin not configured." }

        if (hashPassword(password) !== expected) {
                return { error: "Invalid password." }
        }

        const cookieStore = await cookies()
        cookieStore.set(SESSION_COOKIE, makeSessionToken(), {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 8, // 8 hours
                path: "/admin",
        })

        return {}
}

export async function adminLogoutAction() {
        const cookieStore = await cookies()
        cookieStore.delete(SESSION_COOKIE)
        redirect("/admin/login")
}

