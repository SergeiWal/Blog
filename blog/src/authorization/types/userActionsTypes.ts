import { User } from "./userTypes";

export type BookmarksPayload = {
  articleId: string;
  user: User;
};

export interface GetCurrentUser {
  type: string;
  payload: string;
}

export interface GetCurrentUserLoaded {
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
  | GetCurrentUserLoaded
  | any;
