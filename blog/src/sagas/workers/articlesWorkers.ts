import { call, put } from "redux-saga/effects";
import { Articles, Article } from "../../types/articleTypes";
import {
  getArticles,
  getArticlesById,
  likeArticle,
  deleteLikeFromArticle,
  saveComment,
} from "../../services/apiService";
import { LikeArticle, SaveComment } from "../../types/articleActionsType";
import { setArticleAction } from "../../actions/articleActions";

export function* setArticleSagaWorker() {
  const data: Articles = yield call(getArticles);
  yield put(setArticleAction(data));
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
