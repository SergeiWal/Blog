import { put, call } from "redux-saga/effects";
import { User } from "../../types/userTypes";
import { getCurrentUserLoadedAction } from "../../actions/userAction";
import { AddToBookmarks, GetCurrentUser } from "../../types/userActionsTypes";
import {
  getUserById,
  addToBookmarks,
  deleteFromBookmarks,
} from "../../services/apiService";
import {
  fetchFinishedAction,
  fetchStartAction,
} from "../../actions/fetchActions";
import { signInAction } from "../../actions/authorizeActions";

export function* getUserSagaWorker({ payload }: GetCurrentUser) {
  yield put(fetchStartAction());
  const data: User = yield call(getUserById, payload);
  yield put(getCurrentUserLoadedAction(data));
  yield put(signInAction());
  yield put(fetchFinishedAction());
}

export function* addToBookmarksWorker({ payload }: AddToBookmarks) {
  yield call(addToBookmarks, payload.user, payload.articleId);
}

export function* deleteFromBookmarksWorker({ payload }: AddToBookmarks) {
  yield call(deleteFromBookmarks, payload.user, payload.articleId);
}
