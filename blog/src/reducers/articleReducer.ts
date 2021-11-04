import { Articles } from "../types/articleTypes";
import { ArticleAction, LikeArticle } from "../actions/articleActions";
import { DELETE_LIKE, GET_ARTICLES, LIKE } from "../constants/article";
import {
  deleteLikeFromArticles,
  likeArticles,
} from "../services/articleReducerService";

const defaultArticles: Articles = [];

let userID: number;
let articleID: number;

export default function articleReducer(
  state = defaultArticles,
  action: ArticleAction
) {
  switch (action.type) {
    case GET_ARTICLES:
      return [...state, ...action.payload];
    case LIKE:
      userID = (action as LikeArticle).payload.userId;
      articleID = (action as LikeArticle).payload.articleId;
      return [...likeArticles(state, articleID, userID)];
    case DELETE_LIKE:
      userID = (action as LikeArticle).payload.userId;
      articleID = (action as LikeArticle).payload.articleId;
      return [...deleteLikeFromArticles(state, articleID, userID)];
    default:
      return state;
  }
}
