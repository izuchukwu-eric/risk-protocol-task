import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown, AiOutlineLineChart } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.jpg'
import uniswapLogo from '../assets/eth.jpg'
import Link from 'next/link'

const style = {
  wrapper: `p-4 w-screen md:flex justify-between items-center`,
  headerLogo: `md:flex hidden w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `md:flex hidden justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [username, setUsername] = useState()

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>

      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <Link href={'/'}>
            <div
              onClick={() => setSelectedNav('swap')}
              className={`${style.navItem} ${
                selectedNav === 'swap' && style.activeNavItem
              }`}
            >
              Swap
            </div>
          </Link>
          <Link href={'/asks'}>
            <div
              onClick={() => setSelectedNav('asks')}
              className={`${style.navItem} ${
                selectedNav === 'asks' && style.activeNavItem
              }`}
            >
                Asks
            </div>
          </Link>
          <Link href={'/bids'}>
            <div
              onClick={() => setSelectedNav('bids')}
              className={`${style.navItem} ${
                selectedNav === 'bids' && style.activeNavItem
              }`}
            >
              Bids
            </div>
          </Link>
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts
            </div>
          </a>
        </div>
      </div>

      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>

        <div
            className={`${style.button} ${style.buttonPadding}`}
        >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                Connect Wallet
            </div>
        </div>

        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
