import { put, call, takeEvery } from "redux-saga/effects";
import { LikeArticle, loadArticleAction } from "../actions/articleActions";
import { LIKE } from "../constants/article";
import { Article } from "../types/articleTypes";
import { User } from "../types/userTypes";
import { AddToToBookmarks, getCurrentUserAction } from "../actions/userAction";
import {
  addToBookmarks,
  getArticles,
  getArticlesById,
  getCurrentUser,
  getUserById,
  likeArticle,
} from "../services/apiService";
import { ADD_TO_BOOKMARKS } from "../constants/user";

function* getArticleSagaWorker() {
  const data: Article[] = yield call(getArticles);
  yield put(loadArticleAction(data));
}

function* getCurrentUserSagaWorker() {
  const data: User = yield call(getCurrentUser);
  yield put(getCurrentUserAction(data));
}

function* likeArticleSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield getArticlesById(payload.articleId);
  yield call(likeArticle, article, payload.userId);
}

function* addToBookmarksWorker({ payload }: AddToToBookmarks) {
  const user: User = yield getUserById(payload.userId);
  yield call(addToBookmarks, user, payload.articleId);
}

function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

function* addToBookmarksWatcher() {
  yield takeEvery(ADD_TO_BOOKMARKS, addToBookmarksWorker);
}

export default function* rootSaga() {
  yield getArticleSagaWorker();
  yield getCurrentUserSagaWorker();
  yield likeArticlesSagaWatcher();
  yield addToBookmarksWatcher();
}
