import { RootState, useAppDispatch, useAppSelector } from "../store";
import { Article, ListGeneratorParams } from "../types/articleTypes";
import ArticleCard from "./articleCard";
import { WINDOW_HEIGHT } from "../constants/app";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../constants/styles";
import "../styles/feed.css";
import { useEffect, useState } from "react";
import { getArticleAction } from "../actions/articleActions";
import { Skeleton, Stack, Button } from "@mui/material";
import { signOutAction } from "../actions/authorizeActions";

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
  const dispatch = useAppDispatch();

  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item.id} article={item}></ArticleCard>
  ));

  useEffect(() => {
    dispatch(getArticleAction());
  }, [dispatch]);

  useEffect(() => {
    setArticles(state.articles);
  }, [state.articles]);

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return !state.isFetching ? (
    <div>
      <header className="header">
        <Button variant="contained" onClick={signOutHandler}>
          Sign Out
        </Button>
      </header>
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
    </div>
  ) : (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
    </Stack>
  );
}
