import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { NewArticle } from "./containers/createArticleContainer";

export const addArticleAction = createAction(
  "ADD_ARTICLE_REQUEST",
  withPayloadType<NewArticle>()
);

export const addArticleSuccessAction = createAction("ADD_ARTICLE_SUCCESS");

export const addArticleFailedAction = createAction("ADD_ARTICLE_FAILED");
