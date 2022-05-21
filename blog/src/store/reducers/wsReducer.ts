export interface wsClient {
  socket: WebSocket;
}

const socket = new WebSocket("ws://localhost:3026/");

const defaultValue = {
  socket,
};

export default function wsReducer(state = defaultValue) {
  return state;
}
