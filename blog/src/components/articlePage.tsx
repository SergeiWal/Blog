import { ArticlePageProps } from "../types/articlePropsTypes";
import "../styles/articlePage.css";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooter from "./articlePageFooter";

export default function ArticlePage({
  id,
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
        id={id}
        likes={article.likes}
        user={user}
        likeHandler={likeHandler}
        addToBookmarksHandler={addToBookmarksHandler}
      />
    </div>
  );
}
