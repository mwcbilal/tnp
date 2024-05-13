import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function POST(request: Request) {
    try {
      const body = await request.json();
      const newTrip = await prisma.tnp_trips.create({
        data: {
          trip_package_id: body.trip_package_id,
          trip_date: new Date(body.trip_date),
          trip_booked_count: body.trip_booked_count,
        },
      });
      return new NextResponse(JSON.stringify(newTrip), { status: 201 });
    } catch (error) {
      console.error("Error in POST handler:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }