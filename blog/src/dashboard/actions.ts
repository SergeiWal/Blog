import { createAction } from "@reduxjs/toolkit";
import { User } from "../authorization/types/userTypes";
import { withPayloadType } from "../store/store";

export const getUsersAction = createAction("GET_USERS_REQUEST");

export const getUsersSuccessAction = createAction(
  "GET_USERS_SUCCESS",
  withPayloadType<User[]>()
);

export const getUsersFailedAction = createAction(
  "GET_USERS_FAILED",
  withPayloadType<Error>()
);

export const deleteArticleAction = createAction(
  "DELETE_ARTICLE_REQUEST",
  withPayloadType<string>()
);
export const deleteArticleSuccessAction = createAction(
  "DELETE_ARTICLE_SUCCESS"
);
export const deleteArticleFailedAction = createAction("DELETE_ARTICLE_FAILED");
