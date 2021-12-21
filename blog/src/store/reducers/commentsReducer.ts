import { PayloadAction } from "@reduxjs/toolkit";
import {
  getCommentsFailedAction,
  getCommentsSuccessAction,
  saveCommentFailedAction,
  saveCommentSuccessAction,
} from "../../article/articlePageActions";
import { Article, ArticleComment } from "../../article/types/articleTypes";
import { User } from "../../authorization/types/userTypes";

export type GetCommentsPayload = {
  token: string;
  id: string;
};

export type SaveCommentPayload = {
  token: string;
  _id?: string;
  article: Article;
  author: User;
  text: string;
};

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
