import { createServerFn } from "@tanstack/react-start";
import process from "node:process";

import { appointmentSchema } from "./book-appointment.schema";

// Proxies to a Google Apps Script Web App bound to the appointments sheet
// (see scripts/apps-script/booking-webhook.gs). Routing through this server
// function keeps the webhook URL out of the client bundle and avoids CORS,
// since Apps Script Web Apps don't handle preflight requests.
export const submitAppointment = createServerFn({ method: "POST" })
  .validator(appointmentSchema)
  .handler(async ({ data }) => {
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("Booking webhook is not configured");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!response.ok || !result?.ok) {
      throw new Error(result?.error ?? "Failed to submit appointment");
    }

    return { ok: true as const };
  });
