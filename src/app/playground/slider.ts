import { z } from "zod";

export const sliderSchema = z.object({
  variable: z.string().length(1, { message: "Must be a single character." }),
  value: z.number(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
});

export type Slider = {
  variable: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
};
