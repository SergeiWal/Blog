import { Articles } from "../types/articleTypes";
import { ArticleAction, LikeArticle } from "../actions/articleActions";
import { GET_ARTICLES, LIKE } from "../constants/article";
import { likeArticles } from "../services/articleReducerService";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: ArticleAction
) {
  switch (action.type) {
    case GET_ARTICLES:
      return [...state, ...action.payload];
    case LIKE:
      const userID = (action as LikeArticle).payload.userId;
      const articleID = (action as LikeArticle).payload.articleId;
      return [...likeArticles(state, articleID, userID)];
    default:
      return state;
  }
}
