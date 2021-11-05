import { takeEvery } from "redux-saga/effects";
import { LIKE, DELETE_LIKE, SAVE_COMMENT } from "../../constants/article";
import {
  likeArticleSagaWorker,
  deleteLikeFromArticlesSagaWorker,
  saveCommentSagaWorker,
} from "../workers/articlesWorkers";

export function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

export function* deleteLikeFromArticlesSagaWatcher() {
  yield takeEvery(DELETE_LIKE, deleteLikeFromArticlesSagaWorker);
}

export function* saveCommentSagaWatcher() {
  yield takeEvery(SAVE_COMMENT, saveCommentSagaWorker);
}
