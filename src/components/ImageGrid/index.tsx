import React, { ReactElement, ReactNode } from 'react'
import Image from 'next/image'

import { PrismicDocument, asText } from '@prismicio/client'
import { PrismicText } from '@prismicio/react'

interface ImageGridProps {
  children: ReactNode
}

const ImageGrid = ({ children }: ImageGridProps): ReactElement => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      { children }
    </div>
  )
}
interface Props {
  document: PrismicDocument
}

const ImageGridItem = ({ document }: Props): React.ReactElement => {
  return (
    <article className="w-full rounded-lg relative max-h-[512px] border border-borderColor">
      <Image src={document.data.images[0].image.url} alt={`${document.data.title ? asText(document.data.title) : 'Gambar Shiori'} oleh ${document.data.author_name ?? 'Anonim'}`} width={document.data.images[0].image.dimensions.width} height={document.data.images[0].image.dimensions.height} className="object-cover w-full h-full rounded-lg" />
      <div className="pt-20 px-4 pb-6 rounded-bl-lg rounded-br-lg absolute bottom-0 w-full text-white bg-gradient-to-t from-[#2d2d2dad] to-transparent">
        <h1 className="m-0 font-bold leading-3">
          <PrismicText field={document.data.title} />
        </h1>
        oleh <a rel="author" className="inline-block mt-2">{document.data.author_name}</a>
      </div>
    </article>
  )
}

export default ImageGrid
export { ImageGridItem }
