import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Bids from '../components/Bids'

const style = {
  wrapper:
    'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Bid: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Bids />
    </div>
  )
}

export default Bid