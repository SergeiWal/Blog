import { useEffect, useState } from "react";
import { Article, ListGeneratorParams } from "../../article/types/articleTypes";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { clearFilterAction, getArticleAction } from "../articleListActions";
import Feed from "../components/feed";
import { selectArticlesByFilters } from "../services/feedServices";

export const generateArticleListRows = ({
  data,
  index,
  style,
}: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function FeedContainer() {
  const { articles, filters, token } = useAppSelector(
    (state: RootState) => state
  );
  const dispatch = useAppDispatch();

  const [articleList, setArticleList] = useState<Array<Article>>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getArticleAction({ token }));
  }, [dispatch]);

  useEffect(() => {
    if (filters.length > 0) {
      setArticleList(selectArticlesByFilters(articles, filters));
    } else if (!searchValue || searchValue == "") {
      setArticleList(articles);
    }
  }, [filters, articles]);

  useEffect(() => {
    if (searchValue && searchValue !== "") {
      setArticleList(LookForArticle(searchValue));
    }
  }, [searchValue]);

  const LookForArticle = (value: string) => {
    const searhStr: string = value.toLowerCase();
    return articles.filter(
      ({ title, subtitle, author: { name } }) =>
        title.toLowerCase().includes(searhStr) ||
        subtitle.toLowerCase().includes(searhStr) ||
        name.toLowerCase().includes(searhStr)
    );
  };

  const setSearchValueHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Feed
      articleList={articleList}
      setSearchValueHandler={setSearchValueHandler}
    />
  );
}
