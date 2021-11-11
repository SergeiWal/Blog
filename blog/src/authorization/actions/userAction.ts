import { User } from "../types/userTypes";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/user";
import {
  GetCurrentUser,
  GetCurrentUserLoaded,
  BookmarksPayload,
  AddToBookmarks,
  DeleteFromBookmarks,
} from "../types/userActionsTypes";

export const getCurrentUserAction = (payload: string): GetCurrentUser => {
  return {
    type: GET_USER_REQUEST,
    payload,
  };
};

export const getCurrentUserLoadedAction = (
  payload: User
): GetCurrentUserLoaded => {
  return {
    type: GET_USER_SUCCESS,
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
