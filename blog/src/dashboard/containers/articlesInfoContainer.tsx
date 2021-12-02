import { Article } from "../../article/types/articleTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { deleteArticleAction } from "../actions";
import ArticlesInfo from "../components/articlesInfo";

export default function ArticlesInfoContainer() {
  const { articles } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const deleteHandler = (article: Article) => {
    const index = articles.indexOf(article);
    articles.splice(index, 1);
    dispatch(deleteArticleAction(article._id));
  };
  return (
    <ArticlesInfo articles={articles} deleteArticleHandler={deleteHandler} />
  );
}
