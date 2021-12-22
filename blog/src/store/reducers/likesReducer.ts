import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteLikeFailedAction,
  deleteLikeSuccessAction,
  getLikeCountFailedAction,
  getLikeCountSuccessAction,
  isLikeExistFailedAction,
  isLikeExistSuccessAction,
  saveLikeAction,
  saveLikeFailedAction,
} from "../../article/articlePageActions";

export type LikeState = {
  isLiked: boolean;
  count: number;
};

const DEFAULT_LIKE_STATE: LikeState = {
  isLiked: false,
  count: 0,
};

export default function likesReducer(
  state: LikeState = DEFAULT_LIKE_STATE,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case isLikeExistSuccessAction.type:
      return { ...state, isLiked: action.payload };
    case getLikeCountSuccessAction.type:
      return { ...state, count: action.payload };
    case saveLikeAction.type:
      return { count: ++state.count, isLiked: true };
    case deleteLikeSuccessAction.type:
      return { count: --state.count, isLiked: false };
    case isLikeExistFailedAction.type:
    case getLikeCountFailedAction.type:
    case saveLikeFailedAction.type:
    case deleteLikeFailedAction.type:
      return { ...state };
    default:
      return state;
  }
}
