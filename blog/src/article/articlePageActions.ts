import { LIKE, DELETE_LIKE, SAVE_COMMENT } from "./constants/article";
import { LikePayload, SaveCommentPayload } from "./types/articleActionsType";
import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { BookmarksPayload } from "../authorization/types/userTypes";

export const ADD_TO_BOOKMARKS: string = "ADD_TO_BOOKMARKS";
export const DELETE_FROM_BOOKMARKS: string = "DELETE_FROM_BOOKMARKS";

export const likeArticleAction = createAction(
  LIKE,
  withPayloadType<LikePayload>()
);

export const deleteLikeAction = createAction(
  DELETE_LIKE,
  withPayloadType<LikePayload>()
);

export const saveCommentAction = createAction(
  SAVE_COMMENT,
  withPayloadType<SaveCommentPayload>()
);

export const addToBookmarksAction = createAction(
  ADD_TO_BOOKMARKS,
  withPayloadType<BookmarksPayload>()
);

export const deleteFromBookmarksAction = createAction(
  DELETE_FROM_BOOKMARKS,
  withPayloadType<BookmarksPayload>()
);
