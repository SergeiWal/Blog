import { ArticlePreviewProps } from "../../article/types/articlePropsTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { createTextPreview } from "../../article/services/articles";
import { cardStyle } from "../../styles/styles";
import "../../styles/feed.css";
import moment from "moment";
import {
  CardInfoContainer,
  CardTypography,
  CardTitle,
  CardImg,
} from "./styled";

export default function ArticleCard({ article }: ArticlePreviewProps) {
  const { _id, author, title, subtitle, text, tags, date, updateDate, img } =
    article;
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardContent>
          <Link to={`/articles/${_id}`} className="cardContent">
            <CardInfoContainer>
              <CardTypography>{author.name}</CardTypography>
              <CardTitle>{title}</CardTitle>
              <CardTypography>{subtitle}</CardTypography>
              <div className="articleText">{createTextPreview(text)}</div>
              <div className="articleCardTagsList">
                {tags.map((tag) => {
                  return <div key={tag._id}>#{tag.name.toLowerCase()}</div>;
                })}
              </div>
              <div className="timeInfo">{moment(date).format("DD:MM:YY")}</div>
            </CardInfoContainer>
            <div>
              <CardImg src={img} alt={`Article ${_id}`}></CardImg>
            </div>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
