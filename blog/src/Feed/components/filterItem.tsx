import { Button } from "@mui/material";
import { Tag } from "../../dashboard/types";
import { FilterItemProps } from "../types/feedTypes";
import { TagItemBtnMixin } from "./styled";

export const getButtonColorForFilter = (collection: Array<Tag>, item: Tag) => {
  return collection.includes(item) ? "success" : "inherit";
};

export default function FilterItem({
  filters,
  tag,
  filterHandler,
}: FilterItemProps) {
  const TagItemBtn = TagItemBtnMixin(filters, tag);
  return (
    <TagItemBtn variant="contained" onClick={() => filterHandler(tag)}>
      {tag.name}
    </TagItemBtn>
  );
}
