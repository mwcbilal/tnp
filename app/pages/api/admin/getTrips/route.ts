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
    const user = await prisma.tnp_trips.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        tnp_packages: {
          select: {
            package_name: true,
            package_total_persons: true,
          },
        },
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
function checkMissingData(data) {
  for (const key in data) {
    if (!data[key]) {
      return key;
    }
  }
  return null;
}
export async function POST(request: NextRequest) {
  try {
    const { packageId, date } = await request.json();
    const missingData = checkMissingData({ packageId, date });

    if (missingData) {
      return NextResponse.json({
        status: 400,
        message: `Please provide '${missingData}' in the request data.`,
      });
    }

    const isPackageAvalible = await prisma.tnp_packages.findUnique({
      where: {
        package_id: parseInt(packageId),
      },
    });
    if (!isPackageAvalible) {
      return NextResponse.json({
        status: 500,
        message: "Package is not available.",
      });
    }
    const createdTrip = await prisma.tnp_trips.create({
      data: {
        trip_package_id: parseInt(packageId),
        trip_date: date,
        trip_booked_count: 0,
      },
    });

    if (!createdTrip) {
      return NextResponse.json({
        status: 500,
        message: "Failed to create trip.",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Trip created successfully.",
      data: createdTrip,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
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
    const response = await prisma.tnp_trips.findUnique({
      where: {
        trip_id: id,
      },
    });

    if (!response) {
      return new NextResponse("Record Not Found", { status: 400 });
    }
    await prisma.tnp_trips.delete({
      where: {
        trip_id: id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
