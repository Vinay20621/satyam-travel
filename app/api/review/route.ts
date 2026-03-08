import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "review",
    });

    const rows = response.data.values?.slice(1);

    return NextResponse.json(rows);
  } catch (error: any) {
    console.log("GOOGLE ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
