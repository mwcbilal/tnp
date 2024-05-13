import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";
import data from "@/Data/PackageData";

export async function GET(request: NextRequest) {
  try {
    const res = await prisma.tnp_destinations.findMany({
        include: {
            tnp_package_categories: true, // Include the related package category
            tnp_package_regions: true 
          }
    });

    // Map destination_category_id to package_category_name
    const mappedRes = res.map(item => ({
        destination_id: item.destination_id,
        destination_name: item.destination_name,
        destination_minimum_tour_days: item.destination_minimum_tour_days,
        destination_category_name: item.tnp_package_categories.package_category_name,
        destination_region_name: item.tnp_package_regions.region_name,
      }));

    return NextResponse.json({
      status: 200,
      message: "success",
      data: mappedRes,
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

      // Step 1: Delete related records in tnp_packages
      await prisma.tnp_packages.deleteMany({
          where: {
              package_destination_id: id,
          },
      });

      // Step 2: Delete the record from tnp_destinations
      const response = await prisma.tnp_destinations.delete({
          where: {
              destination_id: id,
          },
      });

      if (!response) {
          return new NextResponse("Destination Not Found", { status: 400 });
      }

      return NextResponse.json({
          status: 200,
          message: "success",
      });
  } catch (error) {
      console.error("Error in DELETE handler:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const { destination_region_id, destination_category_id, destination_name, destination_minimum_tour_days } = await request.json();

    const createdDestination = await prisma.tnp_destinations.create({
      data: {
        destination_category_id: parseInt(destination_category_id),
        destination_region_id: parseInt(destination_region_id),
        destination_name: destination_name,
        destination_minimum_tour_days: parseInt(destination_minimum_tour_days)
      },
    });

    console.log("is it created?",createdDestination)

    if (!createdDestination) {
      return NextResponse.json({
        status: 500,
        message: "Failed to create destination.",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Destination created successfully.",
      data: createdDestination,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}