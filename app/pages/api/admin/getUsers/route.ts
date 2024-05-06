import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));

    if (!page) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }
    const user = await prisma.tnp_user.findMany({
      take: limit,
      skip: (page - 1) * limit,
      select: {
        id: true,
        createdAt: false,
        name: true,
        lname: true,
        email: true,
        login_count: true,
      },
    });

    const token = createJWT(user);

    // let userData = {
    //   token,
    //   name: user?.name,
    //   lname: user?.lname,
    //   email: user?.email,
    //   id: user?.id,
    // };
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

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: 400,
        message: "send id in query param",
      });
    }
    const response = await prisma.tnp_user.findUnique({
      where: {
        id: id,
      },
    });
    console.log(response);
    if (!response) {
      return new NextResponse("Record Not Found", { status: 400 });
    }
    await prisma.tnp_tour_bookings.deleteMany({
      where: {
        tour_client_email: response.email,
      },
    });
    await prisma.tnp_car_booking.deleteMany({
      where: {
        user_id: id,
      },
    });
    await prisma.tnp_hotel_bookings.deleteMany({
      where: {
        booking_user_id: id,
      },
    });
    await prisma.tnp_user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
