import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../db";
import { createJWT } from "../../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pagename = searchParams.get("pagename");
    console.log(pagename);
    if (!pagename) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }
    const banner = await prisma.tnp_banner.findMany({
      where: {
        tnp_banner_page: pagename,
      },
    });

    // const token = createJWT(banner);

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
      data: banner,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
