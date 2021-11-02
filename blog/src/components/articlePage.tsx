import { Article, ArticleParamsType } from "../types/articleTypes";
import { requestToApi } from "../services/articles";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import "../styles/articlePage.css";

export default function ArticlePage() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);

  useEffect(() => {
    requestToApi(`http://localhost:3004/articles/${id}`, setArticle);
  }, []);

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
    </div>
  );
}
