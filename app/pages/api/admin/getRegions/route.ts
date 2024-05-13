import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const res = await prisma.tnp_package_regions.findMany({
        select: {
            region_id: true,
            region_name: true,
          },
    });

    return NextResponse.json({
      status: 200,
      message: "success",
      data: res,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}