import React, { useState, ReactElement, createContext, useContext, useEffect } from 'react'
import { ApiResponse, Record } from '../utils/types';

interface OrderContextType {
    getUpdate: any;
    getCurrentState: any;
    state: any
}

interface Props {
    children: ReactElement;
}

export const OrderBookContext = createContext<OrderContextType>({} as OrderContextType)

export const OrderBookProvider = ({ children }: Props  ) => {
  const [state, setState] = useState<ApiResponse>();

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
    <OrderBookContext.Provider value={{ getUpdate, getCurrentState, state }}>
      {children}
    </OrderBookContext.Provider>
  )
}

export const useOrderBookContext = () => useContext(OrderBookContext)
