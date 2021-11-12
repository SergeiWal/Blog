import { call, put } from "redux-saga/effects";
import { Articles, Article } from "./types/articleTypes";
import {
  getArticles,
  getArticlesById,
  updateCommentsArticle,
  updateLikeArticle,
} from "../api/apiService";
import { PayloadAction } from "@reduxjs/toolkit";
import { getArticleActionLoaded } from "../Feed/articleListActions";
import { getArticleByIdLoadedAction } from "../authorization/actions/authorizeActions";

export function* setArticleSagaWorker() {
  const data: Articles = yield call(getArticles);
  yield put(getArticleActionLoaded(data));
}

export function* getArticleByIdSagaWorker({ payload }: PayloadAction<string>) {
  const article: Article = yield call(getArticlesById, payload);
  yield put(getArticleByIdLoadedAction(article));
}

export function* likeArticleSagaWorker({ payload }: PayloadAction<Article>) {
  yield call(updateLikeArticle, payload);
}

export function* commentsSagaWorker({ payload }: PayloadAction<Article>) {
  yield call(updateCommentsArticle, payload);
}
