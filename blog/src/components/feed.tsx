import { RootState, useAppSelector } from "../store";
import { Article } from "../types/articleTypes";
import ArticleCard from "./articleCard";
import { WINDOW_HEIGHT } from "../constants/app";
import { FixedSizeList as List } from "react-window";
import "../styles/feed.css";

export default function Feed() {
  const articles = useAppSelector((state: RootState) => state.articles);
  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item.id} article={item}></ArticleCard>
  ));
  return (
    <List
      className="articlesList"
      itemData={listArticle}
      height={WINDOW_HEIGHT}
      itemCount={listArticle.length}
      itemSize={5}
      width={700}
    >
      {({ data, index, style }) => {
        return <div style={style}>{data}</div>;
      }}
    </List>
  );
}
