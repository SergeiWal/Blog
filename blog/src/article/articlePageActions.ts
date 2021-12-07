import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { Article, ArticleComment } from "./types/articleTypes";
import { User } from "../authorization/types/userTypes";

export const likeArticleAction = createAction(
  "LIKE",
  withPayloadType<Article>()
);

export const getCommentsAction = createAction(
  "GET_COMMENTS_REQUEST",
  withPayloadType<string>()
);

export const getCommentsSuccessAction = createAction(
  "GET_COMMENTS_SUCCESS",
  withPayloadType<ArticleComment[]>()
);

export const getCommentsFailedAction = createAction(
  "GET_COMMENTS_FAILED",
  withPayloadType<Error>()
);

export const saveCommentAction = createAction(
  "SAVE_COMMENT_REQUEST",
  withPayloadType<ArticleComment>()
);

export const saveCommentSuccessAction = createAction(
  "SAVE_COMMENT_SUCCESS",
  withPayloadType<ArticleComment>()
);

export const saveCommentFailedAction = createAction(
  "SAVE_COMMENT_FAILED",
  withPayloadType<Error>()
);

export const bookmarksAction = createAction(
  "BOOKMARK",
  withPayloadType<User>()
);
