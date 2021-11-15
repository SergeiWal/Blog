import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeFilterAction } from "../articleListActions";
import FilterItem from "../Components/filterItem";
import { FilterItemContainerProps } from "../types/feedTypes";

export default function FilterItemContainer({ tag }: FilterItemContainerProps) {
  const filterContent = "#" + tag;
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const filterHandler = (filter: string) => {
    const index = filters.indexOf(filter);
    if (index !== -1) {
      filters.splice(index, 1);
    } else {
      filters.push(filter);
    }
    dispatch(changeFilterAction());
  };

  return (
    <FilterItem
      content={filterContent}
      filters={filters}
      filterHandler={filterHandler}
    />
  );
}
