import { all } from "redux-saga/effects";
import {
  getArticlesSagaWatcher,
  likeArticlesSagaWatcher,
  deleteLikeFromArticlesSagaWatcher,
  saveCommentSagaWatcher,
  getArticleByIdSagaWatcher,
} from "./wathers/articleWatchers";
import {
  getUserWatcher,
  addToBookmarksWatcher,
  deleteFromBookmarksWatcher,
} from "./wathers/userWatchers";

export function* rootSagaWatcher() {
  yield all([
    getArticlesSagaWatcher(),
    getArticleByIdSagaWatcher(),
    getUserWatcher(),
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
    saveCommentSagaWatcher(),
  ]);
}

export default function* rootSaga() {
  // yield getCurrentUserSagaWorker();
  yield rootSagaWatcher();
}
