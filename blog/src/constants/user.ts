import { User } from "../types/userTypes";

export const GET_USER: string = "GET_USER";
export const GET_USER_lOADED: string = "GET_USER_lOADED";
export const ADD_TO_BOOKMARKS: string = "ADD_TO_BOOKMARKS";
export const DELETE_FROM_BOOKMARKS: string = "DELETE_FROM_BOOKMARKS";

export const DEFAULT_USER: User = {
  id: 0,
  name: "user",
  password: "11111111",
  bookmarks: [],
  photo: "",
  posts: [],
};
