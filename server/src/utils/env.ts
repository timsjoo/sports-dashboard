import { parseEnv } from "znv";
import { z } from "znv";
import { config } from "dotenv";
config({ path: ".env" });

export const env = parseEnv(process.env, {
  SERVER_PORT: z.number().default(8000),
  SERVER_HOST: z.string().default("localhost"),
  TANK01_NBA_API_KEY: z.string(),
  TANK01_NBA_API_HOST: z.string(),
  UPSTASH_REDIS_URL: z.string(),
  UPSTASH_REDIS_TOKEN: z.string(),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
});
