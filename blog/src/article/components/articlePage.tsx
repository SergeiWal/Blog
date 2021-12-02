import { ArticlePageProps } from "../types/articlePropsTypes";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooterContainer from "../containers/articlePageFooterContainer";
import TagList from "./tagList";
import "../../styles/articlePage.css";

const dateToString = (date: Date): string => {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear}`;
};

export default function ArticlePage({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageProps) {
  const { id, title, subtitle, author, date, updatedate, img, text, tags } =
    article;
  return (
    <div>
      <div className="articleContent">
        <ArticlePageHeader
          title={title}
          subtitle={subtitle}
          name={author.name}
          date={dateToString(date)}
          updatedate={dateToString(updatedate)}
        />
        <ArticlePageMainContent id={id} img={img} text={text} />
        <TagList list={tags} />
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
