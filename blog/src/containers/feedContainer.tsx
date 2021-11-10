import { RootState, useAppDispatch, useAppSelector } from "../store";
import { Article, ListGeneratorParams } from "../types/articleTypes";
import { useEffect, useState } from "react";
import { getArticleAction } from "../actions/articleActions";
import { signOutAction } from "../actions/authorizeActions";
import Feed from "../components/feed";
import FeedLoader from "../components/loaders/feedLoader";

export const generateArticleListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function FeedConteiner() {
  const state = useAppSelector((state: RootState) => state);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleAction());
  }, [dispatch]);

  useEffect(() => {
    setArticles(state.articles);
  }, [state.articles]);

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return state.isFetching ? (
    <FeedLoader />
  ) : (
    <Feed articles={articles} signOutHandler={signOutHandler} />
  );
}
