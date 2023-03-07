import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { OrderBookProvider } from "../context/context"

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <OrderBookProvider>
      <Component {...pageProps} /> 
    </OrderBookProvider>
  )
}

export default MyApp
