import React, { useState, ReactElement, createContext, useContext, useEffect } from 'react'

interface OrderContextType {
    // getOrderBook: any;
    bids: any,
    asks: any
}

interface Props {
    children: ReactElement;
}

export const OrderBookContext = createContext<OrderContextType>({} as OrderContextType)

export const OrderBookProvider = ({ children }: Props  ) => {
  const [bids, setBids] = useState<[]>([]);
  const [asks, setAsks] = useState<[]>([]);


  useEffect(() => {
    const getOrderBook = async () => {
      try {
        const res = await fetch('/api/getOrderBook');
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
    getOrderBook()
  }, [])

  return (
    <OrderBookContext.Provider value={{ bids, asks }}>
      {children}
    </OrderBookContext.Provider>
  )
}

export const useOrderBookContext = () => useContext(OrderBookContext)
