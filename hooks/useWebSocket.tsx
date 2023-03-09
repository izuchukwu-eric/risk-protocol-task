import { useEffect, useCallback } from "react";
import { useOrderBookContext } from "../context/context";
import { Socket } from "../utils/types";

function useSocket() {
  const { state, getUpdate } = useOrderBookContext();

  const WebsocketUrl = "wss://api.0x.org/orderbook/v1";

  const parseMessage = useCallback(
    (message: Socket) => {
      const { payload } = message;
      getUpdate(payload);
    },
    [state]
  );

  useEffect(() => {
    const ws = new WebSocket(WebsocketUrl);
    ws.onopen = () => {
      console.log("Web socket connected");
      ws.send(
        JSON.stringify({
          type: "subscribe",
          channel: "orders",
          requestId: "123e4567-e89b-12d3-a456-426655440000",
        })
      );
    };

    ws.onmessage = (event) => {
      console.log(event);
      const data = JSON.parse(event.data);
      parseMessage(data);
    };

    ws.onerror = (err) => {
      console.log({ err });
    };

    return () => ws.close();
  }, [parseMessage]);
}

export default useSocket;
