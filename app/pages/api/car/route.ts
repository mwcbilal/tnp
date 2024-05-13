import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let car_class = parseInt(searchParams.get("car_class"));
    let start_date = new Date(searchParams.get("pickup_date"));
    let end_date = new Date(searchParams.get("dropoff_date"));

    console.log(start_date, car_class, end_date);

    let bookingsWithinRange = [];

    if (isNaN(start_date.getTime()) && isNaN(end_date.getTime())) {
      car_class = 1;
      start_date = new Date();
      end_date = new Date(start_date);
      end_date.setDate(start_date.getDate() + 5);
    }

    if (!isNaN(start_date.getTime()) && !isNaN(end_date.getTime())) {
      bookingsWithinRange = await prisma.tnp_car_booking.findMany({
        where: {
          OR: [
            {
              AND: [
                { pickup_date: { gte: start_date } },
                { dropoff_date: { lte: end_date } },
              ],
            },
            {
              AND: [
                { pickup_date: { gte: start_date } },
                { pickup_date: { lte: end_date } },
              ],
            },
            {
              AND: [
                { dropoff_date: { gte: start_date } },
                { dropoff_date: { lte: end_date } },
              ],
            },
            {
              AND: [
                { pickup_date: { lte: start_date } },
                { dropoff_date: { gte: end_date } },
              ],
            },
          ],
        },
        select: {
          car_id: true,
        },
      });
    }

    const carIds = bookingsWithinRange.map((booking) => booking?.car_id);

    const carQuery: any = {
      where: {
        NOT: {
          car_id: {
            in: carIds,
          },
        },
      },
    };

    if (car_class) {
      carQuery.where.class_id = car_class;
    }

    const availableCars = await prisma.tnp_cars.findMany(carQuery);

    console.log("bookingsWithinRange", bookingsWithinRange);
    console.log(availableCars, "aaaaaaaaa");

    return NextResponse.json({
      status: 200,
      message: "success",
      availableCars,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
