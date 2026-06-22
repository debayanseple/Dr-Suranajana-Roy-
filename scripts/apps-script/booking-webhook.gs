// Deploy: script.google.com -> New project -> paste this file as Code.gs
// -> Deploy > New deployment > type "Web app" > Execute as "Me" > Who has
// access "Anyone" -> copy the Web app URL into BOOKING_WEBHOOK_URL on the
// site's server (not committed here - see deployment instructions).
//
// First deploy triggers a Google OAuth consent screen (Sheets + Gmail scope)
// that only the spreadsheet owner can approve.

const SHEET_ID = "155_lHU7bgStole7q1K6yiZTS8lvZ1FsccO7NoszLmzU";
const SHEET_NAME = "Appointments";
const NOTIFY_EMAIL = "23suranjanaroy@gmail.com";
const HEADERS = ["Full name", "Phone", "Email", "Service", "Preferred date", "Preferred time", "Notes"];

// Health check: open the /exec URL in a browser to confirm which sheet the
// CURRENTLY DEPLOYED version is writing to. If activeSheetId here is not the
// one you expect, you edited the code but did not "Deploy > New version".
function doGet() {
  return jsonResponse({
    ok: true,
    status: "Booking webhook is live",
    activeSheetId: SHEET_ID,
    sheetName: SHEET_NAME,
    notifyEmail: NOTIFY_EMAIL,
  });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const required = ["name", "phone", "email", "service", "date", "time"];
    for (const field of required) {
      if (!data[field]) {
        return jsonResponse({ ok: false, error: "Missing field: " + field });
      }
    }

    appendRow(data);
    sendConfirmationEmail(data);
    sendNotificationEmail(data);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function appendRow(data) {
  getSheet().appendRow([
    data.name,
    data.phone,
    data.email,
    data.service,
    data.date,
    data.time,
    data.notes || "",
  ]);
}

function sendConfirmationEmail(data) {
  const subject = "Your appointment request — Dr. Suranjana Roy";
  const body =
    "Hi " + data.name + ",\n\n" +
    "We've received your appointment request:\n\n" +
    "Service: " + data.service + "\n" +
    "Date: " + data.date + "\n" +
    "Time: " + data.time + "\n" +
    (data.notes ? "Notes: " + data.notes + "\n\n" : "\n") +
    "We will contact you shortly at " + data.phone + " to confirm.\n\n" +
    "— Dr. Suranjana Roy's Clinic";
  MailApp.sendEmail(data.email, subject, body);
}

function sendNotificationEmail(data) {
  const subject = "New appointment booked — " + data.name;
  const body =
    "A new appointment request was submitted:\n\n" +
    "Name: " + data.name + "\n" +
    "Phone: " + data.phone + "\n" +
    "Email: " + data.email + "\n" +
    "Service: " + data.service + "\n" +
    "Date: " + data.date + "\n" +
    "Time: " + data.time + "\n" +
    "Notes: " + (data.notes || "—") + "\n";
  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
