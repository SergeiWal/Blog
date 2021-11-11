import { PayloadAction } from "@reduxjs/toolkit";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../../authorization/actions/authorizeActions";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
} from "../../article/articlePageActions";
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
    case GET_USER_REQUEST:
      return state;
    case GET_USER_SUCCESS:
      return action.payload;
    case ADD_TO_BOOKMARKS:
      return { ...state };
    case DELETE_FROM_BOOKMARKS:
      return { ...state };
    default:
      return state;
  }
}
