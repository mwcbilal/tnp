import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";
import { createJWT } from "../auth";
import data from "@/Data/PackageData";

export async function POST(request: NextRequest) {
    try {
      const { tour_client_name, tour_client_email, tour_client_phone, tour_trip_id, tour_persons_count, tour_children_count, tour_description } = await request.json();
  
      const createdBookTrip = await prisma.tnp_tour_bookings.create({
        data: {
            tour_client_name:tour_client_name,
            tour_client_email: tour_client_email,
            tour_client_phone:tour_client_phone, 
            tour_trip_id: parseInt(tour_trip_id), 
            tour_persons_count: parseInt(tour_persons_count), 
            tour_children_count: parseInt(tour_children_count), 
            tour_description: tour_description
        },
      });
  
      console.log("is it created?",createdBookTrip)
  
      if (!createdBookTrip) {
        return NextResponse.json({
          status: 500,
          message: "Failed to BOOK trip.",
        });
      }
  
      return NextResponse.json({
        status: 200,
        message: "Trip Booked successfully.",
        data: createdBookTrip,
      });
    } catch (error) {
      console.error("Error in POST handler:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }