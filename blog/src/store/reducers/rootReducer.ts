import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";
import fetchReducer from "./fetchReducer";
import authorizeReducer from "./authorizeReducer";
import filterREducer from "./filterReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  isFetching: fetchReducer,
  isAuthorized: authorizeReducer,
  filters: filterREducer,
});

export default rootReducer;
