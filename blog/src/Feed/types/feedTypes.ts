export type FilterItemProps = {
  filters: string[];
  content: string;
  filterHandler: (filter: string) => void;
};

export type FilterItemContainerProps = {
  tag: string;
};
