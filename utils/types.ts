export interface ApiResponse {
    bids: Bids;
    asks: Asks;
  }
  
  export interface Bids {
    total: number;
    page: number;
    perPage: number;
    records: Record[];
  }
  
  export interface Record {
    order: Order;
    metaData: MetaData;
  }
  
  export interface Order {
    signature: Signature;
    sender: string;
    maker: string;
    taker: string;
    takerTokenFeeAmount: string;
    makerAmount: string;
    takerAmount: string;
    makerToken: string;
    takerToken: string;
    salt: string;
    verifyingContract: string;
    feeRecipient: string;
    expiry: string;
    chainId: number;
    pool: string;
  }
  
  export interface Signature {
    signatureType: number;
    r: string;
    s: string;
    v: number;
  }
  
  export interface MetaData {
    orderHash: string;
    remainingFillableTakerAmount: string;
    createdAt: string;
  }
  
  export interface Asks {
    total?: number;
    page?: number;
    perPage?: number;
    records: Record[];
  }
  
  export interface Order2 {
    signature: Signature2;
    sender: string;
    maker: string;
    taker: string;
    takerTokenFeeAmount: string;
    makerAmount: string;
    takerAmount: string;
    makerToken: string;
    takerToken: string;
    salt: string;
    verifyingContract: string;
    feeRecipient: string;
    expiry: string;
    chainId: number;
    pool: string;
  }
  
  export interface Signature2 {
    signatureType: number;
    r: string;
    s: string;
    v: number;
  }
  
  export interface MetaData2 {
    orderHash: string;
    remainingFillableTakerAmount: string;
    createdAt: string;
  }
  
  export type Token = {
    id: number;
    name: string;
    imageUrl: string;
    symbol: string;
  };
  
  export type Socket = {
    type: string;
    channel: string;
    payload: Record[];
    requestId: string;
  };
  
  export interface MetaData3 {
    orderHash: string;
    remainingFillableTakerAmount: string;
    state: string;
  }
  
  export type OrderBook = {
    state?: ApiResponse
    getCurrentState: () => Promise<void>;
    getUpdate: (payload: Record[]) => void;
  };
  