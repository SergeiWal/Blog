import { WSMessageType } from "./constants";

export interface WSServerMessage {
  message: string;
  attachment?: string;
}

export interface WSClientMessage {
  message: string;
  type: WSMessageType;
}
