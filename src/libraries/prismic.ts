import { createClient, predicate } from '@prismicio/client'
import { PrismicDocument } from '@prismicio/types'

const client = createClient('https://shiori-and-friends.cdn.prismic.io/api/v2')

const getIndex = async (): Promise<PrismicDocument[]> => {
  // const response = await client.query(predicate.at('document.type', 'image'))
  const response = await client.get({ predicates: predicate.at('document.type', 'image') })
  return response.results
}

export default client
export { client, getIndex }
