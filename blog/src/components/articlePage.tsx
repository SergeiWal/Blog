import { ArticlePageProps } from "../types/articlePropsTypes";
import "../styles/articlePage.css";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooter from "./articlePageFooter";

export default function ArticlePage({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageProps) {
  return (
    <div className="articleContent">
      <ArticlePageHeader
        title={article.title}
        subtitle={article.subtitle}
        name={article.name}
        date={article.date}
        updatedate={article.updatedate}
      />
      <ArticlePageMainContent
        id={article.id}
        img={article.img}
        text={article.text}
      />
      <ArticlePageFooter
        article={article}
        user={user}
        likeHandler={likeHandler}
        addToBookmarksHandler={addToBookmarksHandler}
      />
    </div>
  );
}
