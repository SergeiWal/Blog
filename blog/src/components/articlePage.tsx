import { Article, ArticleParamsType, Articles } from "../types/articleTypes";
import { User } from "../types/userTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import "../styles/articlePage.css";
import { Button } from "@mui/material";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useAppDispatch, useAppSelector } from "../store";
import { likeArticleAction } from "../actions/articleActions";
import { addToBookmarksAction } from "../actions/userAction";

const findArticle = (articles: Articles, id: number): Article =>
  articles.find((article) => article.id === id) || DEFAULT_ARTICLE;

const getButtonColorForCollection = (collection: Array<number>, id: number) => {
  return collection.includes(id) ? "success" : "inherit";
};

export default function ArticlePage() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setArticle(findArticle(state.articles, Number.parseInt(id)));
  }, [state]);

  const likeHandler = () => {
    if (!article.likes.includes(state.user.id)) {
      dispatch(
        likeArticleAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
        })
      );
    }
  };

  const addToBookmarksHandler = () => {
    if (!state.user.bookmarks.includes(Number.parseInt(id))) {
      dispatch(
        addToBookmarksAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
        })
      );
    }
  };

  return (
    <div className="articleContent">
      <div className="articleHeader">
        <div className="articleTitle">{article.title}</div>
        <div className="articleSubtitle">{article.subtitle}</div>
        <div>{article.name}</div>
        <div className="articleDateInfo">
          cretead: {article.date} last update:{article.updatedate}
        </div>
      </div>
      <div className="articleImg">
        <img src={article.img} alt={`Image for article ${article.id}`}></img>
      </div>
      <div className="articleTextContent">{article.text}</div>
      <div className="articleFooter">
        <Button
          startIcon={<RecommendOutlinedIcon />}
          color={getButtonColorForCollection(article.likes, state.user.id)}
          onClick={likeHandler}
        >
          {article.likes.length}
        </Button>
        <Button
          startIcon={<InsertCommentOutlinedIcon />}
          color="inherit"
        ></Button>
        <Button
          startIcon={<BookmarkAddOutlinedIcon />}
          color={getButtonColorForCollection(
            state.user.bookmarks,
            Number.parseInt(id)
          )}
          onClick={addToBookmarksHandler}
        ></Button>
      </div>
    </div>
  );
}
