import { PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "../../dashboard/types";
import {
  changeFilterAction,
  clearFilterAction,
} from "../../Feed/articleListActions";

const defaultFilters: Tag[] = [];

export default function FilterReducer(
  state = defaultFilters,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case changeFilterAction.type:
      return [...state];
    case clearFilterAction.type:
      return [];
    default:
      return state;
  }
}
