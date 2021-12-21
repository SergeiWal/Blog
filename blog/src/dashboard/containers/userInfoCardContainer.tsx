import UserInfoCard from "../components/userInfoCard";
import { useEffect, useState } from "react";
import { User } from "../../authorization/types/userTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
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
  const { token } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [buttonValue, setButtonValue] = useState(buttonMessage(!user.activate));

  useEffect(() => {
    setButtonValue(buttonMessage(!user.activate));
  }, [user.activate]);

  const blockedHandler = () => {
    console.log("block");
    user.activate = !user.activate;
    dispatch(blockUserAction({ user, token }));
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
