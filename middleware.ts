import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createRouter<NextApiRequest, NextApiResponse>();

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/pages/api/signUp") {
    return NextResponse.rewrite(new URL("/pages/api/signUp", request.url));
  }
  if (
    request.nextUrl.pathname.startsWith("/pages/api/admin") ||
    request.nextUrl.pathname.startsWith("/pages/api/tourpackages/filter")
  ) {
    // Add CORS headers to allow requests from any origin
    return NextResponse.next({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } else if (request.nextUrl.pathname === "/pages/api/hotelBooking") {
    return NextResponse.next();
  }
}
