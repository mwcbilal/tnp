import { PrismaClient } from "@prisma/client";
import prisma from "../db";
import { NextRequest, NextResponse } from "next/server";
import multer from 'multer';

interface InsertBodyRequest {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_category_id: number;
  package_type_id: number;
  package_region_id: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  package_destination_id: number;
  package_duration: number;
}

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_region_id: number;
    destination_name: string;
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl?.searchParams;
  if (!searchParams?.get("id")) {
    return new NextResponse("Bad Request: Missing or invalid id parameter", {
      status: 400,
    });
  }

  try {
    let packages: PackageStructure[] = [];
    const id = searchParams?.get("id");
    switch (id) {
      case "id":
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_id: parseInt(id),
          },
          include: {
            tnp_package_types: true,
            tnp_destinations: true,
          },
        });
        break;
      default:
        return new NextResponse("Bad Request: Invalid fetch type", {
          status: 400,
        });
    }

    packages = packages.map((pkg) => ({
      ...pkg,
      package_type: pkg.tnp_package_types?.package_type_name || "",
    }));

    return NextResponse.json({
      status: 200,
      message: "Success",
      data: packages,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
