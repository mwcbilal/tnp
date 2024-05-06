import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function GET(request: NextRequest) {
  try {
    const destinations = await prisma.tnp_destinations.findMany({
        include:{
            tnp_package_categories: true,
            tnp_package_regions: true
        }
    });
    
    return NextResponse.json({ destinations }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
