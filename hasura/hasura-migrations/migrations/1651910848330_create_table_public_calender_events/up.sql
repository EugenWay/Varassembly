CREATE TABLE "public"."calender_events"("id" serial NOT NULL, "title" text NOT NULL, "content" text, "start_time" timestamptz NOT NULL, "end_time" timestamptz NOT NULL, "network" text NOT NULL, "module" text, "url" text, PRIMARY KEY ("id") );
