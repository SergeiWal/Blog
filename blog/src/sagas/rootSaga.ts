import { all } from "redux-saga/effects";
import { getCurrentUserSagaWorker } from "./workers/userWorkers";
import {
  getArticlesSagaWatcher,
  likeArticlesSagaWatcher,
  deleteLikeFromArticlesSagaWatcher,
  saveCommentSagaWatcher,
} from "./wathers/articleWatchers";
import {
  addToBookmarksWatcher,
  deleteFromBookmarksWatcher,
} from "./wathers/userWatchers";

export function* rootSagaWatcher() {
  yield all([
    getArticlesSagaWatcher(),
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
    saveCommentSagaWatcher(),
  ]);
}

export default function* rootSaga() {
  yield getCurrentUserSagaWorker();
  yield rootSagaWatcher();
}
