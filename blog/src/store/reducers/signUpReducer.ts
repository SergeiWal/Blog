import { PayloadAction } from "@reduxjs/toolkit";
import {
  signUpFailedAction,
  signUpSuccessAction,
} from "../../authorization/actions/authorizeActions";

export type SignUpPayload = {
  name: string;
  password: string;
  photo: string;
};

export default function SignUpReducer(
  state: boolean = false,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case signUpSuccessAction.type:
      return true;
    case signUpFailedAction.type:
      return false;
    default:
      return state;
  }
}
