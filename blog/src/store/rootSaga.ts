import { all, put, takeEvery } from "redux-saga/effects";
import { DELETE_LIKE, LIKE, SAVE_COMMENT } from "../article/constants/article";
import {
  deleteLikeFromArticlesSagaWorker,
  getArticleByIdSagaWorker,
  likeArticleSagaWorker,
  saveCommentSagaWorker,
  setArticleSagaWorker,
} from "../article/articlesWorkers";

import {
  addToBookmarksWorker,
  deleteFromBookmarksWorker,
  getUserSagaWorker,
} from "../authorization/userWorkers";
import { fetchFinishedAction, fetchStartAction } from "./fetchActions";
import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ARTICLES_REQUEST } from "../articleList/articleListActions";
import {
  GET_ARTICLE_BY_ID_REQUEST,
  GET_USER_REQUEST,
} from "../authorization/actions/authorizeActions";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
} from "../article/articlePageActions";

const workers = {
  [GET_ARTICLES_REQUEST]: setArticleSagaWorker,
  [GET_ARTICLE_BY_ID_REQUEST]: getArticleByIdSagaWorker,
  [LIKE]: likeArticleSagaWorker,
  [DELETE_LIKE]: deleteLikeFromArticlesSagaWorker,
  [SAVE_COMMENT]: saveCommentSagaWorker,
  [GET_USER_REQUEST]: getUserSagaWorker,
  [ADD_TO_BOOKMARKS]: addToBookmarksWorker,
  [DELETE_FROM_BOOKMARKS]: deleteFromBookmarksWorker,
};

function* baseSagaWorker(action: PayloadAction<any>) {
  const worker = workers[action.type];
  yield worker(action);
}

function* requestSagaWorker(action: PayloadAction<any>) {
  yield put(fetchStartAction());
  yield baseSagaWorker(action);
  yield put(fetchFinishedAction());
}

function* dispatcherSagaWorker(action: PayloadAction<any>) {
  const isRequest: boolean = action.type.toUpperCase().includes("REQUEST");
  const worker = isRequest ? requestSagaWorker : baseSagaWorker;
  yield worker(action);
}

export function* rootSagaWatcher() {
  yield all([
    takeEvery(GET_USER_REQUEST, dispatcherSagaWorker),
    takeEvery(ADD_TO_BOOKMARKS, dispatcherSagaWorker),
    takeEvery(DELETE_FROM_BOOKMARKS, dispatcherSagaWorker),
    takeEvery(GET_ARTICLES_REQUEST, dispatcherSagaWorker),
    takeEvery(GET_ARTICLE_BY_ID_REQUEST, dispatcherSagaWorker),
    takeEvery(LIKE, dispatcherSagaWorker),
    takeEvery(DELETE_LIKE, dispatcherSagaWorker),
    takeEvery(SAVE_COMMENT, dispatcherSagaWorker),
  ]);
}

export default function* rootSaga() {
  yield rootSagaWatcher();
}
