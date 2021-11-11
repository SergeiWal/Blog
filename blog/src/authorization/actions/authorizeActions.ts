import { SIGN_IN, SIGN_OUT } from "../constants/authorize";
import { Action } from "../../store/actionTypes";

export const signInAction = (): Action<any> => {
  return {
    type: SIGN_IN,
  };
};

export const signOutAction = (): Action<any> => {
  return {
    type: SIGN_OUT,
  };
};
