import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit")) || 10;

    if (!page) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }

    const cars = await prisma.tnp_cars.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        tnp_car_class: true,
        tnp_car_booking: {
          include: {
            tnp_user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    const totalCars = await prisma.tnp_cars.count();

    return NextResponse.json({
      status: 200,
      message: "success",
      cars,
      totalCars,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
