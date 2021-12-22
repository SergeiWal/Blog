import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { ArticleComment } from "./types/articleTypes";
import {
  BookmarkPayload,
  DeleteLikePayload,
  GetCommentsPayload,
  getLikeCountPayload,
  isExistPayload,
  SaveBookmarkPayload,
  SaveCommentPayload,
  saveLikePayload,
} from "../store/requestsPayloads";

export const getCommentsAction = createAction(
  "GET_COMMENTS_REQUEST",
  withPayloadType<GetCommentsPayload>()
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
  withPayloadType<SaveCommentPayload>()
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
  withPayloadType<isExistPayload>()
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
  withPayloadType<getLikeCountPayload>()
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
  withPayloadType<saveLikePayload>()
);
export const saveLikeSuccessAction = createAction("SAVE_LIKE_SUCCESS");
export const saveLikeFailedAction = createAction(
  "SAVE_LIKE_FAILED",
  withPayloadType<Error>()
);

export const deleteLikeAction = createAction(
  "DELETE_LIKE_REQUEST",
  withPayloadType<DeleteLikePayload>()
);
export const deleteLikeSuccessAction = createAction("DELETE_LIKE_SUCCESS");
export const deleteLikeFailedAction = createAction(
  "DELETE_LIKE_FAILED",
  withPayloadType<Error>()
);

//----
export const isBookmarkAction = createAction(
  "IS_BOOKMARK_REQUEST",
  withPayloadType<BookmarkPayload>()
);
export const isBookmarkSuccessAction = createAction(
  "IS_BOOKMARK_SUCCESS",
  withPayloadType<boolean>()
);
export const isBookmarkFailedkAction = createAction(
  "IS_BOOKMARK_FAILED",
  withPayloadType<Error>()
);

export const saveBookmarkAction = createAction(
  "SAVE_BOOKMARK_REQUEST",
  withPayloadType<SaveBookmarkPayload>()
);
export const saveBookmarkSuccessAction = createAction("SAVE_BOOKMARK_SUCCESS");

export const saveBookmarkFailedAction = createAction(
  "SAVE_BOOKMARK_FAILED",
  withPayloadType<Error>()
);

export const deleteBookmarkAction = createAction(
  "DELETE_BOOKMARK_REQUEST",
  withPayloadType<BookmarkPayload>()
);
export const deleteBookmarkSuccessAction = createAction(
  "DELETE_BOOKMARK_SUCCESS"
);
export const deleteBookmarkFailedAction = createAction(
  "DELETE_BOOKMARK_FAILED",
  withPayloadType<Error>()
);
