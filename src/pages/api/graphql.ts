import { ApolloServer } from 'apollo-server-micro'
import { RequestHandler } from 'micro'
import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { resolvers } from '@/backend/graphql/resolvers'
import { typeDefs } from '@/backend/graphql/typeDefs'

const cors = Cors()
const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export default cors(handler as RequestHandler)

// Disable next.js body parsing because it's handled by default in GraphQL
export const config = {
  api: {
    bodyParser: false,
  },
}
