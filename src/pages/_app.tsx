import React from 'react'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/dist/shared/lib/router/router'

import 'modern-normalize'

import Theme from '../themes/default'

const Global = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 18px;
  }
`

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Shiori &amp; Friends, oleh Shiori Labs</title>
        </Head>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
