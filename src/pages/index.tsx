import React from 'react'

import { PrismicDocument } from '@prismicio/client'
import { GetStaticPropsResult } from 'next'

import { getIndex } from '../libraries/prismic'

import Layout from '../layout/Default'

import ImageGrid, { ImageGridItem } from '../components/ImageGrid'

interface Props {
  documents: PrismicDocument[]
}

const Index = ({ documents }: Props): React.ReactElement => {
  return (
    <Layout>
      <ImageGrid>
        { documents.map((document) => (
          <ImageGridItem key={document.uid} document={document} />
        )) }
      </ImageGrid>
    </Layout>
  )
}

export default Index
export async function getStaticProps (): Promise<GetStaticPropsResult<Props>> {
  const documents = await getIndex()
  return {
    props: {
      documents
    }
  }
}
