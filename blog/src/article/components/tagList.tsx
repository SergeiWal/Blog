import { Button } from "@mui/material";

export type TagsListProps = {
  list: string[];
};

const TagListStyle = {
  margin: 2,
};

export default function TagList({ list }: TagsListProps) {
  return (
    <div className="pageTagsList">
      {list.map((item) => {
        return (
          <Button key={item} variant="contained" disabled style={TagListStyle}>
            {item.replace("#", "")}
          </Button>
        );
      })}
    </div>
  );
}
