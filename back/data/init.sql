BEGIN;

DROP TABLE IF EXISTS "user", "itinary", "motorbike", "picture";

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "alias" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "presentation" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "itinary" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTERVAL,
    "highway" BOOLEAN,
    "kilometers" INT NOT NULL,
    "curve" INT NOT NULL,

    "user_id" int REFERENCES "user"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "motorbike" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    "user_id" int REFERENCES "user"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "picture" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "link" TEXT NOT NULL,

  "user_id" int REFERENCES "visitor"("id"),
  "motorbike_id" int REFERENCES "attraction"("id"),
  "itinary_id" int REFERENCES "attraction"("id"),

  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


COMMIT;
