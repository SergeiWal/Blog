import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { Article, ListGeneratorParams } from "../article/types/articleTypes";
import { useEffect, useState } from "react";
import { getArticleAction } from "../article/articleActions";
import { signOutAction } from "../authorization/actions/authorizeActions";
import Feed from "./feed";
import FeedLoader from "./feedLoader";

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
