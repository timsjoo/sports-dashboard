import { FastifyInstance } from "fastify";
import {
  getTeamScheduleController,
  getTeamRosterController,
} from "./nba.controllers";

export const nbaRoutes = async (app: FastifyInstance) => {
  app.get("/teamSchedule", getTeamScheduleController);
  app.get("/teamRoster", getTeamRosterController);
};
