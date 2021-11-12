import FilterItem from "./filterItem";

const filterItems: string[] = [
  "lifestyle",
  "development",
  "UX",
  "interesting",
  "interview",
  "sport",
  "fashion",
];

export default function FilterList() {
  return (
    <div className="filters">
      <div className="filters_header">Filters</div>
      <div className="filter_list">
        {filterItems.map((item) => {
          return <FilterItem key={item} tag={item} />;
        })}
      </div>
    </div>
  );
}
