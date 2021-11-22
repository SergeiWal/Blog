import UserInfoCard from "../components/userInfoCard";
import { useEffect, useState } from "react";
import { User } from "../../authorization/types/userTypes";
import { useAppDispatch } from "../../store/store";
import { blockUserAction } from "../actions";

export type UserInfoCardContainerProps = {
  user: User;
  deleteHandler: (user: User) => void;
};

const buttonMessage = (isBlocked: boolean) => {
  return isBlocked ? "Unblock" : "Block";
};

export default function UserInfoCardContainer({
  user,
  deleteHandler,
}: UserInfoCardContainerProps) {
  const dispatch = useAppDispatch();
  const [buttonValue, setButtonValue] = useState(buttonMessage(user.isBlocked));

  useEffect(() => {
    setButtonValue(buttonMessage(user.isBlocked));
  }, [user.isBlocked]);

  const blockedHandler = () => {
    console.log("block");
    user.isBlocked = !user.isBlocked;
    dispatch(blockUserAction(user));
  };

  return (
    <UserInfoCard
      user={user}
      blockButtonValue={buttonValue}
      deleteHandler={deleteHandler}
      blockedHandler={blockedHandler}
    />
  );
}
