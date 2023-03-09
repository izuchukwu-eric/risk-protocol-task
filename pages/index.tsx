import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'

const style = {
  wrapper:
    'h-screen max-h-screen h-min-screen w-screen text-white select-none flex flex-col justify-between',
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header page={'swap'}/>
      <Main />
    </div>
  )
}

export default Home