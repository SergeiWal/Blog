import { ArticlePageProps } from "../types/articlePropsTypes";
import ArticlePageHeader from "./articlePageHeader";
import ArticlePageMainContent from "./articlePageMainContent";
import ArticlePageFooterContainer from "../containers/articlePageFooterContainer";
import { Button } from "@mui/material";
import "../../styles/articlePage.css";

export default function ArticlePage({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
  signOutHandler,
}: ArticlePageProps) {
  return (
    <div>
      <header className="header">
        <Button variant="contained" color="inherit" onClick={signOutHandler}>
          Sign Out
        </Button>
      </header>
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
