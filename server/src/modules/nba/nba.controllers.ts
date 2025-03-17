import { FastifyReply, FastifyRequest } from "fastify";
import { getTeamSchedule, getTeamRoster } from "./nba.services";
import { getScheduleParamsSchema, getRosterParamsSchema } from "./nba.schemas";
import { z } from "zod";

export const getTeamScheduleController = async (
  req: FastifyRequest<{ Querystring: z.infer<typeof getScheduleParamsSchema> }>,
  res: FastifyReply
) => {
  const { teamAbv } = req.query;

  try {
    const data = await getTeamSchedule(teamAbv);
    return data;
  } catch (error) {
    console.log("Error fetching data from TANK01 API", error);
    return res.status(500).send(error);
  }
};

export const getTeamRosterController = async (
  req: FastifyRequest<{ Querystring: z.infer<typeof getRosterParamsSchema> }>,
  res: FastifyReply
) => {
  const { teamAbv, statsToGet = "averages" } = req.query;

  try {
    const data = await getTeamRoster(teamAbv, statsToGet);
    return data;
  } catch (error) {
    console.log("Error fetching data from TANK01 API", error);
    return res.status(500).send(error);
  }
};
