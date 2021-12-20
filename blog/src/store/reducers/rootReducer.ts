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
import bookmarkReducer from "./bookmarksReducer";
import SignUpReducer from "./signUpReducer";

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
  bookmark: bookmarkReducer,
  signUp: SignUpReducer,
});

export default rootReducer;
