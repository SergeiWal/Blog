import { Tag } from "../types";
import TagItem from "./tagItem";

export type FilterListProps = {
  items: Tag[];
  deleteHandler: (tag: Tag) => void;
};

export default function TagsList({ items, deleteHandler }: FilterListProps) {
  return (
    <div className="tags">
      <div className="tag_list">
        {items.map((item) => {
          return (
            <TagItem key={item.name} tag={item} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </div>
  );
}
