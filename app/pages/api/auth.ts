import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { NextRequest } from 'next/server'

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
}

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
}

export const createJWT = (user: any) => {
  const token = jwt.sign({
    id: user.id,
    email: user.email
  },
    process.env.JWT_SECRET
  );
  return token;
}

export const protect = (req: NextRequest) => {

  const bearer = req.headers.get("authorization");

  if (!bearer) {
    return false;
  }

  const [_, token] = bearer.split(' ');

  if (!token) {
    return false;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.headers.set("user", JSON.stringify(user));
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}