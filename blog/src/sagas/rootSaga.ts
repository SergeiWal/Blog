import { put, call, takeEvery, all } from "redux-saga/effects";
import { LikeArticle, loadArticleAction } from "../actions/articleActions";
import { DELETE_LIKE, LIKE } from "../constants/article";
import { Article } from "../types/articleTypes";
import { User } from "../types/userTypes";
import { AddToBookmarks, getCurrentUserAction } from "../actions/userAction";
import {
  addToBookmarks,
  getArticles,
  getArticlesById,
  getCurrentUser,
  getUserById,
  likeArticle,
  deleteLikeFromArticle,
  deleteFromBookmarks,
} from "../services/apiService";
import { ADD_TO_BOOKMARKS, DELETE_FROM_BOOKMARKS } from "../constants/user";

function* getArticleSagaWorker() {
  const data: Article[] = yield call(getArticles);
  yield put(loadArticleAction(data));
}

function* getCurrentUserSagaWorker() {
  const data: User = yield call(getCurrentUser);
  yield put(getCurrentUserAction(data));
}

function* likeArticleSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(likeArticle, article, payload.userId);
}

function* deleteLikeFromArticlesSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(deleteLikeFromArticle, article, payload.userId);
}

function* addToBookmarksWorker({ payload }: AddToBookmarks) {
  const user: User = yield call(getUserById, payload.userId);
  yield call(addToBookmarks, user, payload.articleId);
}

function* deleteFromBookmarksWorker({ payload }: AddToBookmarks) {
  const user: User = yield call(getUserById, payload.userId);
  yield call(deleteFromBookmarks, user, payload.articleId);
}

function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

function* deleteLikeFromArticlesSagaWatcher() {
  yield takeEvery(DELETE_LIKE, deleteLikeFromArticlesSagaWorker);
}

function* addToBookmarksWatcher() {
  yield takeEvery(ADD_TO_BOOKMARKS, addToBookmarksWorker);
}

function* deleteFromBookmarksWatcher() {
  yield takeEvery(DELETE_FROM_BOOKMARKS, deleteFromBookmarksWorker);
}

export default function* rootSaga() {
  yield getArticleSagaWorker();
  yield getCurrentUserSagaWorker();
  yield all([
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
  ]);
}
