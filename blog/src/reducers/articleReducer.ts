import { Articles } from "../types/articleTypes";
import {
  ArticleAction,
  LikeArticle,
  SaveComment,
} from "../actions/articleActions";
import {
  DELETE_LIKE,
  GET_ARTICLES,
  SET_ARTICLES,
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
    case SET_ARTICLES:
      return [...state, ...action.payload];
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
