import { pgTable, serial, varchar, boolean, text } from 'drizzle-orm/pg-core';

export const registrations = pgTable('registrations', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  university: varchar('university', { length: 60 }).notNull(),
  otherUniversity: varchar('other_university', { length: 60 }),
  department: varchar('department', { length: 50 }).notNull(),
  year: varchar('year', { length: 20 }).notNull(),
  participationType: varchar('participation_type', { length: 10 }).notNull(),
  teamName: varchar('team_name', { length: 50 }),
  teamMember1: varchar('team_member1', { length: 100 }),
  teamMember2: varchar('team_member2', { length: 100 }),
  teamMember3: varchar('team_member3', { length: 100 }),
  agreement: boolean('agreement').notNull(),
  github: varchar('github', { length: 200 }),
  linkedin: varchar('linkedin', { length: 200 }),
  createdAt: text('created_at').default('now()'),
});
