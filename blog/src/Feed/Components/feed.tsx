import ArticleListContainer from "../containers/articleListContainer";
import FilterList from "./filterList";
import { Fragment } from "react";

export default function Feed() {
  return (
    <Fragment>
      <div className="feedBody">
        <ArticleListContainer />
        <FilterList />
      </div>
    </Fragment>
  );
}
