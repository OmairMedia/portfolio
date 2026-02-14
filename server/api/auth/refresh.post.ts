import { verifyRefreshToken, createAccessToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'refresh_token')

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'No token' })
  }

  const payload: any = verifyRefreshToken(token)

  const accessToken = createAccessToken({
    id: payload.id
  })

  return { accessToken }
})
