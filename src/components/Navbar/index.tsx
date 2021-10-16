import React from 'react'

import styled from 'styled-components'

const Base = styled.nav`
  background: white;
  box-sizing: border-box;
  padding: 16px 24px;
  display: flex;
  // border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.branding};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0px;
  font-size: 18px;
`

const Links = styled.div`
  margin-left: auto;
`

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`

const Navbar = (): React.ReactElement => {
  return (
    <Base>
      <Title>Shiori &amp; Friends</Title>
      <Links>
        <Link target="_blank" href="https://shiorilabs.id" rel="noopener noreferrer">Kembali ke shiorilabs.id</Link>
      </Links>
    </Base>
  )
}

export default Navbar
