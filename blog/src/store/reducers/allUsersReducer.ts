import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../authorization/types/userTypes";
import {
  getUsersFailedAction,
  getUsersSuccessAction,
} from "../../dashboard/actions";

const defaultValue: User[] = [];

export default function allUserREducer(
  state = defaultValue,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getUsersSuccessAction.type:
      return [...state];
    case getUsersFailedAction.type:
      return [...state];
    default:
      return state;
  }
}
