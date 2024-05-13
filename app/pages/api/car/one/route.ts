import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const car_id = parseInt(searchParams.get("carId"));

    if (!car_id) {
      return NextResponse.json({
        status: 400,
        message: "send car id in query param",
      });
    }
    const car = await prisma.tnp_cars.findUnique({
        where:{
            car_id
        }
    });

    // const token = createJWT(user);

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
      data: car,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {

      const body = await request?.json()

      const temp = {
        car_name : body?.car_name,
        color:body?.color,
        pricePerDay: parseInt(body.pricePerDay),
        pricePerKm: parseInt(body.pricePerKm),
        engine: body?.engine,
        fuelType : body?.fuelType,
        make : body?.make,
        mileage: parseInt(body?.mileage),
        model: body?.model,
        car_image: body?.car_image,
        imageRef : body?.image_ref,
        transmission:body?.transmission,
        year: parseInt(body?.year),
        class_id: parseInt(body?.class_id),
        carRoom: parseInt(body?.carRoom),
        
      }

    const car = await prisma.tnp_cars.create({
        data: temp 
    });

    return NextResponse.json({
      status: 200,
      message: "success",
      data: car,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const car_id = parseInt(searchParams.get("carId"));

    if (!car_id) {
      return NextResponse.json({
        status: 400,
        message: "send car id in query param",
      });
    }
    const car = await prisma.tnp_cars.delete({
        where:{
            car_id
        }
    });

    // const token = createJWT(user);

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
      data: car,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

