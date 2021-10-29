import { Article } from "../types/articleTypes";
import { ArticleAction } from "../actions/articleActions";

type Articles = Array<Article>;

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: ArticleAction
) {
  switch (action.type) {
    case "GET_ARTICLES":
      return [...state, action.payload];
    default:
      return state;
  }
}
