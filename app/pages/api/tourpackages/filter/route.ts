import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string;
  package_duration: number;
  package_isfeatured: boolean;
  package_bestseller: boolean;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_name: string;
    destination_region_id: number;
    tnp_package_categories: {
      package_category_id: number;
      package_category_name: string;
    };
    tnp_package_regions: {
      region_id: number;
      region_name: string;
    };
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}

interface FilterStructure {
  category?: string;
  package_type?: string;
  region?: string;
  destination?: string;
  package_isfeatured?: boolean;
  package_bestseller?: boolean;
  sort: string;
  limit: number;
  offset: number;
}

const sortFields: {
  [key: string]: Prisma.tnp_packagesOrderByWithRelationAndSearchRelevanceInput;
} = {
  price_low_to_high: { package_rate_normal: "asc" },
  price_high_to_low: { package_rate_normal: "desc" },
  duration_low_to_high: { package_duration: "asc" },
  duration_high_to_low: { package_duration: "desc" },
  package_id: { package_id: "desc" },
  package_isfeatured: { package_isfeatured: "desc" },
  package_bestseller: { package_bestseller: "asc" },
  package_total_persons: { package_total_persons: "asc" },
  price_delux_low_to_high: { package_rate_deluxe: "asc" },
  price_delux_high_to_low: { package_rate_deluxe: "desc" },
  package_duration_low_to_high: { package_duration: "asc" },
  package_duration_high_to_low: { package_duration: "desc" },
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl?.searchParams;

  try {
    let whereClause: Prisma.tnp_packagesWhereInput = {};
    let orderByClause: Prisma.tnp_packagesOrderByWithRelationAndSearchRelevanceInput[] = [];
    let skip = 0;
    let take = 8;

    
    if (!searchParams?.get("limit")) {
      return new NextResponse("limit parameter is required", { status: 400 });
    }
    console.log("search params", searchParams);

    if (!searchParams?.get("offset")) {
      return new NextResponse("offset parameter is required", { status: 400 });
    }

    let filterParams: FilterStructure = {
      sort: "package_isfeatured",
      limit: parseInt(searchParams.get("limit") || take + ""),
      offset: parseInt(searchParams.get("offset") || skip + ""),
    };
    // console.log("searchParams", searchParams);

    const category = searchParams.get("category");
    const region = searchParams.get("region");
    const destination = searchParams.get("destination");
    const package_type = searchParams.get("package_type");
    const package_isfeatured = searchParams.get("featured");
    const package_bestseller = searchParams.get("bestseller");
    const sort = searchParams.get("sort");
    console.log(sort, "SORTTTTTTTT");

    if (category) filterParams.category = category;
    if (region) filterParams.region = region;
    if (destination) filterParams.destination = destination;
    if (package_type) filterParams.package_type = package_type;
    if (package_isfeatured)
      filterParams.package_isfeatured = Boolean(package_isfeatured);
    if (package_bestseller)
      filterParams.package_bestseller = Boolean(package_bestseller);
    if (sort) filterParams.sort = sort;

    whereClause = {
      AND: [
        { tnp_destinations: { destination_name: filterParams.destination } },
        { tnp_package_types: { package_type_value: filterParams.package_type } },
        { package_isfeatured: filterParams.package_isfeatured },
        { package_bestseller: filterParams.package_bestseller },
      ],
    };

    if (filterParams.category) {
      whereClause = {
        ...whereClause,
        tnp_destinations: {
          tnp_package_categories: {
            package_category_name: filterParams.category,
          },
        },
      };
    }

    if (filterParams.region) {
      whereClause = {
        ...whereClause,
        tnp_destinations: {
          tnp_package_regions: {
            region_name: filterParams.region,
          },
        },
      };
    }

    if (filterParams.sort && sortFields[filterParams.sort]) {
      orderByClause.push(sortFields[filterParams.sort]);
    }

    let packages: PackageStructure[] = [];

    // console.log("whereClause", whereClause);

    packages = await prisma.tnp_packages.findMany({
      where: whereClause,
      include: {
        tnp_package_types: true,
        tnp_destinations: {
          include: {
            tnp_package_categories: true,
            tnp_package_regions: true,
          },
        },
      },
      orderBy: orderByClause,
      skip: filterParams.offset,
      take: filterParams.limit,
    });

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
