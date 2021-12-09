import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteBookmarkAction,
  deleteBookmarkFailedAction,
  isBookmarkFailedkAction,
  isBookmarkSuccessAction,
  saveBookmarkFailedAction,
  saveBookmarkSuccessAction,
} from "../../article/articlePageActions";
import { Bookmark } from "../../article/types/articleActionsType";
import { bookmarkWorker } from "../../authorization/userWorkers";

export type BookmarkState = {
  isBookmarked: boolean;
};

const DEFAULT_BOOKMARK_STATE: BookmarkState = {
  isBookmarked: false,
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
    case isBookmarkFailedkAction.type:
    case saveBookmarkFailedAction.type:
    case deleteBookmarkFailedAction.type:
      return state;
    default:
      return state;
  }
}
