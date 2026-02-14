import db from '../../utils/db'
import { hashPassword } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const hashed = await hashPassword(body.password)

  const stmt = db.prepare(`
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `)

  const result = stmt.run(body.name, body.email, hashed)

  return { id: result.lastInsertRowid }
})
