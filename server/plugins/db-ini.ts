import { initDB } from '../utils/init-db'

export default defineNitroPlugin(() => {
  initDB()
  console.log('✅ Database initialized')
})