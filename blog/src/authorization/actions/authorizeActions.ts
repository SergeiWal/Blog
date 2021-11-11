import { SIGN_IN, SIGN_OUT } from "../constants/authorize";
import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../store/store";
import { User } from "../types/userTypes";
import { Article } from "../../article/types/articleTypes";

export const GET_ARTICLE_BY_ID_REQUEST: string = "GET_ARTICLE_BY_ID_REQUEST";
export const GET_ARTICLE_BY_ID_LOADED: string = "GET_ARTICLE_BY_ID_LOADED";
export const GET_ARTICLE_BY_ID_FAILED: string = "GET_ARTICLE_BY_ID_FAILED";
export const GET_USER_REQUEST: string = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: string = "GET_USER_SUCCESS";

export const signInAction = createAction(SIGN_IN);

export const signOutAction = createAction(SIGN_OUT);

export const getCurrentUserAction = createAction(
  GET_USER_REQUEST,
  withPayloadType<string>()
);
export const getCurrentUserLoadedAction = createAction(
  GET_USER_SUCCESS,
  withPayloadType<User>()
);

export const getArticleByIdAction = createAction(
  GET_ARTICLE_BY_ID_REQUEST,
  withPayloadType<string>()
);

export const getArticleByIdLoadedAction = createAction(
  GET_ARTICLE_BY_ID_LOADED,
  withPayloadType<Article>()
);
