import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

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
}

export async function GET(request: Request) {
  try {
    // Your logic here
    // ...
    return new NextResponse('Success', { status: 200 });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  try {
    // Insert logic here
    const body: InsertBodyRequest = await request.json();
    const insert = await prisma.tnp_packages.create({
      data: {
        package_name: body.package_name,
        package_description: body.package_description,
        package_rate_normal: body.package_rate_normal,
        package_rate_deluxe: body.package_rate_deluxe,
        package_total_persons: body.package_total_persons,
        package_category_id: body.package_category_id,
        package_details: body.package_details,
        package_region_id: body.package_region_id,
        package_type_id: body.package_type_id,
      },
    });
    console.log("Body", await body);
    return NextResponse.json({ status: 200, message: "Success", data: [] });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    //update logic here
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}