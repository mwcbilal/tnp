import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit")) || 10;
    const destinationName = searchParams.get("destination");

    if (!destinationName) {
      return NextResponse.json({
        status: 400,
        message: "Send 'page' and 'destination' in query params",
      });
    }

    console.log("For destination", destinationName);

    const cars = await prisma.tnp_cars.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        tnp_fuel_estimation: {
          some: {
            tnp_destinations: {
              destination_name: destinationName
            }
          }
        }
      },
    });

    const totalCars = await prisma.tnp_cars.count({
      where: {
        tnp_fuel_estimation: {
          some: {
            tnp_destinations: {
              destination_name: destinationName
            }
          }
        }
      }
    });

    return NextResponse.json({
      status: 200,
      message: "Success",
      cars,
      totalCars,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
