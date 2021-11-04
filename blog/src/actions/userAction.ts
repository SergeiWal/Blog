import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_CURRENT_USER,
} from "../constants/user";
import { User } from "../types/userTypes";

export type BookmarksPayload = {
  articleId: number;
  userId: number;
};

export interface GetCurrentUser {
  type: string;
  payload: User;
}

export interface AddToBookmarks {
  type: string;
  payload: BookmarksPayload;
}

export interface DeleteFromBookmarks {
  type: string;
  payload: BookmarksPayload;
}

export type UserAction =
  | GetCurrentUser
  | AddToBookmarks
  | DeleteFromBookmarks
  | any;

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
