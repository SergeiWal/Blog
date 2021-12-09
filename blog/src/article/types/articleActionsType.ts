import { Article, ArticleComment } from "./articleTypes";
import { User } from "../../authorization/types/userTypes";

export type Like = {
  article: string;
  user: string;
};

export type NewLike = {
  article: Article;
  user: User;
};

export type Bookmark = {
  article: string;
  user: string;
};

export type NewBookmark = {
  article: Article;
  user: User;
};

export type SaveCommentPayload = {
  article: Article;
  comment: ArticleComment;
};
