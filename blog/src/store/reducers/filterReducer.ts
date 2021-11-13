import { PayloadAction } from "@reduxjs/toolkit";
import { CHANGED_FILTER } from "../../Feed/constants/feedConstants";

const defaultFilters: string[] = [];

export default function FilterReducer(
  state = defaultFilters,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case CHANGED_FILTER:
      return [...state];
    default:
      return state;
  }
}
