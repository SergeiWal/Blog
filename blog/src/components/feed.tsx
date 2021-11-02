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
  console.log("listArticle", listArticle);
  return (
    <List
      className="articlesList"
      itemData={listArticle}
      height={WINDOW_HEIGHT}
      itemCount={listArticle.length}
      itemSize={300}
      width={700}
    >
      {({ data, index, style }) => {
        return <div style={style}>{data[index]}</div>;
      }}
    </List>
  );
}
