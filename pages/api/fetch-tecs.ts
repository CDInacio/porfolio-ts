import { NextApiRequest, NextApiResponse } from 'next'

import { dbConnection } from '../../helpers/db-util'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return

  const client = await dbConnection()
  const db = client.db()

  const documents = await db.collection('tecs').find({}).toArray()

  if (!documents) {
    client.close()
    res.status(422).json({ message: 'Busca falhou' })
    return
  }
  res.status(200).json(documents)
  client.close()
}

export default handler
