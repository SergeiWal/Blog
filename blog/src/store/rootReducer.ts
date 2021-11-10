import { combineReducers } from "redux";
import articleReducer from "../article/articleReducer";
import userReducer from "../authorization/reducers/userReducer";
import fetchReducer from "./fetchReducer";
import authorizeReducer from "../authorization/reducers/authorizeReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  isFetching: fetchReducer,
  isAuthorized: authorizeReducer,
});

export default rootReducer;
