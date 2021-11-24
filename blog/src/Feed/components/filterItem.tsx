import { Button } from "@mui/material";
import { getButtonColorForCollection } from "../../article/services/articles";
import { FilterItemProps } from "../types/feedTypes";

const filterItemStyle = {
  margin: 3,
};

export default function FilterItem({
  filters,
  content,
  filterHandler,
}: FilterItemProps) {
  return (
    <Button
      variant="contained"
      style={filterItemStyle}
      color={getButtonColorForCollection(filters, content)}
      onClick={() => filterHandler(content)}
    >
      {content.replace("#", "")}
    </Button>
  );
}
