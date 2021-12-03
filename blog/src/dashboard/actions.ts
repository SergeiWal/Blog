import { createAction } from "@reduxjs/toolkit";
import { User } from "../authorization/types/userTypes";
import { withPayloadType } from "../store/store";
import { Tag } from "./types";

export const getUsersAction = createAction("GET_USERS_REQUEST");

export const getUsersSuccessAction = createAction(
  "GET_USERS_SUCCESS",
  withPayloadType<User[]>()
);

export const getUsersFailedAction = createAction(
  "GET_USERS_FAILED",
  withPayloadType<Error>()
);

export const deleteUserAction = createAction(
  "DELETE_USER_REQUEST",
  withPayloadType<string>()
);

export const blockUserAction = createAction(
  "BLOCK_USER",
  withPayloadType<User>()
);

export const deleteUserSuccessAction = createAction("DELETE_USER_SUCCESS");

export const deleteUserFailedAction = createAction("DELETE_USER_FAILED");

export const deleteArticleAction = createAction(
  "DELETE_ARTICLE_REQUEST",
  withPayloadType<string>()
);
export const deleteArticleSuccessAction = createAction(
  "DELETE_ARTICLE_SUCCESS"
);
export const deleteArticleFailedAction = createAction("DELETE_ARTICLE_FAILED");

export const addTagsAction = createAction(
  "ADD_TAG_REQUEST",
  withPayloadType<string>()
);

export const addTagsSuccessAction = createAction(
  "ADD_TAG_SUCCESS",
  withPayloadType<Tag>()
);
export const addTagsFailedAction = createAction("ADD_TAG_FAILED");

export const deleteTagAction = createAction(
  "DELETE_TAG_REQUEST",
  withPayloadType<string>()
);
export const deleteTagSuccessAction = createAction("DELETE_TAG_SUCCESS");
export const deleteTagFailedAction = createAction("DELETE_TAG_FAILED");

export const getTagsAction = createAction("GET_TAGS_REQUEST");
export const getTagsSuccessAction = createAction(
  "GET_TAGS_SUCCESS",
  withPayloadType<Tag[]>()
);
export const getTagsFailedAction = createAction("GET_TAGS_FAILED");
