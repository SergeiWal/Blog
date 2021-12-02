import { call } from "redux-saga/effects";
import { Article } from "./types/articleTypes";
import { updateLikeArticle } from "../api/apiService";
import { PayloadAction } from "@reduxjs/toolkit";

export function* likeArticleSagaWorker({ payload }: PayloadAction<Article>) {
  yield call(updateLikeArticle, payload);
}

// export function* commentsSagaWorker({ payload }: PayloadAction<Article>) {
//   yield call(updateCommentsArticle, payload);
// }
