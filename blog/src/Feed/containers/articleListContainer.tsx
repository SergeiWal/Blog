import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Article, ListGeneratorParams } from "../../article/types/articleTypes";
import { useEffect, useState } from "react";
import { getArticleAction } from "../articleListActions";
import ArticleList from "../components/articleList";
import ArticleListLoader from "../components/articleListLoader";
import { selectArticlesByFilters } from "../services/feedServices";

export const generateArticleListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function ArticleListContainer() {
  const { articles, filters, isFetching } = useAppSelector(
    (state: RootState) => state
  );
  const [articleList, setArticleList] = useState<Array<Article>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticleAction());
  }, [dispatch]);

  useEffect(() => {
    if (filters.length > 0) {
      setArticleList(selectArticlesByFilters(articles, filters));
    } else {
      setArticleList(articles);
    }
  }, [filters, articles]);

  return isFetching[getArticleAction.type] ? (
    <ArticleListLoader />
  ) : (
    <ArticleList articles={articleList} />
  );
}
