import { MongoClient } from './deps.ts'

const client = new MongoClient()
await client.connect('mongodb://admin:password@mongodb:27017')
const db = client.database('denoexampledb')

export default db
