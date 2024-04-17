import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

type ResponseData = {
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    return new NextResponse('Success', { status: 200 });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    // Your logic here
    // ...
    return new NextResponse<ResponseData>("Success", { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}