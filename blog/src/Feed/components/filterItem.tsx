import { Button } from "@mui/material";
import { Tag } from "../../dashboard/types";
import { FilterItemProps } from "../types/feedTypes";

const filterItemStyle = {
  margin: 3,
};

export const getButtonColorForFilter = (collection: Array<Tag>, item: Tag) => {
  return collection.includes(item) ? "success" : "inherit";
};

export default function FilterItem({
  filters,
  tag,
  filterHandler,
}: FilterItemProps) {
  return (
    <Button
      variant="contained"
      style={filterItemStyle}
      color={getButtonColorForFilter(filters, tag)}
      onClick={() => filterHandler(tag)}
    >
      {tag.name}
    </Button>
  );
}
