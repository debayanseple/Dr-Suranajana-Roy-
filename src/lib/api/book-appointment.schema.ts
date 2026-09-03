import { z } from "zod";

const CLINIC_TIME_SLOTS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
] as const;

export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(1, "Please select a preferred location"),
  date: z.string().min(1, "Please pick a preferred date"),
  time: z
    .string()
    .min(1, "Please pick a preferred time")
    .refine((v) => (CLINIC_TIME_SLOTS as readonly string[]).includes(v), {
      message: "Please select a time between 10:00 and 19:00",
    }),
  notes: z.string().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the consent to proceed" }),
  }),
});

export const clinicTimeSlots = CLINIC_TIME_SLOTS;

export type AppointmentValues = z.infer<typeof appointmentSchema>;
