import { GET_CURRENT_USER } from "../constants/user";
import { User } from "../types/userTypes";

export interface GetCurrentUser {
  type: string;
  payload: User;
}

export type UserAction = GetCurrentUser | any;

export const getCurrentUserAction = (payload: User): GetCurrentUser => {
  return {
    type: GET_CURRENT_USER,
    payload,
  };
};
