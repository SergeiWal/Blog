import { Tag } from "../../dashboard/types";
import FilterItemContainer from "../containers/filterItemContainer";
import { TagsListContainer } from "./styled";

export type FilterListProps = {
  tags: Tag[];
};

export default function FilterList({ tags }: FilterListProps) {
  return (
    <TagsListContainer>
      <div className="filters_header">Filters</div>
      <div className="filter_list">
        {tags.map((item) => {
          return <FilterItemContainer key={item._id} tag={item} />;
        })}
      </div>
    </TagsListContainer>
  );
}
