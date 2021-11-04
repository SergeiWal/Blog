import { call, put } from "redux-saga/effects";
import { Articles, Article } from "../../types/articleTypes";
import {
  getArticles,
  getArticlesById,
  likeArticle,
  deleteLikeFromArticle,
} from "../../services/apiService";
import { loadArticleAction, LikeArticle } from "../../actions/articleActions";

export function* getArticleSagaWorker() {
  const data: Articles = yield call(getArticles);
  yield put(loadArticleAction(data));
}

export function* likeArticleSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(likeArticle, article, payload.userId);
}

export function* deleteLikeFromArticlesSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(deleteLikeFromArticle, article, payload.userId);
}
