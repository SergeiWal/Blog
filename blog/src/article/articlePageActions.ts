import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { Article, ArticleComment } from "./types/articleTypes";
import { User } from "../authorization/types/userTypes";
import { Like, NewLike } from "./types/articleActionsType";

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

// -----

export const isLikeExistAction = createAction(
  "IS_LIKE_EXIST_REQUEST",
  withPayloadType<Like>()
);
export const isLikeExistSuccessAction = createAction(
  "IS_LIKE_EXIST_SUCCESS",
  withPayloadType<boolean>()
);
export const isLikeExistFailedAction = createAction(
  "IS_LIKE_EXIST_FAILED",
  withPayloadType<Error>()
);

export const getLikeCountAction = createAction(
  "GET_LIKE_COUNT_REQUEST",
  withPayloadType<string>()
);
export const getLikeCountSuccessAction = createAction(
  "GET_LIKE_COUNT_SUCCESS",
  withPayloadType<number>()
);
export const getLikeCountFailedAction = createAction(
  "GET_LIKE_COUNT_FAILED",
  withPayloadType<Error>()
);

export const saveLikeAction = createAction(
  "SAVE_LIKE_REQUEST",
  withPayloadType<NewLike>()
);
export const saveLikeSuccessAction = createAction("SAVE_LIKE_SUCCESS");
export const saveLikeFailedAction = createAction(
  "SAVE_LIKE_FAILED",
  withPayloadType<Error>()
);

export const deleteLikeAction = createAction(
  "DELETE_LIKE_REQUEST",
  withPayloadType<Like>()
);
export const deleteLikeSuccessAction = createAction("DELETE_LIKE_SUCCESS");
export const deleteLikeFailedAction = createAction(
  "DELETE_LIKE_FAILED",
  withPayloadType<Error>()
);

//----

export const bookmarksAction = createAction(
  "BOOKMARK",
  withPayloadType<User>()
);
