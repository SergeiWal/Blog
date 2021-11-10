import { ArticlePreviewProps } from "../article/types/articlePropsTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/feed.css";
import { createTextPreview, tagsArrToStr } from "../article/services/articles";
import { cardStyle } from "../styles/styles";

export default function ArticleCard({ article }: ArticlePreviewProps) {
  return (
    <Card sx={cardStyle}>
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
              <img src={article.img} alt={`Article ${article.id}`}></img>
            </div>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
