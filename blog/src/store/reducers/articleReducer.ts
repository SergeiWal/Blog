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
import { addArticleSuccessAction } from "../../createArticle/actions";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getArticleActionSuccess.type:
      return [...action.payload];
    case getArticleByIdActionSuccess.type:
      return [...state, action.payload];
    case getArticleActionFailed.type:
    case getArticleByIdActionFailed.type:
    case addArticleSuccessAction.type:
    case likeArticleAction.type:
    case saveCommentAction.type:
      return [...state];
    default:
      return state;
  }
}
