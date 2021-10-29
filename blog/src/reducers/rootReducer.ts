import { combineReducers } from "@reduxjs/toolkit";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
