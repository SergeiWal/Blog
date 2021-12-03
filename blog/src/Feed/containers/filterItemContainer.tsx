import { Tag } from "../../dashboard/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeFilterAction } from "../articleListActions";
import FilterItem from "../components/filterItem";
import { FilterItemContainerProps } from "../types/feedTypes";

export default function FilterItemContainer({ tag }: FilterItemContainerProps) {
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const filterHandler = (filter: Tag) => {
    const index = filters.indexOf(filter);
    if (index !== -1) {
      filters.splice(index, 1);
    } else {
      filters.push(filter);
    }
    dispatch(changeFilterAction());
  };

  return (
    <FilterItem tag={tag} filters={filters} filterHandler={filterHandler} />
  );
}
