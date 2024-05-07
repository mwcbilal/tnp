import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const car_class = parseInt(searchParams.get("car_class"));
        const start_date = new Date(searchParams.get("pickup_date"));
        const end_date = new Date(searchParams.get("dropoff_date"));

        console.log(start_date, car_class, end_date)


        let bookingsWithinRange = null

        if (start_date && end_date) {
            bookingsWithinRange = await prisma.tnp_car_booking.findMany({
                where: {
                    OR: [
                        {
                            AND: [
                                { pickup_date: { gte: start_date } },
                                { dropoff_date: { lte: end_date } }
                            ],
                        },
                        {
                            AND: [
                                { pickup_date: { gte: start_date } },
                                { pickup_date: { lte: end_date } }
                            ]
                        },
                        {
                            AND: [
                                { dropoff_date: { gte: start_date } },
                                { dropoff_date: { lte: end_date } }
                            ]
                        }
                    ],
                },
                select: {
                    car_id: true
                }
            });
        }

        const carIds = bookingsWithinRange.map(booking => booking.car_id);

        const carQuery : any = {
            where: {
                NOT: {
                    car_id: {
                        in: carIds
                    }
                },
            }
        }

        if (car_class){
            carQuery.where.class_id = car_class
        }

        const availableCars = await prisma.tnp_cars.findMany(carQuery);

        console.log(bookingsWithinRange)
        console.log(availableCars)


        return NextResponse.json({ status: 200, message: "success" , availableCars});
    } catch (error) {
        console.error("Error in GET handler:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

