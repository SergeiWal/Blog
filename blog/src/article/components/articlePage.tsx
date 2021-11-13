import { ArticlePageProps } from "../types/articlePropsTypes";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooterContainer from "../containers/articlePageFooterContainer";
import TagList from "./tagList";
import "../../styles/articlePage.css";

export default function ArticlePage({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageProps) {
  return (
    <div>
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
        <TagList list={article.tags} />
        <ArticlePageFooterContainer
          article={article}
          user={user}
          likeHandler={likeHandler}
          addToBookmarksHandler={addToBookmarksHandler}
        />
      </div>
    </div>
  );
}
