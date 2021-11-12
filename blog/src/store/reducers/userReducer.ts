import { PayloadAction } from "@reduxjs/toolkit";
import {
  GET_ARTICLE_BY_ID_FAILED,
  GET_USER_REQUEST_SUCCESS,
} from "../../authorization/actions/authorizeActions";
import { BOOKMARK } from "../../article/articlePageActions";
import { User } from "../../authorization/types/userTypes";

const DEFAULT_USER: User = {
  id: "0",
  name: "user",
  password: "11111111",
  bookmarks: [],
  photo: "",
  posts: [],
};

export default function userReducer(
  state = DEFAULT_USER,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case GET_USER_REQUEST_SUCCESS:
      return action.payload;
    case GET_ARTICLE_BY_ID_FAILED:
      return [];
    case BOOKMARK:
      return { ...state };
    default:
      return state;
  }
}
