import fastify from "fastify";
import fastifyCors from "@fastify/cors";

export const buildServer = async () => {
  const app = fastify({
    logger: {
      level: "debug",
      transport: {
        // GET RID OF THIS BEFORE GOING TO PRODUCTION
        target: "pino-pretty",
      },
    },
  });

  app.register(fastifyCors, {
    origin: true,
  });

  return app;
};
