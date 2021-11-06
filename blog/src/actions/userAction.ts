import { User } from "../types/userTypes";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_CURRENT_USER,
} from "../constants/user";
import {
  GetCurrentUser,
  BookmarksPayload,
  AddToBookmarks,
  DeleteFromBookmarks,
} from "../types/userActionsTypes";

export const getCurrentUserAction = (payload: User): GetCurrentUser => {
  return {
    type: GET_CURRENT_USER,
    payload,
  };
};

export const addToBookmarksAction = (
  payload: BookmarksPayload
): AddToBookmarks => {
  return {
    type: ADD_TO_BOOKMARKS,
    payload,
  };
};

export const deleteFromBookmarksAction = (
  payload: BookmarksPayload
): DeleteFromBookmarks => {
  return {
    type: DELETE_FROM_BOOKMARKS,
    payload,
  };
};
