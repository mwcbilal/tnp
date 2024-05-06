import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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

interface PackagesRequestParams {
  params: string[];
}

export async function GET(
  request: NextRequest,
  context: { params: PackagesRequestParams }
) {
  const prisma = new PrismaClient();
  const { params } = await context.params;
  // console.log("Requested body", request.nextUrl);

  if (!params || params.length < 1) {
    return new NextResponse("Bad Request: Missing or invalid parameters", {
      status: 400,
    });
  }

  try {
    let packages: PackageStructure[] = [];

    switch (params[0]) {
      case "single":
        if (!params[1] || isNaN(parseInt(params[1]))) {
          return new NextResponse("Bad Request: Missing or invalid item ID", {
            status: 400,
          });
        }
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_id: parseInt(params[1]),
          },
          include: {
            tnp_package_types: true,
            tnp_destinations: {
              include: {
                tnp_package_categories: true,
                tnp_package_regions: true,
              },
            },
          },
        });
        break;
      default:
        return new NextResponse("Bad Request: Invalid fetch type", {
          status: 400,
        });
    }

    // Modify the package structure to include category, type, and region names
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
