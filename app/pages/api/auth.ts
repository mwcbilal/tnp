import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password : string, hash : string) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password : string) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user : any) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    }, 
    process.env.JWT_SECRET
  )
  return token
}

