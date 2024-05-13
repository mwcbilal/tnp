import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const result = await prisma.tnp_packages.findMany({
      where: {
        package_name: {
          // @ts-ignore
          search: query,
        },
      },
      select: {
        package_name: true,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "success",
      result,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
