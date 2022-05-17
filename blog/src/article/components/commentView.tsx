import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { CommentViewProps } from "../types/articlePropsTypes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { AppAvater } from "../../header/styled";
import { CommentCard } from "./styled";

export default function CommentView({
  comment: { text, author },
}: CommentViewProps) {
  return (
    <CommentCard>
      <CardHeader
        avatar={
          author.photo && author.photo != "" ? (
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={author.photo}
              alt={author.name}
            />
          ) : (
            <AppAvater>
              <AccountCircleOutlinedIcon style={{ width: 30, height: 30 }} />
            </AppAvater>
          )
        }
        title={author.name}
        subheader=""
        style={{ padding: "10px 16px" }}
      />
      <CardContent style={{ padding: "0 16px 24px" }}>
        <Typography variant="body2" color="text.main" noWrap={false}>
          {text}
        </Typography>
      </CardContent>
    </CommentCard>
  );
}
