import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../store/store";
import { User } from "../types/userTypes";
import { Article } from "../../article/types/articleTypes";
import { SignUpPayload } from "../../store/reducers/signUpReducer";
import {
  ArticlePayload,
  SignInResponsePayload,
  SignInUpPayload,
} from "../../store/requestsPayloads";

export const signInAction = createAction(
  "SIGN_IN_REQUEST",
  withPayloadType<SignInUpPayload>()
);

export const signInSuccessAction = createAction(
  "SIGN_IN_SUCCESS",
  withPayloadType<SignInResponsePayload>()
);

export const signInFailedAction = createAction(
  "SIGN_IN_FAILED",
  withPayloadType<Error>()
);

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
  withPayloadType<ArticlePayload>()
);

export const getArticleByIdActionSuccess = createAction(
  "GET_ARTICLE_BY_ID_SUCCESS",
  withPayloadType<Article>()
);
export const getArticleByIdActionFailed = createAction(
  "GET_ARTICLE_BY_ID_FAILED",
  withPayloadType<Article>()
);

export const signUpAction = createAction(
  "SIGN_UP_REQUEST",
  withPayloadType<SignUpPayload>()
);

export const signUpSuccessAction = createAction(
  "SIGN_UP_SUCCESS",
  withPayloadType<User>()
);

export const signUpFailedAction = createAction(
  "SIGN_UP_FAILED",
  withPayloadType<Error>()
);
