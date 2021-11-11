import { put, call } from "redux-saga/effects";
import { User } from "./types/userTypes";
import { getCurrentUserLoadedAction } from "./actions/userAction";
import { getUserById, updateUser } from "../api/apiService";
import { signInAction } from "./actions/authorizeActions";
import { Action } from "../store/actionTypes";

export function* getUserSagaWorker({ payload }: Action<any>) {
  const data: User = yield call(getUserById, payload);
  yield put(getCurrentUserLoadedAction(data));
  yield put(signInAction());
}

export function* addToBookmarksWorker({ payload }: Action<any>) {
  const { user, articleId } = payload;
  user.bookmarks.push(articleId);
  yield call(updateUser, user);
}

export function* deleteFromBookmarksWorker({ payload }: Action<any>) {
  const { user, articleId } = payload;
  const index = user.bookmarks.indexOf(articleId);
  user.bookmarks.splice(index, 1);
  yield call(updateUser, user);
}
