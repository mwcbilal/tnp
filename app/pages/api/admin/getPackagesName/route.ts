import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const res = await prisma.tnp_packages.findMany({
      select: {
        package_name: true,
        package_id: true,
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
