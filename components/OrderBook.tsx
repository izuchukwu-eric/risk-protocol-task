import React, { useEffect } from "react";
import useWebSocket from "../hooks/useWebSocket";
import { formatNumber } from "../utils/helper";
import { useOrderBookContext } from "../context/context";
import Loader from "./Loader";

function OrderBook() {
  const { getCurrentState, state } = useOrderBookContext();

  useEffect(() => {
    getCurrentState();
  }, []);

  useWebSocket();

  if(!state) return (
    <div className="mx-auto mt-20">
      <Loader />
    </div>
  )

  return (
    <div className="w-full h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="m-2">
          <table className="bg-black table-fixed md:w-full md:min-w-max divide-y divide-gray-300">
            <thead className="p-0 m-0">
              <tr>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Price(USD)</th>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Quantity(USD)</th>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Total(USD)</th>
              </tr>
            </thead>
            <tbody className="bg-black divide-y divide-gray-300">
              {state &&
                state.asks.records.map((asks: any, idx: number) => (
                  <tr key={asks.metaData.orderHash}>
                    <td className=" text-center bg-[rgba(36,174,100,0.5)]">
                      <p className="font-semibold text-sm text-white">
                        {formatNumber(
                          (asks.order.makerAmount) /
                          ((asks.order.takerAmount) / 1000000000000)
                        )}
                      </p>
                    </td>
                    <td className="text-center w-[50px] mr-2">
                      <p className="font-semibold text-sm text-[#20b26c]">
                        {formatNumber(
                          (asks.order.takerAmount) /
                          (asks.order.makerAmount) / 
                          ((asks.order.takerAmount) /1000000000000)
                        )}
                      </p>
                    </td>
                    <td className=" text-center bg-[#cc3939]">
                      <p className="font-semibold text-sm text-white">
                        {formatNumber(asks.order.takerAmount)}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="m-2 justify-center">
          <table className="bg-black table-fixed md:w-full md:min-w-max divide-y divide-gray-300">
            <thead className="p-0 m-0">
              <tr>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Price(USD)</th>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Quantity(USD)</th>
                <th className="text-[#adb1b8] font-semibold text-lg text-center">Total(USD)</th>
              </tr>
            </thead>
            <tbody className=" bg-black divide-y divide-gray-300">
              {state &&
                state.bids.records.map((bids: any) => (
                    <tr key={bids.metaData.orderHash}>
                    <td className=" text-center bg-[rgba(36,174,100,0.5)]">
                      <p className="font-semibold text-sm text-white">
                        {formatNumber(
                          (bids.order.takerAmount) /
                          ((bids.order.makerAmount) / 1000000000000)
                        )}
                      </p>
                    </td>
                    <td className="text-center w-[50px] mr-2">
                      <p className="font-semibold text-sm text-[#20b26c]">
                      {formatNumber(
                          (bids.order.makerAmount) /
                          (bids.order.takerAmount) / 
                          ((bids.order.makerAmount) /1000000000000)
                        )}
                      </p>
                    </td>
                    <td className=" text-center bg-[#cc3939]">
                      <p className="font-semibold text-sm text-white">
                        {formatNumber(bids.order.makerAmount)}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
