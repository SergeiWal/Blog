import { User } from "./userTypes";

export type BookmarksPayload = {
  articleId: number;
  userId: number;
};

export interface GetCurrentUser {
  type: string;
  payload: number;
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
