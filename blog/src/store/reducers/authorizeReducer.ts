import { PayloadAction } from "@reduxjs/toolkit";
import {
  signInSuccessAction,
  signOutAction,
} from "../../authorization/actions/authorizeActions";

export type SignInUpPayload = {
  username: string;
  password: string;
};

export type SignInResponsePayload = {
  access_token: string;
};

export default function AuthorizeReducer(
  state: string = "",
  action: PayloadAction<any>
) {
  switch (action.type) {
    case signInSuccessAction.type:
      return action.payload.access_token;
    case signOutAction.type:
      return "";
    default:
      return state;
  }
}
