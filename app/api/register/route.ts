import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { registrations } from '@/lib/db/schema';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Basic server-side validation (should match zod client schema)
    if (!data.fullName || !data.email || !data.phone || !data.university || !data.department || !data.year || !data.participationType || typeof data.agreement !== 'boolean') {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
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
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
