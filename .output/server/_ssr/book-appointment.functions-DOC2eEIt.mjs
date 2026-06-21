import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-mX8sJVox.mjs";
import process from "node:process";
import { a as appointmentSchema } from "./book-appointment.schema-CvARbTMN.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const submitAppointment_createServerFn_handler = createServerRpc({
  id: "d55c8e3916bbc869923235e03dd1a982404489d66b01d98328738d7f650a2999",
  name: "submitAppointment",
  filename: "src/lib/api/book-appointment.functions.ts"
}, (opts) => submitAppointment.__executeServer(opts));
const submitAppointment = createServerFn({
  method: "POST"
}).validator(appointmentSchema).handler(submitAppointment_createServerFn_handler, async ({
  data
}) => {
  const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Booking webhook is not configured");
  }
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.ok) {
    throw new Error(result?.error ?? "Failed to submit appointment");
  }
  return {
    ok: true
  };
});
export {
  submitAppointment_createServerFn_handler
};
