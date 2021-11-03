import { put, call, takeEvery } from "redux-saga/effects";
import { LikeArticle, loadArticleAction } from "../actions/articleActions";
import { LIKE } from "../constants/article";
import { Article } from "../types/articleTypes";
import { User } from "../types/userTypes";
import { getCurrentUserAction } from "../actions/userAction";
import {
  getArticles,
  getArticlesById,
  getCurrentUser,
  likeArticle,
} from "../services/apiService";

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

function* likeArticlesSagaWatcher() {
  yield takeEvery(LIKE, likeArticleSagaWorker);
}

export default function* rootSaga() {
  yield getArticleSagaWorker();
  yield getCurrentUserSagaWorker();
  yield likeArticlesSagaWatcher();
}
