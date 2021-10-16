import prismic from '@prismicio/client'
import { Document } from '@prismicio/client/types/documents'

const client = prismic.client('https://shiori-and-friends.cdn.prismic.io/api/v2')

const getIndex = async (): Promise<Document[]> => {
  const response = await client.query(prismic.predicates.at('document.type', 'image'))
  return response.results
}

export default client
export { client, getIndex }
