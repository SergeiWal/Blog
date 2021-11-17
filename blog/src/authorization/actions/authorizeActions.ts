import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../store/store";
import { User } from "../types/userTypes";
import { Article } from "../../article/types/articleTypes";

export const signInAction = createAction("SIGN_IN", withPayloadType<string>());

export const signOutAction = createAction("SIGN_OUT");

export const getCurrentUserAction = createAction(
  "GET_USER_REQUEST",
  withPayloadType<string>()
);
export const getCurrentUserActionSuccess = createAction(
  "GET_USER_SUCCESS",
  withPayloadType<User>()
);

export const getArticlesByIdFailed = createAction(
  "GET_USER_FAILED",
  withPayloadType<Error>()
);

export const getArticleByIdAction = createAction(
  "GET_ARTICLE_BY_ID_REQUEST",
  withPayloadType<string>()
);

export const getArticleByIdActionSuccess = createAction(
  "GET_ARTICLE_BY_ID_SUCCESS",
  withPayloadType<Article>()
);
export const getArticleByIdActionFailed = createAction(
  "GET_ARTICLE_BY_ID_FAILED",
  withPayloadType<Article>()
);
