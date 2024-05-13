import { NextRequest, NextResponse } from "next/server";
import prisma from "../../db";
import { createJWT } from "../../auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));

    if (!page) {
      return NextResponse.json({
        status: 400,
        message: "send page in query param",
      });
    }

    if (!limit) {
      return NextResponse.json({
        status: 400,
        message: "send limit in query param",
      });
    }
    const testimonials = await prisma.tnp_testimonials.findMany({
      take: limit,
      skip: (page - 1) * limit, 
    });

    const token = createJWT(testimonials);

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
      data: testimonials,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
function checkMissingData(data) {
  for (const key in data) {
    if (!data[key]) {
      return key;
    }
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const { userName, userEmail, description} = await request.json();
    const missingData = checkMissingData({ userName, userEmail, description});

    if (missingData) {
      return NextResponse.json({
        status: 400,
        message: `Please provide '${missingData}' in the request data.`,
      });
    }
    const createdTestimonial = await prisma.tnp_testimonials.create({
      data: {
        testimonial_user_name: userName,
        testimonial_user_email: userEmail,
        testimonial_description: description,
      },
    });

    if (!createdTestimonial) {
      return NextResponse.json({
        status: 500,
        message: "Failed to create testimonial",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Testimonial created successfully.",
      data: createdTestimonial,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
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
    const response = await prisma.tnp_testimonials.findUnique({
      where: {
        testimonial_id: id,
      },
    });

    if (!response) {
      return new NextResponse("Testimonial Not Found", { status: 400 });
    }
    await prisma.tnp_testimonials.delete({
      where: {
        testimonial_id: id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
