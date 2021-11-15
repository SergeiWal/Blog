import { all, put, takeEvery, call } from "redux-saga/effects";
import {
  likeArticleSagaWorker,
  commentsSagaWorker,
} from "../article/articlesWorkers";
import { bookmarkWorker, signInSagaWorker } from "../authorization/userWorkers";
import { fetchFinishedAction, fetchStartAction } from "./fetchActions";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { getArticles, getArticlesById, getUserById } from "../api/apiService";
import { Article, Articles } from "../article/types/articleTypes";
import { User } from "../authorization/types/userTypes";
import { getArticleAction } from "../Feed/articleListActions";
import {
  bookmarksAction,
  likeArticleAction,
  saveCommentAction,
} from "../article/articlePageActions";
import {
  getArticleByIdAction,
  getCurrentUserAction,
  signInAction,
} from "../authorization/actions/authorizeActions";

const FAILED = "_FAILED";
const SUCCESS = "_SUCCESS";
const requestWorkers = {
  [`${getArticleAction.type}`]: getArticles,
  [`${getArticleByIdAction.type}`]: getArticlesById,
  [`${getCurrentUserAction.type}`]: getUserById,
};

export type ResultType = Articles | Article | User;

function* requestSagaWorker(action: PayloadAction<any>) {
  try {
    yield put(fetchStartAction());
    const result: ResultType = yield call(
      requestWorkers[action.type],
      action.payload
    );
    yield put({ type: action.type + SUCCESS, payload: result });
  } catch (err) {
    yield put({ type: action.type + FAILED, payload: err });
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
    takeEvery(bookmarksAction.type, bookmarkWorker),
    takeEvery(likeArticleAction.type, likeArticleSagaWorker),
    takeEvery(saveCommentAction.type, commentsSagaWorker),
    takeEvery(signInAction.type, signInSagaWorker),
  ]);
}

export default function* rootSaga() {
  yield rootSagaWatcher();
}
