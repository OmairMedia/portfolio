import db from '../../utils/db'
import {
  verifyPassword,
  createAccessToken,
  createRefreshToken
} from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = db.prepare(
    `SELECT * FROM users WHERE email = ?`
  ).get(body.email)

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email' })
  }

  const valid = await verifyPassword(body.password, user.password)

  if (!valid) {
    throw createError({ statusCode: 401, statusMessage: 'Wrong password' })
  }

  const accessToken = createAccessToken({ id: user.id, email: user.email })
  const refreshToken = createRefreshToken({ id: user.id })

  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: 'strict',
    path: '/',
  })

  return {
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  }
})
