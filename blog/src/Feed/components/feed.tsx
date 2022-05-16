import ArticleListContainer from "../containers/articleListContainer";
import FilterListContainer from "../containers/filterListContainer";
import { FeedContainer } from "./styled";

export default function Feed() {
  return (
    <FeedContainer>
      <ArticleListContainer />
      <FilterListContainer />
    </FeedContainer>
  );
}
