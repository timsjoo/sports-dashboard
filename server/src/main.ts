import { buildServer } from "./server";
import { env } from "./utils/env";

const gracefulShutdown = async ({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) => {
  await app.close();
};

const main = async () => {
  const app = await buildServer();

  await app.listen({
    port: env.SERVER_PORT,
    host: env.SERVER_HOST,
  });

  const signals = ["SIGINT", "SIGTERM"];

  app.log.info("Server is running");

  for (const signal of signals) {
    process.on(signal, async () => {
      process.on(signal, async () => {
        gracefulShutdown({ app });
      });
    });
  }

  console.log("Server is runningrunningrunning");
};

main();
