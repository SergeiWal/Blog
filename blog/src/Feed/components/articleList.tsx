import { Article } from "../../article/types/articleTypes";
import ArticleCard from "./articleCard";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../../styles/styles";
import { generateArticleListRows } from "../containers/articleListContainer";
import { ArticleListProps } from "../../article/types/articlePropsTypes";
import "../../styles/feed.css";
import { WINDOW_HEIGHT } from "../constants/feedConstants";
import { ArticleListStyled } from "./styled";
import { Container } from "@mui/material";

export default function ArticleList({ articles }: ArticleListProps) {
  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item._id} article={item}></ArticleCard>
  ));

  return (
    <Container>
      <ArticleListStyled
        itemData={listArticle}
        height={WINDOW_HEIGHT}
        itemCount={listArticle.length}
        itemSize={cardHeight}
        width={cardMaxWidth}
      >
        {generateArticleListRows}
      </ArticleListStyled>
    </Container>
  );
}
