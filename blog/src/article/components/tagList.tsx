import { Button } from "@mui/material";
import { Tag } from "../../dashboard/types";

export type TagsListProps = {
  list: Tag[];
};

const TagListStyle = {
  margin: 2,
};

export default function TagList({ list }: TagsListProps) {
  return (
    <div className="pageTagsList">
      {list.map((item) => {
        return (
          <Button
            key={item._id}
            variant="contained"
            disabled
            style={TagListStyle}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}
