import { Link } from "react-router-dom";
import { Article } from "../../article/types/articleTypes";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { Button, Card, CardContent } from "@mui/material";
import { cardStyle } from "../../styles/styles";
import moment from "moment";
import { CardTitle, CardTypography } from "../../Feed/components/styled";
import { CardContainer, CardImg, CardInfoContainer } from "./styled";
import { BaseButton } from "../../shared/button/styled";

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
    <Card sx={{ maxWidth: 600, width: "100%" }}>
      <CardContent style={{ padding: "16px" }}>
        <CardContainer style={{ padding: 5 }}>
          <CardInfoContainer style={{ padding: 0 }}>
            <div>
              <CardTypography>{author.name}</CardTypography>
              <CardTitle>{title}</CardTitle>
              <CardTypography>{subtitle}</CardTypography>
            </div>
            <div>
              <div>
                <BaseButton
                  size="small"
                  variant="contained"
                  color="inherit"
                  onClick={() => deleteArticleHandler(article)}
                >
                  Delete
                </BaseButton>
                <Link
                  to={`/articles/${article._id}`}
                  className="showLinkButton"
                >
                  <BaseButton size="small" variant="contained" color="inherit">
                    Show
                  </BaseButton>
                </Link>
              </div>
            </div>
          </CardInfoContainer>
          <div>
            <CardImg src={article.img} alt={`Article ${article._id}`}></CardImg>
          </div>
        </CardContainer>
      </CardContent>
    </Card>
  );
}
