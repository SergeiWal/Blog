import { Article } from "../../article/types/articleTypes";
import ArticleCard from "./articleCard";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../../styles/styles";
import { generateArticleListRows } from "../articleListContainer";
import { ArticleListProps } from "../../article/types/articlePropsTypes";
import "../../styles/feed.css";

const WINDOW_HEIGHT: number = window.innerHeight;

export default function ArticleList({ articles }: ArticleListProps) {
  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item.id} article={item}></ArticleCard>
  ));

  return (
    <List
      className="articlesList"
      itemData={listArticle}
      height={WINDOW_HEIGHT}
      itemCount={listArticle.length}
      itemSize={cardHeight}
      width={cardMaxWidth}
    >
      {generateArticleListRows}
    </List>
  );
}
