import React from 'react'

import styled from 'styled-components'

import Navbar from '../components/Navbar'

interface Props {
  children: React.ReactNode
}

const Content = styled.div`
  box-sizing: border-box;
  padding: 48px 24px;
`

const Default = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Navbar />
      <Content>
        { children }
      </Content>
    </>
  )
}

export default Default
