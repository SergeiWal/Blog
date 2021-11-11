import { all, put, takeEvery } from "redux-saga/effects";
import {
  DELETE_LIKE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLE_BY_ID_REQUEST,
  LIKE,
  SAVE_COMMENT,
} from "../article/constants/article";
import {
  deleteLikeFromArticlesSagaWorker,
  getArticleByIdSagaWorker,
  likeArticleSagaWorker,
  saveCommentSagaWorker,
  setArticleSagaWorker,
} from "../article/sagas/articlesWorkers";
import {
  getArticlesSagaWatcher,
  likeArticlesSagaWatcher,
  deleteLikeFromArticlesSagaWatcher,
  saveCommentSagaWatcher,
  getArticleByIdSagaWatcher,
} from "../article/sagas/articleWatchers";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_USER_REQUEST,
} from "../authorization/constants/user";
import {
  getUserWatcher,
  addToBookmarksWatcher,
  deleteFromBookmarksWatcher,
} from "../authorization/sagas/userWatchers";
import {
  addToBookmarksWorker,
  deleteFromBookmarksWorker,
  getUserSagaWorker,
} from "../authorization/sagas/userWorkers";
import { Action } from "./actionTypes";
import { fetchFinishedAction, fetchStartAction } from "./fetchActions";

export function* mainSagaWorker(action: Action<any>) {
  const isRequest: boolean = action.type.toUpperCase().includes("REQUEST");
  const worker = isRequest ? requestSagaWorker : vanillaSagaWorker;
  yield worker(action);
}

export const workers = {
  [GET_ARTICLES_REQUEST]: setArticleSagaWorker,
  [GET_ARTICLE_BY_ID_REQUEST]: getArticleByIdSagaWorker,
  [LIKE]: likeArticleSagaWorker,
  [DELETE_LIKE]: deleteLikeFromArticlesSagaWorker,
  [SAVE_COMMENT]: saveCommentSagaWorker,
  [GET_USER_REQUEST]: getUserSagaWorker,
  [ADD_TO_BOOKMARKS]: addToBookmarksWorker,
  [DELETE_FROM_BOOKMARKS]: deleteFromBookmarksWorker,
};

export function* vanillaSagaWorker(action: Action<any>) {
  const worker = workers[action.type];
  yield worker(action);
}

export function* requestSagaWorker(action: Action<any>) {
  yield put(fetchStartAction());
  yield vanillaSagaWorker(action);
  yield put(fetchFinishedAction());
}

export function* rootSagaWatcher() {
  yield all([
    takeEvery(GET_USER_REQUEST, mainSagaWorker),
    takeEvery(ADD_TO_BOOKMARKS, mainSagaWorker),
    takeEvery(DELETE_FROM_BOOKMARKS, mainSagaWorker),
    getArticlesSagaWatcher(),
    getArticleByIdSagaWatcher(),
    getUserWatcher(),
    likeArticlesSagaWatcher(),
    deleteLikeFromArticlesSagaWatcher(),
    addToBookmarksWatcher(),
    deleteFromBookmarksWatcher(),
    saveCommentSagaWatcher(),
  ]);
}

export default function* rootSaga() {
  yield rootSagaWatcher();
  //yield mainSagaWatcher();
}
