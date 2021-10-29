import { RootState, useAppSelector } from "../store";
import { Article } from "../types/articleTypes";
import ArticleView from "./articleView";

export default function Feed() {
  const articles = useAppSelector((state: RootState) => state.articles);
  const listArticle = articles.map((item: Article) => (
    <ArticleView article={item}></ArticleView>
  ));
  return (
    <div>
      <ul>{listArticle}</ul>
    </div>
  );
}
