import { Button } from "@mui/material";
import { Tag } from "../types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const tagItemStyle = {
  margin: 3,
  color: "#ccc",
  background: "#000",
};

export type TagItemProps = {
  tag: Tag;
  deleteHandler: (tag: Tag) => void;
};

export default function TagItem({ tag, deleteHandler }: TagItemProps) {
  return (
    <Button
      variant="contained"
      style={tagItemStyle}
      onClick={() => deleteHandler(tag)}
    >
      {tag.name}
      <CloseRoundedIcon color="inherit" />
    </Button>
  );
}
