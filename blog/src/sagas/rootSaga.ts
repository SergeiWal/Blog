import { all } from "redux-saga/effects";
import { setArticleSagaWorker } from "./workers/articlesWorkers";
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

export default function* rootSaga() {
  // yield setArticleSagaWorker();
  yield getCurrentUserSagaWorker();
  yield all([
    getArticlesSagaWatcher(),
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
    saveCommentSagaWatcher(),
  ]);
}
