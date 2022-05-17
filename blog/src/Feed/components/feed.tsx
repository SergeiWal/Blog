import ArticleListContainer from "../containers/articleListContainer";
import FilterListContainer from "../containers/filterListContainer";
import { FeedContainer } from "./styled";
import { Article as ArticleItem } from "../../article/types/articleTypes";

export interface FeedProps {
  articleList: ArticleItem[];
  setSearchValueHandler: (value: string) => void;
}

export default function Feed({
  articleList,
  setSearchValueHandler,
}: FeedProps) {
  return (
    <FeedContainer>
      <ArticleListContainer articleList={articleList} />
      <FilterListContainer setSearchValueHandler={setSearchValueHandler} />
    </FeedContainer>
  );
}
