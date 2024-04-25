import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { sendEmail } from '../utils';

export async function GET(request: Request) {
  try {
    sendEmail()
    console.log("SENTTTTT")
    return NextResponse.json({ status: 200, message: "Success" });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
