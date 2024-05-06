import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function GET(request: NextRequest) {
    try {

        const destinationsWithHotels = await prisma.tnp_destinations.findMany({
            // @ts-ignore
            include: {
                tnp_hotels: true,
            },
        });
        return  NextResponse.json({destinationsWithHotels} , {status:200})
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
