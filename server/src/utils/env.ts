import { parseEnv } from "znv";
import { z } from "znv";
import { config } from "dotenv";
config({ path: ".env" });

export const env = parseEnv(process.env, {
  DATABASE_URL: z.string(),
});
