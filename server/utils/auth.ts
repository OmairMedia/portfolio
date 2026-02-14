import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const ACCESS_SECRET = 'access-secret'
const REFRESH_SECRET = 'refresh-secret'

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

export function createAccessToken(user: any) {
  return jwt.sign(user, ACCESS_SECRET, { expiresIn: '15m' })
}

export function createRefreshToken(user: any) {
  return jwt.sign(user, REFRESH_SECRET, { expiresIn: '7d' })
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET)
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET)
}
