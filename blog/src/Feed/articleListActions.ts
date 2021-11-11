import { createAction } from "@reduxjs/toolkit";
import { Article } from "../article/types/articleTypes";
import { withPayloadType } from "../store/store";

export const GET_ARTICLES_REQUEST: string = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS: string = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILED: string = "GET_ARTICLES_FAILED";

export const getArticleAction = createAction(GET_ARTICLES_REQUEST);

export const getArticleActionLoaded = createAction(
  GET_ARTICLES_SUCCESS,
  withPayloadType<Article[]>()
);
