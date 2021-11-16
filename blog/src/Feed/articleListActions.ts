import { createAction } from "@reduxjs/toolkit";
import { Article } from "../article/types/articleTypes";
import { withPayloadType } from "../store/store";

export const getArticleAction = createAction("GET_ARTICLES_REQUEST");

export const getArticleActionSuccess = createAction(
  "GET_ARTICLES_SUCCESS",
  withPayloadType<Article[]>()
);

export const getArticleActionFailed = createAction(
  "GET_ARTICLES_FAILED",
  withPayloadType<Error>()
);

export const changeFilterAction = createAction("CHANGED_FILTER");
