import React from 'react'

import { PrismicDocument } from '@prismicio/client'
import { PrismicText } from '@prismicio/react'
import styled from 'styled-components'

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ItemBase = styled.div`
  width: 100%;
  border-radius: 8px;
  // box-shadow:
  //   0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  //   0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  //   0 12.5px 10px rgba(0, 0, 0, 0.06),
  //   0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  //   0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  //   0 100px 80px rgba(0, 0, 0, 0.12);
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  position: relative;
  max-height: 512px;
`

const ItemThumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const ItemDetail = styled.article`
  padding: 72px 16px 24px;
  box-sizing: border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: linear-gradient(0deg, #2d2d2dad, transparent);
  color: ${(props) => props.theme.colors.white};
`

const ItemTitle = styled.h1`
  margin: 0px;
  font-size: 18px;
`

const ItemAuthor = styled.a`
  display: inline-block;
  margin-top: 8px;
`

interface Props {
  document: PrismicDocument
}

const ImageGridItem = ({ document }: Props): React.ReactElement => {
  return (
    <ItemBase>
      <ItemThumbnail src={document.data.images[0].image.url} />
      <ItemDetail>
        <ItemTitle>
          <PrismicText field={document.data.title} />
        </ItemTitle>
        oleh <ItemAuthor rel="author">{document.data.author_name}</ItemAuthor>
      </ItemDetail>
    </ItemBase>
  )
}

export default ImageGrid
export { ImageGridItem }
