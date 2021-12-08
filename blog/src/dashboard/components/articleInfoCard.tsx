import { Link } from "react-router-dom";
import { Article } from "../../article/types/articleTypes";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { Button, Card, CardContent } from "@mui/material";
import { cardStyle } from "../../styles/styles";
import { tagsArrToStr } from "../../article/services/articles";
import moment from "moment";

export type ArticleInfoCardProps = {
  article: Article;
  deleteArticleHandler: (article: Article) => void;
};

export default function ArticleInfoCard({
  article,
  deleteArticleHandler,
}: ArticleInfoCardProps) {
  const { title, author, subtitle, date, updateDate } = article;
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <div className="cardContent">
          <div className="cardInfo ">
            <div>
              <div className="blogName">{author.name}</div>
              <div className="articleTitle">{title}</div>
              <div>{subtitle}</div>
            </div>
            <div>
              {/* <div className="tags">{tagsArrToStr(tags)}</div> */}
              <div className="timeInfo">
                {moment(date).format("DD:MM:YY")} .{" "}
                {moment(updateDate).format("DD:MM:YY")}
              </div>
              <div>
                <RecommendOutlinedIcon />
                {/* {likes.length} */}
                <InsertCommentOutlinedIcon />
                {/* {article.comments.length} */}
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
                <Link
                  to={`/articles/${article._id}`}
                  className="showLinkButton"
                >
                  <Button size="small" variant="contained" color="inherit">
                    Show
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cardImg">
            <img src={article.img} alt={`Article ${article._id}`}></img>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
