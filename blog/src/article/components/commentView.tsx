import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { CommentViewProps } from "../types/articlePropsTypes";

export default function CommentView({
  comment: { text, author },
}: CommentViewProps) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={author.photo}
            alt={author.name}
          />
        }
        title={author.name}
        subheader=""
      />
      <CardContent>
        <Typography variant="body2" color="text.main" noWrap={false}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
