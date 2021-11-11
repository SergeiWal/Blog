import { takeEvery } from "redux-saga/effects";
import {
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
  GET_ARTICLES_REQUEST,
  GET_ARTICLE_BY_ID_REQUEST,
} from "../constants/article";
import {
  likeArticleSagaWorker,
  deleteLikeFromArticlesSagaWorker,
  saveCommentSagaWorker,
  setArticleSagaWorker,
  getArticleByIdSagaWorker,
} from "./articlesWorkers";

export function* getArticlesSagaWatcher() {
  yield takeEvery(GET_ARTICLES_REQUEST, setArticleSagaWorker);
}

export function* getArticleByIdSagaWatcher() {
  yield takeEvery(GET_ARTICLE_BY_ID_REQUEST, getArticleByIdSagaWorker);
}

export function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

export function* deleteLikeFromArticlesSagaWatcher() {
  yield takeEvery(DELETE_LIKE, deleteLikeFromArticlesSagaWorker);
}

export function* saveCommentSagaWatcher() {
  yield takeEvery(SAVE_COMMENT, saveCommentSagaWorker);
}
