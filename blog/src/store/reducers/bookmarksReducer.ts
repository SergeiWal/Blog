import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteBookmarkAction,
  isBookmarkSuccessAction,
  saveBookmarkSuccessAction,
} from "../../article/articlePageActions";
import { Bookmark, NewBookmark } from "../../article/types/articleActionsType";

export type BookmarkState = {
  isBookmarked: boolean;
};

const DEFAULT_BOOKMARK_STATE: BookmarkState = {
  isBookmarked: false,
};

export type BookmarkPayload = {
  bookmark: Bookmark;
  token: string;
};

export type SaveBookmarkPayload = {
  bookmark: NewBookmark;
  token: string;
};

export default function bookmarkReducer(
  state: BookmarkState = DEFAULT_BOOKMARK_STATE,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case isBookmarkSuccessAction.type:
      return { isBookmarked: action.payload };
    case saveBookmarkSuccessAction.type:
      return { isBookmarked: true };
    case deleteBookmarkAction.type:
      return { isBookmarked: false };
    default:
      return state;
  }
}