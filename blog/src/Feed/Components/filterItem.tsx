import { Button } from "@mui/material";

export type FilterItemProps = {
  tag: string;
};

const filterItemStyle = {
  margin: 3,
};

export default function FilterItem({ tag }: FilterItemProps) {
  return (
    <Button variant="contained" style={filterItemStyle} color="inherit">
      {tag}
    </Button>
  );
}
