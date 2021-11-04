import { takeEvery } from "redux-saga/effects";
import { LIKE, DELETE_LIKE } from "../../constants/article";
import {
  likeArticleSagaWorker,
  deleteLikeFromArticlesSagaWorker,
} from "../workers/articlesWorkers";

export function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

export function* deleteLikeFromArticlesSagaWatcher() {
  yield takeEvery(DELETE_LIKE, deleteLikeFromArticlesSagaWorker);
}
