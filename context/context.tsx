import React, { useState, ReactElement, createContext, useContext, useEffect } from 'react'
import { ApiResponse, Record } from '../utils/types';

interface OrderContextType {
    getOrderBook: any;
    getUpdate: any;
    getCurrentState: any;
    bids: any,
    asks: any,
    state: any
}

interface Props {
    children: ReactElement;
}

export const OrderBookContext = createContext<OrderContextType>({} as OrderContextType)

export const OrderBookProvider = ({ children }: Props  ) => {
  const [state, setState] = useState<ApiResponse>();
  const [bids, setBids] = useState<[]>([]);
  const [asks, setAsks] = useState<[]>([]);


    const getOrderBook = async (qouteToken: string, baseToken: string) => {
      try {
        const res = await fetch(`/api/getOrderBook`,);
        const data = await res.json()
        if(data) {
          console.log(data.data.bids)
          setBids(data.data.bids.records);
          setAsks(data.data.asks.records);
        }
      } catch (error: any) {
        console.log(error.message)
      }
    }

    const getCurrentState = async () => {
      const url =
        "https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  
      try {
        const response = await fetch(url);
  
        const responseJSON = await response.json();
        setState(responseJSON);
      } catch (error) {
        console.log(error);
      }
    };

    const getUpdate = (payload: Record[]) => {
      setState({
        ...state!,
        asks: {
          ...state!.asks,
          records: [...state!.asks?.records!, ...payload],
        },
        bids: {
          ...state!.bids,
          records: [...state!.bids?.records!, ...payload],
        },
      });
    };

  return (
    <OrderBookContext.Provider value={{ bids, asks, getOrderBook, getUpdate, getCurrentState, state }}>
      {children}
    </OrderBookContext.Provider>
  )
}

export const useOrderBookContext = () => useContext(OrderBookContext)
