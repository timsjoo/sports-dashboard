import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { nbaRoutes } from "./modules/nba/nba.routes";

export const buildServer = async () => {
  const app = fastify({
    logger: {
      redact: [
        "DATABASE_URL",
        "TANK01_NBA_API_KEY",
        "TANK01_NBA_API_HOST",
        "UPSTASH_REDIS_URL",
        "UPSTASH_REDIS_TOKEN",
        "BETTER_AUTH_SECRET",
        "BETTER_AUTH_URL"
      ],
      level: "debug",
      transport: {
        // GET RID OF THIS BEFORE GOING TO PRODUCTION
        target: "pino-pretty",
      },
    },
  });

  // Enable CORS
  app.register(fastifyCors, {
    origin: true, // allow all origins
  });

  // route registration
  app.register(nbaRoutes, { prefix: "/api/nba" });

  return app;
};
