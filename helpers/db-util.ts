import { MongoClient } from 'mongodb'

export async function dbConnection(): Promise<MongoClient> {
  const client = await MongoClient.connect(process.env.MONGO_STRING)
  return client
}
