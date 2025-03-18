import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { user } from "../db/schema";
import { env } from "./env";
import fp from "fastify-plugin";
import FastifyBetterAuth from "fastify-better-auth";

export const auth = betterAuth({
  trustedOrigins: [env.BETTER_AUTH_URL],
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    schema: {
      user: user,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});

async function authPlugin(fastify: any) {
  await fastify.register(FastifyBetterAuth, { auth });
}

export default fp(authPlugin, {
  name: "auth-plugin",
});
