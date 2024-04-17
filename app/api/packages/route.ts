import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type ResponseData = {
  message: string;
};

export default async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    // Your logic here (for both GET and POST requests)
    // ...

    // Return a success response
    return new NextResponse<ResponseData>('Success', { status: 200 });
  } catch (error) {
    console.error('Error in handler:', error);

    // Return an internal server error response
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}