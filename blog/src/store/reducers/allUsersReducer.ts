import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../authorization/types/userTypes";
import {
  blockUserAction,
  deleteUserSuccessAction,
  getUsersSuccessAction,
} from "../../dashboard/actions";

const defaultValue: User[] = [];

export type DeleteUSerPayload = {
  id: string;
  token: string;
};

export type UpdateUserStatus = {
  user: User;
  token: string;
};

export default function allUserREducer(
  state = defaultValue,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getUsersSuccessAction.type:
      return [...action.payload];
    case blockUserAction.type:
    case deleteUserSuccessAction.type:
      return [...state];
    default:
      return state;
  }
}
