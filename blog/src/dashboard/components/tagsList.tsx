import { Tag } from "../types";
import { TagListContainer } from "./styled";
import TagItem from "./tagItem";

export type FilterListProps = {
  items: Tag[];
  deleteHandler: (tag: Tag) => void;
};

export default function TagsList({ items, deleteHandler }: FilterListProps) {
  return (
    <TagListContainer>
      {items.map((item) => {
        return (
          <TagItem key={item.name} tag={item} deleteHandler={deleteHandler} />
        );
      })}
    </TagListContainer>
  );
}
