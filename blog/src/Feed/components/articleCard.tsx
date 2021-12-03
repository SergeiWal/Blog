import { ArticlePreviewProps } from "../../article/types/articlePropsTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import {
  createTextPreview,
  tagsArrToStr,
} from "../../article/services/articles";
import { cardStyle } from "../../styles/styles";
import "../../styles/feed.css";
import moment from "moment";

export default function ArticleCard({ article }: ArticlePreviewProps) {
  const { _id, author, title, subtitle, text, tags, date, updateDate, img } =
    article;
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardContent>
          <Link to={`/articles/${_id}`} className="cardContent">
            <div className="cardInfo">
              <div className="blogName">{author.name}</div>
              <div className="articleTitle">{title}</div>
              <div>{subtitle}</div>
              <div className="articleText">{createTextPreview(text)}</div>
              {/* <div className="tags">{tagsArrToStr(tags)}</div> */}
              <div className="timeInfo">
                {moment(date).format("DD:MM:YY")} .
                {moment(updateDate).format("DD:MM:YY")}
              </div>
            </div>
            <div className="cardImg">
              <img src={img} alt={`Article ${_id}`}></img>
            </div>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
