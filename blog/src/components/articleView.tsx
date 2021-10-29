import { Article } from "../types/articleTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

type ArticlePreviewProps = {
  article: Article;
};

export default function ArticleView({ article }: ArticlePreviewProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <div>
            <div>{article.name}</div>
            <div>{article.title}</div>
            <div>{article.subtitle}</div>
            <div>{article.text}</div>
            <div>{article.tags.join(",")}</div>
            <div>
              {article.date} . {article.updatedate}
            </div>
          </div>
          <div>
            <img
              src={article.img}
              alt={`Image for article ${article.id}`}
            ></img>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
