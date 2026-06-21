import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const appointmentSchema = objectType({
  name: stringType().trim().min(2, "Please enter your full name").max(100),
  phone: stringType().trim().regex(/^[+0-9\s-]{7,20}$/, "Enter a valid phone number"),
  email: stringType().trim().email("Enter a valid email").max(255),
  service: stringType().min(1, "Please select a service"),
  date: stringType().min(1, "Please pick a preferred date"),
  time: stringType().min(1, "Please pick a preferred time"),
  notes: stringType().max(1e3).optional()
});
export {
  appointmentSchema as a
};
