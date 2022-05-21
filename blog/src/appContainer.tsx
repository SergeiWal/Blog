import { useState } from "react";
import AppRouter from "./appRouter";
import { WSMessageType } from "./constants";
import { WSServerMessage } from "./interfaces";
import { useAppSelector } from "./store/store";

export default function AppContinaer() {
  const [lastWsMsg, setLastWsMsg] = useState<WSServerMessage>({ message: "" });

  const wsClient = useAppSelector((store) => store.wsClient.socket);

  wsClient.onopen = () => {
    console.log("Socket opened");
    wsClient.send(
      JSON.stringify({
        message: "Hello from client",
        type: WSMessageType.HANDSHAKE,
      })
    );
  };

  wsClient.onerror = (error) => {
    console.log("Error:", error);
  };

  wsClient.onmessage = (event) => {
    const wsMessage: WSServerMessage = JSON.parse(event.data);
    setLastWsMsg(wsMessage);
    console.log(event.data);
  };

  return <AppRouter lastWsMessage={lastWsMsg} />;
}
