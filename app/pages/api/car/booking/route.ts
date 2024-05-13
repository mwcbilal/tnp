import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT, protect } from "../../auth";
import { sendEmail } from "../../utils";

export async function POST(request: NextRequest) {
    try {
        let isAuthorized = protect(request);
        if (!isAuthorized) {
            return NextResponse.json({ message: "UnAuthorized", status: 401 });
        }
        const user = request.headers.get("user");
        const req = await request.json();
        const jsonUser = JSON.parse(user);

        console.log(jsonUser);

        console.log(req);

        //    const user = await prisma.tnp_user.findMany({
        //    });
        const temp = {
            user_id: jsonUser?.id,
            car_id: parseInt(req?.carId),
            pickup_date: new Date(req?.pickup_date),
            dropoff_date: new Date(req?.dropoff_date),
            pickup_location: req?.pickup_location,
            dropoff_location: req?.dropoff_location,
        };

        const res = await prisma.tnp_car_booking.create({
            data: temp
        });
        if (res) {
            const emailOptions = {
                subject: "",
                text: "Your car rental request has been recieved, Thank you for using TNP.",
                to: jsonUser?.email,
                from: process.env.USER_EMAIL,
            };
            await sendEmail(emailOptions);
        }

        return NextResponse.json({
            status: 200,
            message: "success",
            data: user,
        });
    } catch (error) {
        console.error("Error in GET handler:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export async function GET(request: NextRequest) {
    try {

        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get("page"));
        const limit = parseInt(searchParams.get("limit")) || 10


        if (!page) {
            return NextResponse.json({
                status: 400,
                message: "send page in query param",
            });
        }

        const bookings = await prisma.tnp_car_booking.findMany({
            take: limit,
            skip: (page - 1) * limit,
            include: {
                tnp_user: {
                    select: {
                        name: true
                    }
                },
                tnp_cars: {
                    select: {
                        car_name: true
                    }
                }
            },
        });
        const totalBookings = await prisma.tnp_car_booking.count()



        return NextResponse.json({ status: 200, message: "success", bookings, totalBookings });
    } catch (error) {
        console.error("Error in GET handler:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const booking_id = parseInt(searchParams.get("bookingId"));

    if (!booking_id) {
      return NextResponse.json({
        status: 400,
        message: "send car id in query param",
      });
    }
    const booking = await prisma.tnp_car_booking.delete({
        where:{
            car_booking_id:booking_id
        }
    });

    return NextResponse.json({
      status: 200,
      message: "success",
      data: booking,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

