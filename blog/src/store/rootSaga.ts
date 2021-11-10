import { all } from "redux-saga/effects";
import {
  getArticlesSagaWatcher,
  likeArticlesSagaWatcher,
  deleteLikeFromArticlesSagaWatcher,
  saveCommentSagaWatcher,
  getArticleByIdSagaWatcher,
} from "../article/sagas/articleWatchers";
import {
  getUserWatcher,
  addToBookmarksWatcher,
  deleteFromBookmarksWatcher,
} from "../authorization/sagas/userWatchers";

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
  yield rootSagaWatcher();
}
