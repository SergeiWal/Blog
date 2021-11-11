import { call, put } from "redux-saga/effects";
import { Articles, Article } from "./types/articleTypes";
import { getArticles, getArticlesById, updateArticle } from "../api/apiService";
import { Action } from "../store/actionTypes";
import { setArticleAction, getArticleByIdLoadedAction } from "./articleActions";

export function* setArticleSagaWorker() {
  const data: Articles = yield call(getArticles);
  yield put(setArticleAction(data));
}

export function* getArticleByIdSagaWorker({ payload }: Action<any>) {
  const article: Article = yield call(getArticlesById, payload);
  yield put(getArticleByIdLoadedAction(article));
}

export function* likeArticleSagaWorker({ payload }: Action<any>) {
  const { article, user } = payload;
  article.likes.push(user.id);
  yield call(updateArticle, article);
}

export function* deleteLikeFromArticlesSagaWorker({ payload }: Action<any>) {
  const { article, user } = payload;
  const index: number = payload.article.likes.indexOf(user.id);
  article.likes.splice(index, 1);
  yield call(updateArticle, article);
}

export function* saveCommentSagaWorker({ payload }: Action<any>) {
  const { article, comment } = payload;
  article.comments.push(comment);
  yield call(updateArticle, article);
}
