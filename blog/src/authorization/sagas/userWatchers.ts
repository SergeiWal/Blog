import { takeEvery } from "redux-saga/effects";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_USER,
} from "../constants/user";
import {
  addToBookmarksWorker,
  deleteFromBookmarksWorker,
  getUserSagaWorker,
} from "./userWorkers";

export function* getUserWatcher() {
  yield takeEvery(GET_USER, getUserSagaWorker);
}

export function* addToBookmarksWatcher() {
  yield takeEvery(ADD_TO_BOOKMARKS, addToBookmarksWorker);
}

export function* deleteFromBookmarksWatcher() {
  yield takeEvery(DELETE_FROM_BOOKMARKS, deleteFromBookmarksWorker);
}
