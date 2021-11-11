import ArticleListContainer from "../articleListContainer";
import Header from "../../header/header";
import { FeedProps } from "../../article/types/articlePropsTypes";

export default function Feed({ signOutHandler }: FeedProps) {
  return (
    <div>
      <Header signOutHandler={signOutHandler} />
      <ArticleListContainer />
    </div>
  );
}
