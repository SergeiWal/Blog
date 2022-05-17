import { Button } from "@mui/material";
import { Tag } from "../types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { TagBtn } from "./styled";

export type TagItemProps = {
  tag: Tag;
  deleteHandler: (tag: Tag) => void;
};

export default function TagItem({ tag, deleteHandler }: TagItemProps) {
  return (
    <TagBtn variant="contained" onClick={() => deleteHandler(tag)}>
      {tag.name}
      <CloseRoundedIcon color="inherit" />
    </TagBtn>
  );
}
