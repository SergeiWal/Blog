import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";
import fetchReducer from "./fetchReducer";
import authorizeReducer from "./authorizeReducer";
import filterREducer from "./filterReducer";
import allUserREducer from "./allUsersReducer";
import tagsReducer from "./tagsReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  isFetching: fetchReducer,
  isAuthorized: authorizeReducer,
  filters: filterREducer,
  users: allUserREducer,
  tags: tagsReducer,
});

export default rootReducer;
