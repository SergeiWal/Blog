import { put, call } from "redux-saga/effects";
import { User } from "../../types/userTypes";
import { getCurrentUserAction } from "../../actions/userAction";
import { AddToBookmarks } from "../../types/userActionsTypes";
import {
  getCurrentUser,
  getUserById,
  addToBookmarks,
  deleteFromBookmarks,
} from "../../services/apiService";

export function* getCurrentUserSagaWorker() {
  const data: User = yield call(getCurrentUser);
  yield put(getCurrentUserAction(data));
}

export function* addToBookmarksWorker({ payload }: AddToBookmarks) {
  const user: User = yield call(getUserById, payload.userId);
  yield call(addToBookmarks, user, payload.articleId);
}

export function* deleteFromBookmarksWorker({ payload }: AddToBookmarks) {
  const user: User = yield call(getUserById, payload.userId);
  yield call(deleteFromBookmarks, user, payload.articleId);
}
