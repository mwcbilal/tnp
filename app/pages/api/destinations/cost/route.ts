import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl?.searchParams;
    const name = searchParams?.get("name").toLocaleLowerCase();
    const car = searchParams?.get("car").toLocaleLowerCase();

    console.log("param found", name, car);

    if (!name) {
      return new NextResponse("Bad Request: Missing name param", {
        status: 400,
      });
    }

    if (!car) {
      return new NextResponse("Bad Request: Missing car param", {
        status: 400,
      });
    }

    const destinationEstimation = await prisma.tnp_fuel_estimation.findMany({
      where: {
        AND: {
          tnp_destinations: { destination_name: name },
          tnp_cars: { car_name: car },
        },
      },
    });

    if (destinationEstimation.length < 1) {
      return NextResponse.json({
        destinationEstimation,
        status: 200,
        message: "not-found",
      });
    }

    return NextResponse.json({
      destinationEstimation,
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
