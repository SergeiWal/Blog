import { call, put } from "redux-saga/effects";
import { Articles, Article } from "./types/articleTypes";
import { getArticles, getArticlesById, updateArticle } from "../api/apiService";
import { PayloadAction } from "@reduxjs/toolkit";
import { LikePayload, SaveCommentPayload } from "./types/articleActionsType";
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

export function* likeArticleSagaWorker({
  payload,
}: PayloadAction<LikePayload>) {
  const { article, user } = payload;
  article.likes.push(user.id);
  yield call(updateArticle, article);
}

export function* deleteLikeFromArticlesSagaWorker({
  payload,
}: PayloadAction<LikePayload>) {
  const { article, user } = payload;
  const index: number = payload.article.likes.indexOf(user.id);
  article.likes.splice(index, 1);
  yield call(updateArticle, article);
}

export function* saveCommentSagaWorker({
  payload,
}: PayloadAction<SaveCommentPayload>) {
  const { article, comment } = payload;
  article.comments.push(comment);
  yield call(updateArticle, article);
}
