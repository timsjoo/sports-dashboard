import { z } from "zod";

export const getScheduleParamsSchema = z.object({
  teamAbv: z.string(),
});

export const getRosterParamsSchema = z.object({
  teamAbv: z.string(),
  statsToGet: z.string(),
});
