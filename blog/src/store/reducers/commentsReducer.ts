import { PayloadAction } from "@reduxjs/toolkit";
import {
  getCommentsFailedAction,
  getCommentsSuccessAction,
  saveCommentFailedAction,
  saveCommentSuccessAction,
} from "../../article/articlePageActions";
import { ArticleComment } from "../../article/types/articleTypes";

export function commentsReducer(
  state: ArticleComment[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getCommentsSuccessAction.type:
      return [...action.payload];
    case saveCommentSuccessAction.type:
      return [...state, action.payload];
    case getCommentsFailedAction.type:
    case saveCommentFailedAction.type:
      return [...state];
    default:
      return state;
  }
}
