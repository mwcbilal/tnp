import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { sendEmail } from "../utils";

export async function GET(request: Request) {
  try {
    let _ = {
      subject: "New Tour Request For You",
      text: "New Request is received",
      to: "siddiquiusman328@gmail.com",
      from: process.env.USER_EMAIL,
    };
    sendEmail(_);
    console.log("SENTTTTT");
    return NextResponse.json({ status: 200, message: "Success" });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
