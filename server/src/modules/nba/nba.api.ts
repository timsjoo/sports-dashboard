import { env } from "../../utils/env";

export const queryOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": env.TANK01_NBA_API_KEY,
    "x-rapidapi-host": env.TANK01_NBA_API_HOST,
  },
};
