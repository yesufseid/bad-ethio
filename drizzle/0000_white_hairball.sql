CREATE TABLE "registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"university" varchar(60) NOT NULL,
	"other_university" varchar(60),
	"department" varchar(50) NOT NULL,
	"year" varchar(20) NOT NULL,
	"participation_type" varchar(10) NOT NULL,
	"team_name" varchar(50),
	"team_member1" varchar(100),
	"team_member2" varchar(100),
	"team_member3" varchar(100),
	"agreement" boolean NOT NULL,
	"github" varchar(200),
	"linkedin" varchar(200),
	"created_at" text DEFAULT 'now()'
);
