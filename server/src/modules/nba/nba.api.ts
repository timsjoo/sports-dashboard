import { env } from "../../utils/env";

export const queryOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": env.TANK01_NBA_API_KEY,
    "x-rapidapi-host": env.TANK01_NBA_API_HOST,
  },
};

export const fetchTeamSchedule = async (
  teamAbv: string,
  season: number = 2025
) => {
  const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBATeamSchedule?teamAbv=${teamAbv}&season=${season}`;

  const response = await fetch(url, queryOptions);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch weekly schedule data from API: ${response.statusText}`
    );
  }

  return await response.json();
};

export const fetchTeamRoster = async (teamAbv: string, statsToGet: string) => {
  const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBATeamRoster?teamAbv=${teamAbv}&statsToGet=${statsToGet}`;

  const response = await fetch(url, queryOptions);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch roster data from API: ${response.statusText}`
    );
  }

  return await response.json();
};
