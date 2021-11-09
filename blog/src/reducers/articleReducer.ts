import { Articles } from "../types/articleTypes";
import {
  ArticleAction,
  LikeArticle,
  SaveComment,
} from "../types/articleActionsType";
import {
  DELETE_LIKE,
  GET_ARTICLES,
  GET_ARTICLES_LOADED,
  GET_ARTICLE_BY_ID,
  GET_ARTICLE_BY_ID_LOADED,
  LIKE,
  SAVE_COMMENT,
} from "../constants/article";
import saveCommentForArticle, {
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
      return state;
    case GET_ARTICLES_LOADED:
      return [...action.payload];
    case GET_ARTICLE_BY_ID:
      return state;
    case GET_ARTICLE_BY_ID_LOADED:
      return [...state, action.payload];
    case LIKE:
      userID = (action as LikeArticle).payload.userId;
      articleID = (action as LikeArticle).payload.articleId;
      return [...likeArticles(state, articleID, userID)];
    case DELETE_LIKE:
      userID = (action as LikeArticle).payload.userId;
      articleID = (action as LikeArticle).payload.articleId;
      return [...deleteLikeFromArticles(state, articleID, userID)];
    case SAVE_COMMENT:
      const payload = (action as SaveComment).payload;
      return [
        ...saveCommentForArticle(payload.articleId, state, payload.comment),
      ];
    default:
      return state;
  }
}
