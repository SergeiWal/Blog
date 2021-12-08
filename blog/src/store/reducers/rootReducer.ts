import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";
import fetchReducer from "./fetchReducer";
import authorizeReducer from "./authorizeReducer";
import filterREducer from "./filterReducer";
import allUserREducer from "./allUsersReducer";
import tagsReducer from "./tagsReducer";
import { commentsReducer } from "./commentsReducer";
import likesReducer from "./likesReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  isFetching: fetchReducer,
  isAuthorized: authorizeReducer,
  filters: filterREducer,
  users: allUserREducer,
  tags: tagsReducer,
  comments: commentsReducer,
  like: likesReducer,
});

export default rootReducer;
