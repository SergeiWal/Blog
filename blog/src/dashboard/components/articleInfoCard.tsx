import { Link } from "react-router-dom";
import { Article } from "../../article/types/articleTypes";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { Button, Card, CardContent } from "@mui/material";
import { cardStyle } from "../../styles/styles";
import { tagsArrToStr } from "../../article/services/articles";

export type ArticleInfoCardProps = {
  article: Article;
  deleteArticleHandler: (article: Article) => void;
};

export default function ArticleInfoCard({
  article,
  deleteArticleHandler,
}: ArticleInfoCardProps) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <div className="cardContent">
          <div className="cardInfo ">
            <div>
              <div className="blogName">{article.name}</div>
              <div className="articleTitle">{article.title}</div>
              <div>{article.subtitle}</div>
            </div>
            <div>
              <div className="tags">{tagsArrToStr(article.tags)}</div>
              <div className="timeInfo">
                {article.date} . {article.updatedate}
              </div>
              <div>
                <RecommendOutlinedIcon />
                {article.likes.length}
                <InsertCommentOutlinedIcon />
                {article.comments.length}
              </div>
              <div>
                <Button
                  size="small"
                  variant="contained"
                  color="inherit"
                  onClick={() => deleteArticleHandler(article)}
                >
                  Delete
                </Button>
                <Link to={`/articles/${article.id}`} className="showLinkButton">
                  <Button size="small" variant="contained" color="inherit">
                    Show
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cardImg">
            <img src={article.img} alt={`Article ${article.id}`}></img>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
