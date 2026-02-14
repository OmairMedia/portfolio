import Database from 'better-sqlite3'
import { join } from 'path'

// store DB file in server/database
const dbPath = join(process.cwd(), 'server/database/app.db')

const db = new Database(dbPath)

// Improve performance
db.pragma('journal_mode = WAL')

export default db
