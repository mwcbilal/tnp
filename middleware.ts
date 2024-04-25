import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import prisma from './app/pages/api/db'
import { getUser } from './app/pages/api/utils'
 
export const protect = (req : NextRequest) => {

  const bearer = req.headers.get("authorization")

  if (!bearer) {
    return Response.json({message: "unauthorized"},{status:401})
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    return Response.json({message: "unauthorized"},{status:401})
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.headers.set("user",user)
    return
  } catch (e) {
    console.error(e)
    return Response.json({message: "unauthorized"},{status:401})
  }
}




export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/pages/api/signUp"){
        return NextResponse.rewrite(new URL('/pages/api/signUp', request.url))
    }
}












