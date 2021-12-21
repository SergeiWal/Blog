import { PayloadAction } from "@reduxjs/toolkit";
import {
  addTagsSuccessAction,
  deleteTagSuccessAction,
  getTagsSuccessAction,
} from "../../dashboard/actions";
import { Tag } from "../../dashboard/types";

export type TagPayload = {
  tag: string;
  token: string;
};

export type DeleteTagPayload = {
  id: string;
  token: string;
};

export default function tagsReducer(
  state: Tag[] = [],
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getTagsSuccessAction.type:
      return [...action.payload];
    case addTagsSuccessAction.type:
      return [...state, action.payload];
    case deleteTagSuccessAction.type:
      return [...state];
    default:
      return state;
  }
}
