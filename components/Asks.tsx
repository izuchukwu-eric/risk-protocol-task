import React, { useEffect } from 'react'
import { useOrderBookContext } from '../context/context';

const style = {
  wrapper: `w-screen flex items-center justify-center mb-20`,
}

const Asks = () => {
  const { asks } = useOrderBookContext();

  return (
    <div className={style.wrapper}>
        <table className="min-w-max divide-y divide-gray-300">
            <thead className="bg-black">
              <tr>
                <th scope="col" className="px-3 py-2 text-left text-sm font-semibold text-white">{`Price (USD)`}</th>
                <th scope="col" className="px-3 py-2 text-left text-sm font-semibold text-white">{`Quantity (USD)`}</th>
                <th scope="col" className="px-3 py-2 text-left text-sm font-semibold text-white">{`Total (USD)`}</th>
              </tr>
            </thead>
            <tbody className="bg-black divide-y divide-gray-300">
              {asks && asks.map((item: any, idx: number) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-red-600">{item?.order?.takerTokenFeeAmount / item?.order?.takerAmount}</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-white">{item?.order?.takerAmount}</td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-white">{item?.order?.makerAmount}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Asks
