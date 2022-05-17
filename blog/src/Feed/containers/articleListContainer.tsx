import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Article, ListGeneratorParams } from "../../article/types/articleTypes";
import { useEffect, useState } from "react";
import { getArticleAction } from "../articleListActions";
import ArticleList from "../components/articleList";
import ArticleListLoader from "../components/articleListLoader";
import { Article as ArticleItem } from "../../article/types/articleTypes";

export interface ArticleListContainerProps {
  articleList: ArticleItem[];
}

export default function ArticleListContainer({
  articleList,
}: ArticleListContainerProps) {
  const { isFetching } = useAppSelector((state: RootState) => state);

  return isFetching[getArticleAction.type] ? (
    <ArticleListLoader />
  ) : (
    <ArticleList articles={articleList} />
  );
}
