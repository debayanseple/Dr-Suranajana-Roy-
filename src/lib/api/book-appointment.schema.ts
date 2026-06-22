import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().regex(/^[+0-9\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(1, "Please select a preferred location"),
  date: z.string().min(1, "Please pick a preferred date"),
  time: z.string().min(1, "Please pick a preferred time"),
  notes: z.string().max(1000).optional(),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
