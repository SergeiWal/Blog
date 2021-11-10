import { call, put } from "redux-saga/effects";
import { Articles, Article } from "../types/articleTypes";
import {
  getArticles,
  getArticlesById,
  updateArticle,
} from "../../api/apiService";
import {
  GetArticle,
  LikeArticle,
  SaveComment,
} from "../types/articleActionsType";
import {
  setArticleAction,
  getArticleByIdLoadedAction,
} from "../articleActions";
import {
  fetchFinishedAction,
  fetchStartAction,
} from "../../store/fetchActions";

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
  const { article, user } = payload;
  article.likes.push(user.id);
  yield call(updateArticle, article);
}

export function* deleteLikeFromArticlesSagaWorker({ payload }: LikeArticle) {
  const { article, user } = payload;
  const index: number = payload.article.likes.indexOf(user.id);
  article.likes.splice(index, 1);
  yield call(updateArticle, article);
}

export function* saveCommentSagaWorker({ payload }: SaveComment) {
  const { article, comment } = payload;
  article.comments.push(comment);
  yield call(updateArticle, article);
}