import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Article, ListGeneratorParams } from "../article/types/articleTypes";
import { useEffect, useState } from "react";
import { getArticleAction } from "./articleListActions";
import ArticleList from "./Components/articleList";
import ArticleListLoader from "./Components/articleListLoader";

export const generateArticleListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function ArticleListContainer() {
  const state = useAppSelector((state: RootState) => state);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleAction());
  }, [dispatch]);

  useEffect(() => {
    setArticles(state.articles);
  }, [state.articles]);

  return state.isFetching ? (
    <ArticleListLoader />
  ) : (
    <ArticleList articles={articles} />
  );
}
