import { PayloadAction } from "@reduxjs/toolkit";
import { changeFilterAction } from "../../Feed/articleListActions";

const defaultFilters: string[] = [];

export default function FilterReducer(
  state = defaultFilters,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case changeFilterAction.type:
      return [...state];
    default:
      return state;
  }
}
