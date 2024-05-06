import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const trips = await prisma.tnp_trips.findMany();
        return new NextResponse(JSON.stringify(trips), { status: 200 });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newTrip = await prisma.tnp_trips.create({
            data: {
                trip_package_id: body.trip_package_id,
                trip_date: new Date(body.trip_date),
                trip_total_members: body.trip_total_members,
            },
        });
        return new NextResponse(JSON.stringify(newTrip), { status: 201 });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const updatedTrip = await prisma.tnp_trips.update({
            where: { trip_id: parseInt(body.trip_id) },
            data: {
                trip_package_id: body.trip_package_id,
                trip_date: new Date(body.trip_date),
                trip_total_members: body.trip_total_members,
            },
        });
        return new NextResponse(JSON.stringify(updatedTrip), { status: 200 });
    } catch (error) {
        console.error('Error in PUT handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        // const { id } = request.params;
        const body = await request.json();
        await prisma.tnp_trips.delete({ where: { trip_id: parseInt(body.id) } });
        return new NextResponse('Trip deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Error in DELETE handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}