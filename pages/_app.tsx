import React from 'react'
import { AppProps } from 'next/dist/shared/lib/router/router'

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
