import db from '../../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const stmt = db.prepare(`
    INSERT INTO users (email, name)
    VALUES (?, ?)
  `)

  const result = stmt.run(body.email, body.name)

  return {
    success: true,
    id: result.lastInsertRowid
  }
})
