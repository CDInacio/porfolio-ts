import { MongoClient } from 'mongodb'

export const dbConnection = async () => {
  const client = await MongoClient.connect(process.env.MONGO_STRING)
  return client
}
