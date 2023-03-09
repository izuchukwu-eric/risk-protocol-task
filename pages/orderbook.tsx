import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import OrderBook from '../components/OrderBook'

const style = {
  wrapper:
    'h-full max-h-screen h-min-screen w-screen text-white select-none flex flex-col justify-between',
}

const OrderBookPage: NextPage = () => {

  return (
    <div className={style.wrapper}>
      <Header page={'orderbook'} />
      <OrderBook  />
    </div>
  )
}

export default OrderBookPage