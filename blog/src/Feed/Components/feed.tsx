import ArticleListContainer from "../articleListContainer";
import Header from "../../header/header";
import { FeedProps } from "../../article/types/articlePropsTypes";
import FilterList from "./filterList";

export default function Feed({ signOutHandler }: FeedProps) {
  return (
    <div>
      <Header signOutHandler={signOutHandler} />
      <div className="feedBody">
        <ArticleListContainer />
        <FilterList />
      </div>
    </div>
  );
}
