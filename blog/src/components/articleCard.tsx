import { ArticlePreviewProps } from "../types/articleTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/feed.css";
import { createTextPreview, tagsArrToStr } from "../services/articles";

export default function ArticleCard({ article }: ArticlePreviewProps) {
  return (
    <Card sx={{ maxWidth: 700, width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Link to={`/articles/${article.id}`} className="cardContent">
            <div className="cardInfo">
              <div className="blogName">{article.name}</div>
              <div className="articleTitle">{article.title}</div>
              <div>{article.subtitle}</div>
              <div className="articleText">
                {createTextPreview(article.text)}
              </div>
              <div className="tags">{tagsArrToStr(article.tags)}</div>
              <div className="timeInfo">
                {article.date} . {article.updatedate}
              </div>
            </div>
            <div className="cardImg">
              <img
                src={article.img}
                alt={`Image for article ${article.id}`}
              ></img>
            </div>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}