import { Article, ArticleComment } from "./articleTypes";
import { User } from "../../authorization/types/userTypes";

export type LikePayload = {
  article: Article;
  user: User;
};

export type SaveCommentPayload = {
  article: Article;
  comment: ArticleComment;
};
