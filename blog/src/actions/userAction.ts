import { ADD_TO_BOOKMARKS, GET_CURRENT_USER } from "../constants/user";
import { User } from "../types/userTypes";

export type AddToBookmarksPayload = {
  articleId: number;
  userId: number;
};

export interface GetCurrentUser {
  type: string;
  payload: User;
}

export interface AddToToBookmarks {
  type: string;
  payload: AddToBookmarksPayload;
}

export type UserAction = GetCurrentUser | AddToBookmarksPayload | any;

export const getCurrentUserAction = (payload: User): GetCurrentUser => {
  return {
    type: GET_CURRENT_USER,
    payload,
  };
};

export const addToBookmarksAction = (
  payload: AddToBookmarksPayload
): AddToToBookmarks => {
  return {
    type: ADD_TO_BOOKMARKS,
    payload: payload,
  };
};
