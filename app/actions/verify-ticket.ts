"use server"

import { db } from "@/lib/db"
import { registrations } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export type VerifyResult = { ok: true } | { ok: false; message: string }

export async function verifyTicketAction(id: number): Promise<VerifyResult> {
        try {
                await db.update(registrations).set({ verified: true }).where(eq(registrations.id, id))
                return { ok: true }
        } catch {
                return { ok: false, message: "Failed to verify ticket." }
        }
}

export async function unverifyTicketAction(id: number): Promise<VerifyResult> {
        try {
                await db.update(registrations).set({ verified: false }).where(eq(registrations.id, id))
                return { ok: true }
        } catch {
                return { ok: false, message: "Failed to unverify ticket." }
        }
}

export async function getVipRegistrations() {
        return db
                .select()
                .from(registrations)
                .where(eq(registrations.ticketType, "vip"))
                .orderBy(registrations.id)
}

export async function getAllRegistrations() {
        return db
                .select()
                .from(registrations)
                .orderBy(registrations.id)
}
