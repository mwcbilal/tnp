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

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  try {
    const body = await request.formData();
    console.log("Body", body);
    const insert = await prisma.tnp_packages.create({
      data: {
        package_name: body.get("package_name").toString(),
        package_description: body.get("package_description").toString(),
        package_rate_normal: parseInt(body.get("package_rate_normal").toString()),
        package_rate_deluxe: parseInt(body.get("package_rate_deluxe").toString()),
        package_total_persons: parseInt(body.get("package_total_persons").toString()),
        package_details: body.get("package_details").toString(),
        package_type_id: parseInt(body.get("package_type_id").toString()),
        package_isfeatured: Boolean(body.get("package_isfeatured")),
        package_bestseller: Boolean(body.get("package_bestseller").toString()),
        package_duration: parseInt(body.get("package_duration").toString()),
        package_destination_id: parseInt(body.get("package_destination_id").toString()),
      },
    });
    console.log("Insert", insert);
    return NextResponse.json({ status: 200, message: "Success", data: [] });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}