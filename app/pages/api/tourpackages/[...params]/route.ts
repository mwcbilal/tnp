import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  tnp_package_categories: { package_category_id: number; package_category_name: string; };
  tnp_package_types: { package_type_id: number; package_type_name: string; };
  tnp_package_regions: { region_id: number; region_name: string; };
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string | null;
}

interface PackagesRequestParams {
  params: string[];
}

export async function GET(
  request: Request,
  context: { params: PackagesRequestParams }
) {
  const prisma = new PrismaClient();
  const { params } = await context.params;
  console.log("Requested body", params);

  if (!params || params.length < 1) {
    return new NextResponse(
      "Bad Request: Missing or invalid parameters",
      { status: 400 }
    );
  }

  try {
    let packages: PackageStructure[] = [];

    switch (params[0]) {
      case "search":
        if (!params[1] || typeof params[1] !== "string") {
          return new NextResponse(
            "Bad Request: Missing or invalid search parameters",
            { status: 400 }
          );
        }
        console.log("Inside search");
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_name: {
              contains: params[1],
            },
          },
          include: {
            tnp_package_categories: true, // Include category data
            tnp_package_types: true, // Include type data
            tnp_package_regions: true, // Include region data
          },
        });
        break;
      case "sort":
        if (!params[1]) {
          return new NextResponse("Bad Request: Missing sort type", {
            status: 400,
          });
        }
        packages = await prisma.tnp_packages.findMany({
          orderBy: {
            [params[1]]: "asc", // Assuming ascending order
          },
          include: {
            tnp_package_categories: true,
            tnp_package_types: true,
            tnp_package_regions: true,
          },
        });
        break;
      case "filter":
        if (!params[1] || typeof params[2] === "undefined") {
          return new NextResponse(
            "Bad Request: Missing or invalid filter parameters",
            { status: 400 }
          );
        }
        packages = await prisma.tnp_packages.findMany({
          where: {
            [params[1]]: params[2],
          },
          include: {
            tnp_package_categories: true,
            tnp_package_types: true,
            tnp_package_regions: true,
          },
        });
        break;
      case "single":
        if (!params[1] || isNaN(parseInt(params[1]))) {
          return new NextResponse(
            "Bad Request: Missing or invalid item ID",
            { status: 400 }
          );
        }
        packages = await prisma.tnp_packages.findMany({
          where: {
            package_id: parseInt(params[1]),
          },
          include: {
            tnp_package_categories: true,
            tnp_package_types: true,
            tnp_package_regions: true,
          },
        });
        break;
      case "all":
        packages = await prisma.tnp_packages.findMany({
          orderBy: {
            package_id: "desc",
          },
          include: {
            tnp_package_categories: true,
            tnp_package_types: true,
            tnp_package_regions: true,
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
      package_category: pkg.tnp_package_categories?.package_category_name || "", // Use category name
      package_type: pkg.tnp_package_types?.package_type_name || "", // Use type name
      package_region: pkg.tnp_package_regions?.region_name || "", // Use region name
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
