import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../store/store";
import { Article } from "./types/articleTypes";
import { User } from "../authorization/types/userTypes";

export const likeArticleAction = createAction(
  "LIKE",
  withPayloadType<Article>()
);

export const saveCommentAction = createAction(
  "SAVE_COMMENT",
  withPayloadType<Article>()
);

export const bookmarksAction = createAction(
  "BOOKMARK",
  withPayloadType<User>()
);
