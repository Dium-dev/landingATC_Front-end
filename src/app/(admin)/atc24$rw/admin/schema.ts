import { z } from "zod";

export const reviewSchema = z.object({
  review: z.string().min(10, { message: "La reseña es muy corta" }),
  rating: z.string().min(1),
  user: z.string().min(3, { message: "El nombre es inválido" }),
  active: z.boolean().or(z.string()).transform((val) => val.toString()),
  date: z.string(),
});
