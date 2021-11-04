import { takeEvery } from "redux-saga/effects";
import { ADD_TO_BOOKMARKS, DELETE_FROM_BOOKMARKS } from "../../constants/user";
import {
  addToBookmarksWorker,
  deleteFromBookmarksWorker,
} from "../workers/userWorkers";

export function* addToBookmarksWatcher() {
  yield takeEvery(ADD_TO_BOOKMARKS, addToBookmarksWorker);
}

export function* deleteFromBookmarksWatcher() {
  yield takeEvery(DELETE_FROM_BOOKMARKS, deleteFromBookmarksWorker);
}
