import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function GET(request: NextRequest) {
  try {
    const package_types = await prisma.tnp_package_types.findMany();
    
    return NextResponse.json({ package_types }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
