import {} from "../types/articleTypes";
import { User } from "../types/userTypes";
import { GetCurrentUser, UserAction } from "../actions/userAction";
import { GET_CURRENT_USER } from "../constants/user";

const defaultUser: User = {
  id: 0,
  name: "user",
  password: "11111111",
  bookmarks: [],
  photo: "",
  posts: [],
};

export default function userReducer(state = defaultUser, action: UserAction) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return (action as GetCurrentUser).payload;
    default:
      return state;
  }
}
