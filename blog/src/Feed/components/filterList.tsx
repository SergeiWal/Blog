import { Tag } from "../../dashboard/types";
import FilterItemContainer from "../containers/filterItemContainer";
import { FilterListTitle, TagListContainer, TagsListContainer } from "./styled";

export type FilterListProps = {
  tags: Tag[];
};

export default function FilterList({ tags }: FilterListProps) {
  return (
    <TagsListContainer>
      <FilterListTitle>Filters</FilterListTitle>
      <TagListContainer>
        {tags.map((item) => {
          return <FilterItemContainer key={item._id} tag={item} />;
        })}
      </TagListContainer>
    </TagsListContainer>
  );
}
