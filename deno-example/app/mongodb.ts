import { MongoClient } from './deps.ts'

const MONGO_URI = Deno.env.get('MONGODB_URI')

if (!MONGO_URI) {
  throw new Error('Missing MONGO_URI environment variable')
}

const client = new MongoClient()
await client.connect(MONGO_URI)
const db = client.database('denoexampledb')

export default db
