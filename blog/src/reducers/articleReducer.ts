import { Articles } from "../types/articleTypes";
import { ArticleAction } from "../actions/articleActions";
import { GET_ARTICLES } from "../constants/article";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: ArticleAction
) {
  switch (action.type) {
    case GET_ARTICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
