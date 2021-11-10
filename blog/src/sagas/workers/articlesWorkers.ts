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
  yield call(likeArticle, payload.article, payload.user.id);
}

export function* deleteLikeFromArticlesSagaWorker({ payload }: LikeArticle) {
  yield call(deleteLikeFromArticle, payload.article, payload.user.id);
}

export function* saveCommentSagaWorker({ payload }: SaveComment) {
  yield call(saveComment, payload.article, payload.comment);
}
