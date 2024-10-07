import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Ingrese un correo electrónico" })
    .email("El correo electrónico no es válido"),
  password: z.string().min(8, { message: "Ingrese una contraseña válida" }),
});
