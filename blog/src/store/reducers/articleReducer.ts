import { Articles } from "../../article/types/articleTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getArticleActionFailed,
  getArticleActionSuccess,
} from "../../Feed/articleListActions";
import {
  likeArticleAction,
  saveCommentAction,
} from "../../article/articlePageActions";
import {
  getArticleByIdActionFailed,
  getArticleByIdActionSuccess,
} from "../../authorization/actions/authorizeActions";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getArticleActionSuccess.type:
      return [...action.payload];
    case getArticleActionFailed.type:
      return [...state];
    case getArticleByIdActionSuccess.type:
      return [...state, action.payload];
    case getArticleByIdActionFailed.type:
      return [...state];
    case likeArticleAction.type:
      return [...state];
    case saveCommentAction.type:
      return [...state];
    default:
      return state;
  }
}
