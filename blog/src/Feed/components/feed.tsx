import ArticleListContainer from "../containers/articleListContainer";
import { Fragment } from "react";
import FilterListContainer from "../containers/filterListContainer";

export default function Feed() {
  return (
    <Fragment>
      <div className="feedBody">
        <ArticleListContainer />
        <FilterListContainer />
      </div>
    </Fragment>
  );
}
