import { z } from "zod";

export const registerFormSchema = z.object({
  first_name: z.string().min(2).max(255),
  last_name: z.string().min(2).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

export type registerFormSchemaType = z.infer<typeof registerFormSchema>;
