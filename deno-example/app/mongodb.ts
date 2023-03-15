import { MongoClient } from './deps.ts'

const client = new MongoClient()
let db
try {
  await client.connect('mongodb://admin:password@127.0.0.1:27017')
  db = client.database('denoexampledb')
} catch(err) {
    console.log(err)
}

export default db
