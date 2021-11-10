import { SIGN_IN, SIGN_OUT } from "../constants/authorize";
import { AuthorizeAction } from "../types/otherActionTypes";

export const signInAction = (): AuthorizeAction => {
  return {
    type: SIGN_IN,
  };
};

export const signOutAction = (): AuthorizeAction => {
  return {
    type: SIGN_OUT,
  };
};