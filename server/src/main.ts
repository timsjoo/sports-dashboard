import { buildServer } from "./server";

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
    port: 3000,
    host: "localhost",
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
