import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

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
  try {
    // Your logic here
    // ...
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}