import { ArticlePageProps } from "../types/articlePropsTypes";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooterContainer from "../containers/articlePageFooterContainer";
import moment from "moment";
import TagList from "./tagList";
import "../../styles/articlePage.css";
import { ArticlePageContainer } from "./styled";

export default function ArticlePage({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageProps) {
  const { _id, title, subtitle, author, date, updateDate, img, text, tags } =
    article;
  return (
    <ArticlePageContainer>
      <ArticlePageHeader
        title={title}
        subtitle={subtitle}
        name={author.name}
        date={moment(date).format("DD.MM.YY")}
        updatedate={moment(updateDate).format("DD.MM.YY")}
      />
      <ArticlePageMainContent id={_id} img={img} text={text} />
      <TagList list={tags} />
      <ArticlePageFooterContainer
        article={article}
        user={user}
        likeHandler={likeHandler}
        addToBookmarksHandler={addToBookmarksHandler}
      />
    </ArticlePageContainer>
  );
}
