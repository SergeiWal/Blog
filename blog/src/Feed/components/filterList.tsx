import { Tag } from "../../dashboard/types";
import FilterItemContainer from "../containers/filterItemContainer";

export type FilterListProps = {
  tags: Tag[];
};

export default function FilterList({ tags }: FilterListProps) {
  return (
    <div className="filters">
      <div className="filters_header">Filters</div>
      <div className="filter_list">
        {tags.map((item) => {
          return <FilterItemContainer key={item._id} tag={item} />;
        })}
      </div>
    </div>
  );
}
