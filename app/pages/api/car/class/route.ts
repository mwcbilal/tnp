
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";

export async function GET(request: NextRequest) {
  try {
    const carClasses = await prisma.tnp_car_class.findMany({
    });

    return NextResponse.json({
      status: 200,
      message: "success",
      data: carClasses,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

