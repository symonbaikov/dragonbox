import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config({path: ".env.local"});

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in .env.local");
}

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: "__drizzle_migration",
    schema: "public",
  },
  verbose: true,
  strict: true,
});
