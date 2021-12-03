import { Tag } from "../../dashboard/types";

export type FilterItemProps = {
  filters: Tag[];
  tag: Tag;
  filterHandler: (filter: Tag) => void;
};

export type FilterItemContainerProps = {
  tag: Tag;
};
