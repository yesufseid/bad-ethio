ALTER TABLE "registrations"
  ADD COLUMN IF NOT EXISTS "ticket_type" varchar(10) DEFAULT 'standard',
  ADD COLUMN IF NOT EXISTS "tx_hash" varchar(200),
  ADD COLUMN IF NOT EXISTS "verified" boolean DEFAULT false;

-- Also fix created_at from text to timestamp if needed (optional, safe to run)
ALTER TABLE "registrations"
  ALTER COLUMN "created_at" SET DEFAULT now();
