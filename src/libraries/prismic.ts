import { createClient, filter, PrismicDocument } from '@prismicio/client'

const client = createClient('https://shiori-and-friends.cdn.prismic.io/api/v2')

const getIndex = async (): Promise<PrismicDocument[]> => {
  const response = await client.get({ filters: [filter.at('document.type', 'image')] })
  return response.results
}

export default client
export { client, getIndex }
