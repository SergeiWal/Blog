import { createAction } from "@reduxjs/toolkit";
import { AddArticlePayload } from "../store/requestsPayloads";
import { withPayloadType } from "../store/store";

export const addArticleAction = createAction(
  "ADD_ARTICLE_REQUEST",
  withPayloadType<AddArticlePayload>()
);

export const addArticleSuccessAction = createAction("ADD_ARTICLE_SUCCESS");

export const addArticleFailedAction = createAction("ADD_ARTICLE_FAILED");
