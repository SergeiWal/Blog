import { FixedSizeList as List } from "react-window";
import { useAppSelector } from "../store";
import ArticlePreview from "./articlePreview";

export default function Feed() {
  const articles = useAppSelector((state) => state.articles);
  const listArticle = articles.map((item) => (
    <ArticlePreview article={item}></ArticlePreview>
  ));
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {listArticle}
    </List>
  );
}
