import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const res = await prisma.tnp_package_categories.findMany({
        select: {
            package_category_id: true,
            package_category_name: true,
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