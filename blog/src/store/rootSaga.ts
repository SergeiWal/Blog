import { all, put, takeEvery } from "redux-saga/effects";
import { LIKE, SAVE_COMMENT } from "../article/constants/article";
import {
  getArticleByIdSagaWorker,
  likeArticleSagaWorker,
  commentsSagaWorker,
  setArticleSagaWorker,
} from "../article/articlesWorkers";
import {
  bookmarkWorker,
  getUserSagaWorker,
} from "../authorization/userWorkers";
import { fetchFinishedAction, fetchStartAction } from "./fetchActions";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import {
  GET_ARTICLE_BY_ID_REQUEST,
  GET_USER_REQUEST,
} from "../authorization/actions/authorizeActions";
import { BOOKMARK } from "../article/articlePageActions";
import { GET_ARTICLES_REQUEST } from "../Feed/constants/feedConstants";

const FAILED = "_FAILED";
const requestWorkers = {
  [GET_ARTICLES_REQUEST]: setArticleSagaWorker,
  [GET_ARTICLE_BY_ID_REQUEST]: getArticleByIdSagaWorker,
  [GET_USER_REQUEST]: getUserSagaWorker,
};

function* requestSagaWorker(action: PayloadAction<any>) {
  try {
    yield put(fetchStartAction());
    yield requestWorkers[action.type](action);
  } catch (err) {
    yield put({ type: action.type + FAILED });
  } finally {
    yield put(fetchFinishedAction());
  }
}

export function* rootSagaWatcher() {
  yield all([
    takeEvery(
      (action: Action) => /REQUEST$/.test(action.type),
      requestSagaWorker
    ),
    takeEvery(BOOKMARK, bookmarkWorker),
    takeEvery(LIKE, likeArticleSagaWorker),
    takeEvery(SAVE_COMMENT, commentsSagaWorker),
  ]);
}

export default function* rootSaga() {
  yield rootSagaWatcher();
}
