import { createAction } from "@reduxjs/toolkit";
import { Article } from "../article/types/articleTypes";
import { withPayloadType } from "../store/store";
import {
  CHANGED_FILTER,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_REQUEST_SUCCESS,
} from "./constants/feedConstants";

export const getArticleAction = createAction(GET_ARTICLES_REQUEST);

export const getArticleActionLoaded = createAction(
  GET_ARTICLES_REQUEST_SUCCESS,
  withPayloadType<Article[]>()
);

export const changeFilterAction = createAction(CHANGED_FILTER);
