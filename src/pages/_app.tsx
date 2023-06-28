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
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
          <title>Shiori &amp; Friends, oleh Shiori Labs</title>
          <link rel="shortcut icon" href="https://shiorilabs.id/favicon.png" type="image/png" />
        </Head>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
