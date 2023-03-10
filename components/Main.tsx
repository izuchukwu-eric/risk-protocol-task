import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Image from 'next/image'
import Modal from './Modal';
import { Token } from '../utils/types';
import Link from 'next/link';
import { useOrderBookContext } from '../context/context';

const style = {
  wrapper: `w-screen flex items-center justify-center mb-20`,
  content: `bg-[#191B1F] md:w-[30rem] w-[22rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/2`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172E5] my-2 disabled:opacity-40 w-full rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const Main = () => {
  const { getCurrentState, state } = useOrderBookContext();
  const [payToken, setPayToken] = useState<Token>();
  const [receiveToken, setReceiveToken] = useState<Token>()
  const [showModal, setShowModal] = useState(false);
  const [label, setLabel] = useState<string>("")

  const onShowModal = (text: string) => {
    setLabel(text);
    setShowModal(true);
  }

  const confirm = () => {
    getCurrentState(payToken?.address, receiveToken?.address)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>You Pay</div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
          />
          <div className={style.currencySelector} onClick={() => onShowModal("You Pay")}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                {payToken && (
                  <div className="w-6 mt-1">
                    <Image
                      src={payToken?.imageUrl}
                      alt="currency"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                )}
              </div>
              <div className={style.currencySelectorTicker}>
                {(payToken?.name) ?? "Token"}
              </div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        {showModal && (
          <Modal
            set={setShowModal}
            title={label}
            setPayToken={setPayToken}
            setReceiveToken={setReceiveToken}
            type={label}
          />
        )}
        <div className={style.formHeader}>
          <div>You Get</div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
          />
          <div className={style.currencySelector}onClick={() => onShowModal("You Get")}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
              {receiveToken && (
                <div className="w-6 mt-1">
                  <Image
                    src={receiveToken?.imageUrl}
                    alt="currency"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              )}
              </div>
              <div className={style.currencySelectorTicker}>
                {(receiveToken?.name) ?? "Token"}
              </div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <Link href={'/orderbook'}>
          <button disabled={!payToken || !receiveToken} className={style.confirmButton} onClick={confirm}>
            OrderBook
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Main
