import { SIGN_IN, SIGN_OUT } from "../constants/authorize";

export type AuthorizeAction = { type: string };

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
