import { Articles } from "../../article/types/articleTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getArticleActionFailed,
  getArticleActionSuccess,
} from "../../Feed/articleListActions";
import { saveCommentAction } from "../../article/articlePageActions";
import {
  getArticleByIdActionFailed,
  getArticleByIdActionSuccess,
} from "../../authorization/actions/authorizeActions";
import { addArticleSuccessAction } from "../../createArticle/actions";
import {
  deleteArticleSuccessAction,
  deleteArticleFailedAction,
} from "../../dashboard/actions";

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
    case deleteArticleSuccessAction.type:
    case deleteArticleFailedAction.type:
    case getArticleActionFailed.type:
    case getArticleByIdActionFailed.type:
    case addArticleSuccessAction.type:
    case saveCommentAction.type:
      return [...state];
    default:
      return state;
  }
}
