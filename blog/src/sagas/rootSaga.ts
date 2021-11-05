import { all } from "redux-saga/effects";
import { getArticleSagaWorker } from "./workers/articlesWorkers";
import { getCurrentUserSagaWorker } from "./workers/userWorkers";
import {
  likeArticlesSagaWatcher,
  deleteLikeFromArticlesSagaWatcher,
  saveCommentSagaWatcher,
} from "./wathers/articleWatchers";
import {
  addToBookmarksWatcher,
  deleteFromBookmarksWatcher,
} from "./wathers/userWatchers";

export default function* rootSaga() {
  yield getArticleSagaWorker();
  yield getCurrentUserSagaWorker();
  yield all([
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
    saveCommentSagaWatcher(),
  ]);
}
