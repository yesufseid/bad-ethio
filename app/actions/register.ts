"use server"

import * as z from "zod"
import { db } from "@/lib/db"
import { registrations } from "@/lib/db/schema"

const registrationSchema = z
  .object({
    fullName: z
      .string()
      .regex(/^[A-Za-z\s\-']{3,100}$/, "Enter a valid name."),
    email: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid university email.",
      ),
    phone: z
      .string()
      .regex(/^\+251[1-9]\d{8}$/, "Enter a valid Ethiopian phone number."),
    university: z.string().min(1, "Select your university."),
    otherUniversity: z.string().optional(),
    department: z
      .string()
      .regex(/^[A-Za-z\s\-]{5,50}$/, "Enter your department/major."),
    year: z.string().min(1, "Select your year of study."),
    participationType: z.enum(["solo", "team"]),
    teamName: z.string().optional(),
    teamMember1: z.string().optional(),
    teamMember2: z.string().optional(),
    teamMember3: z.string().optional(),
    agreement: z.boolean().refine((v) => v === true, "Agree to terms to proceed."),
    github: z.string().optional(),
    linkedin: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.university === "Other") {
      if (!data.otherUniversity || !/^[A-Za-z\s]{5,50}$/.test(data.otherUniversity)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select or specify your university.",
          path: ["otherUniversity"],
        })
      }
    }

    if (data.participationType === "team") {
      if (!data.teamName || !/^[A-Za-z0-9\s]{3,50}$/.test(data.teamName)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Provide team details if applicable.",
          path: ["teamName"],
        })
      }
    }
  })

export type RegisterResult =
  | { ok: true }
  | { ok: false; message: string }

export async function registerAction(input: unknown): Promise<RegisterResult> {
  const parsed = registrationSchema.safeParse(input)
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Invalid input"
    return { ok: false, message: first }
  }

  const data = parsed.data

  await db.insert(registrations).values({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    university: data.university,
    otherUniversity: data.otherUniversity || null,
    department: data.department,
    year: data.year,
    participationType: data.participationType,
    teamName: data.teamName || null,
    teamMember1: data.teamMember1 || null,
    teamMember2: data.teamMember2 || null,
    teamMember3: data.teamMember3 || null,
    agreement: data.agreement,
    github: data.github || null,
    linkedin: data.linkedin || null,
  })

  return { ok: true }
}
