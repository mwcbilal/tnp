import { NextRequest, NextResponse } from 'next/server';
import prisma from '../db';
import { createJWT } from '../auth';

export async function GET(request: NextRequest) {
    try {

        const searchParams = request.nextUrl.searchParams
        const id = parseInt(searchParams.get('id'))

        if (!id){
        return NextResponse.json({ status: 400, message: "send id in query param"  });
        }

        const user = await prisma.tnp_user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                createdAt: true,
                name: true,
                lname: true,
                email: true,
            },
        })

        const token = createJWT(user)


        let userData = {
            token,
            name: user?.name,
            lname: user?.lname,
            email: user?.email,
            id: user?.id
        }


        return NextResponse.json({ status: 200, message: "success", userData });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        // Your logic here
        // ...
        return new NextResponse('Success', { status: 200 });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
