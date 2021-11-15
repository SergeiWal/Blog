import { createAction } from "@reduxjs/toolkit";
import { Article } from "../article/types/articleTypes";
import { withPayloadType } from "../store/store";

export const getArticleAction = createAction("GET_ARTICLES_REQUEST");

export const getArticleActionSuccess = createAction(
  "GET_ARTICLES_REQUEST_SUCCESS",
  withPayloadType<Article[]>()
);

export const changeFilterAction = createAction("CHANGED_FILTER");
