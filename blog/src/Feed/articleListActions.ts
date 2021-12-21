import { createAction } from "@reduxjs/toolkit";
import { Article } from "../article/types/articleTypes";
import { withPayloadType } from "../store/store";
import { getRequestPayload } from "../globalTypes";

export const getArticleAction = createAction(
  "GET_ARTICLES_REQUEST",
  withPayloadType<getRequestPayload>()
);

export const getArticleActionSuccess = createAction(
  "GET_ARTICLES_SUCCESS",
  withPayloadType<Article[]>()
);

export const getArticleActionFailed = createAction(
  "GET_ARTICLES_FAILED",
  withPayloadType<Error>()
);

export const changeFilterAction = createAction("CHANGED_FILTER");
