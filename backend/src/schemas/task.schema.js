import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    requiered_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional(),
});
