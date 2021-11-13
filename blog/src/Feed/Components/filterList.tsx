import { FILTER_ITEMS } from "../constants/feedConstants";
import FilterItemContainer from "../containers/filterItemContainer";

export default function FilterList() {
  return (
    <div className="filters">
      <div className="filters_header">Filters</div>
      <div className="filter_list">
        {FILTER_ITEMS.map((item) => {
          return <FilterItemContainer key={item} tag={item} />;
        })}
      </div>
    </div>
  );
}
