import { FixedSizeList as List } from "react-window";
import { Article, Articles } from "../../article/types/articleTypes";
import { WINDOW_HEIGHT } from "../../Feed/constants/feedConstants";
import { generateArticleListRows } from "../../Feed/containers/articleListContainer";
import { cardHeight, cardMaxWidth } from "../../styles/styles";
import ArticleInfoCard from "./articleInfoCard";

export type ArticlesInfoProps = {
  articles: Articles;
  deleteArticleHandler: (article: Article) => void;
};

export default function ArticlesInfo({
  articles,
  deleteArticleHandler,
}: ArticlesInfoProps) {
  const listArticle = articles.map((item: Article) => (
    <ArticleInfoCard
      key={item._id}
      article={item}
      deleteArticleHandler={deleteArticleHandler}
    ></ArticleInfoCard>
  ));

  return (
    <List
      className="articlesInfoList"
      itemData={listArticle}
      height={WINDOW_HEIGHT}
      itemCount={listArticle.length}
      itemSize={cardHeight}
      width={cardMaxWidth}
    >
      {generateArticleListRows}
    </List>
  );
}
