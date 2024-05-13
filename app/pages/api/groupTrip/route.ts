import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";
import { createJWT } from "../auth";

export async function GET(request: NextRequest) {
    try {

      const params = request.nextUrl.searchParams;
      const trip_package_id = parseInt(params.get("package_type_id"));
      
      const GroupPackageDate = await prisma.tnp_trips.findMany({
      where:{
        trip_package_id :trip_package_id
      },
      select:{
        trip_date: true,
        trip_id: true,
        trip_booked_count: true
      }
      });
  
      return NextResponse.json({
        status: 200,
        message: "success",
        data: GroupPackageDate,
      });
    } catch (error) {
      console.error("Error in GET handler:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }