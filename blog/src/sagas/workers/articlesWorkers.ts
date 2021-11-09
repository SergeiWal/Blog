import { call, put } from "redux-saga/effects";
import { Articles, Article } from "../../types/articleTypes";
import {
  getArticles,
  getArticlesById,
  likeArticle,
  deleteLikeFromArticle,
  saveComment,
} from "../../services/apiService";
import {
  GetArticle,
  LikeArticle,
  SaveComment,
} from "../../types/articleActionsType";
import {
  setArticleAction,
  getArticleByIdLoadedAction,
} from "../../actions/articleActions";
import {
  fetchFinishedAction,
  fetchStartAction,
} from "../../actions/fetchActions";

export function* setArticleSagaWorker() {
  yield put(fetchStartAction());
  const data: Articles = yield call(getArticles);
  yield put(setArticleAction(data));
  yield put(fetchFinishedAction());
}

export function* getArticleByIdSagaWorker({ payload }: GetArticle) {
  yield put(fetchStartAction());
  const article: Article = yield call(getArticlesById, payload);
  yield put(getArticleByIdLoadedAction(article));
  yield put(fetchFinishedAction());
}

export function* likeArticleSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(likeArticle, article, payload.userId);
}

export function* deleteLikeFromArticlesSagaWorker({ payload }: LikeArticle) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(deleteLikeFromArticle, article, payload.userId);
}

export function* saveCommentSagaWorker({ payload }: SaveComment) {
  const article: Article = yield call(getArticlesById, payload.articleId);
  yield call(saveComment, article, payload.comment);
}
