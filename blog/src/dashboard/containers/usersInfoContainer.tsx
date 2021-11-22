import { useEffect, useState } from "react";
import { User } from "../../authorization/types/userTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteUserAction } from "../actions";
import UsersInfo from "../components/usersInfo";

const initUsersView = (users: User[], user: User): User[] =>
  users.filter((item: User) => item.id !== user.id);

export default function UsersInfoContainers() {
  const dispatch = useAppDispatch();
  const { user, users } = useAppSelector((state) => state);

  const [usersView, setUsersView] = useState(initUsersView(users, user));

  useEffect(() => {
    setUsersView(initUsersView(users, user));
  }, [users]);

  const deleteHandler = (userForDel: User) => {
    const index = users.indexOf(userForDel);
    users.splice(index, 1);
    dispatch(deleteUserAction(userForDel.id));
  };
  return <UsersInfo users={usersView} deleteHandler={deleteHandler} />;
}
