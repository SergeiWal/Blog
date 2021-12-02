import { User } from "../../authorization/types/userTypes";
import UserInfoCardContainer from "../containers/userInfoCardContainer";
import { FixedSizeList as List } from "react-window";
import { WINDOW_HEIGHT } from "../../Feed/constants/feedConstants";
import { generateArticleListRows } from "../../Feed/containers/articleListContainer";
import { userCardHeight, cardMaxWidth } from "../../styles/styles";

export type UsersInfoProps = {
  users: User[];
  deleteHandler: (user: User) => void;
};

export default function UsersInfo({ users, deleteHandler }: UsersInfoProps) {
  const listArticle = users.map((item: User) => (
    <UserInfoCardContainer
      key={item._id}
      user={item}
      deleteHandler={deleteHandler}
    />
  ));

  return (
    <List
      className="articlesInfoList"
      itemData={listArticle}
      height={WINDOW_HEIGHT}
      itemCount={listArticle.length}
      itemSize={userCardHeight}
      width={cardMaxWidth}
    >
      {generateArticleListRows}
    </List>
  );
}
