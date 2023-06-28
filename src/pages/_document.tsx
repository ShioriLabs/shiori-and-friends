import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {
  render (): React.ReactElement {
    return (
      <Html lang="id">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="https://shiorilabs.id/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
