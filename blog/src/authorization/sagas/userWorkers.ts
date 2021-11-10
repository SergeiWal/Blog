import { put, call } from "redux-saga/effects";
import { User } from "../types/userTypes";
import { getCurrentUserLoadedAction } from "../actions/userAction";
import { AddToBookmarks, GetCurrentUser } from "../types/userActionsTypes";
import { getUserById, updateUser } from "../../api/apiService";
import {
  fetchFinishedAction,
  fetchStartAction,
} from "../../store/fetchActions";
import { signInAction } from "../actions/authorizeActions";

export function* getUserSagaWorker({ payload }: GetCurrentUser) {
  yield put(fetchStartAction());
  const data: User = yield call(getUserById, payload);
  yield put(getCurrentUserLoadedAction(data));
  yield put(signInAction());
  yield put(fetchFinishedAction());
}

export function* addToBookmarksWorker({ payload }: AddToBookmarks) {
  const { user, articleId } = payload;
  user.bookmarks.push(articleId);
  yield call(updateUser, user);
}

export function* deleteFromBookmarksWorker({ payload }: AddToBookmarks) {
  const { user, articleId } = payload;
  const index = user.bookmarks.indexOf(articleId);
  user.bookmarks.splice(index, 1);
  yield call(updateUser, user);
}
