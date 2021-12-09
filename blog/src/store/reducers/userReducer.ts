import { PayloadAction } from "@reduxjs/toolkit";
import {
  getArticlesByIdFailed,
  getCurrentUserActionSuccess,
} from "../../authorization/actions/authorizeActions";
import { User } from "../../authorization/types/userTypes";

export const DEFAULT_USER: User = {
  _id: "0",
  name: "user",
  password: "11111111",
  role: "USER",
  activate: false,
  bookmarks: [],
  photo: "",
  posts: [],
};

export default function userReducer(
  state = DEFAULT_USER,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getCurrentUserActionSuccess.type:
      return action.payload;
    case getArticlesByIdFailed.type:
      return [];
    default:
      return state;
  }
}
