import { fetchTeamSchedule, fetchTeamRoster } from "./nba.api";
import { redis } from "../../utils/redis";

export const getTeamSchedule = async (teamAbv: string) => {
  const weeklySchedule = await fetchTeamSchedule(teamAbv);

  return weeklySchedule;
};

export const getTeamRoster = async (teamAbv: string, statsToGet: string) => {
  const cacheKey = `${teamAbv}-${statsToGet}`;
  try {
    let roster = await redis.get(cacheKey);

    if (!roster) {
      const rosterData = await fetchTeamRoster(teamAbv, statsToGet);
      await redis.set(cacheKey, rosterData, { ex: 3600 });
      return rosterData;
    } else {
      return roster;
    }
  } catch (error) {
    console.log(`Error getting roster data for team: ${teamAbv}`, error);
    throw new Error(`Error getting roster data for team: ${teamAbv}`);
  }
};
