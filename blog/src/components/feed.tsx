import { RootState, useAppDispatch, useAppSelector } from "../store";
import { Article, ListGeneratorParams } from "../types/articleTypes";
import ArticleCard from "./articleCard";
import { WINDOW_HEIGHT } from "../constants/app";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../constants/styles";
import "../styles/feed.css";
import { useEffect, useState } from "react";
import { GET_ARTICLES } from "../constants/article";

const generateArticleListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function Feed() {
  const state = useAppSelector((state: RootState) => state);
  const [articles, setArticles] = useState<Array<Article>>([]);

  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item.id} article={item}></ArticleCard>
  ));

  useEffect(() => {
    setArticles(state.articles);
  }, [state.articles]);

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
