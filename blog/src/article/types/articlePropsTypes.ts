import { Article, ArticleComments, Articles } from "./articleTypes";
import { User } from "../../authorization/types/userTypes";

export type ArticleListProps = {
  articles: Articles;
};

export type ArticlePageProps = {
  article: Article;
  user: User;
  likeHandler: () => void;
  addToBookmarksHandler: () => void;
};

export type ArticlePageFooterProps = {
  article: Article;
  user: User;
  open: boolean;
  likeHandler: () => void;
  addToBookmarksHandler: () => void;
  saveCommentHandler: (comment: string) => void;
  openHandler: () => void;
  closeHandler: () => void;
};

export type ArticlePageFooterConteinerProps = {
  article: Article;
  user: User;
  likeHandler: () => void;
  addToBookmarksHandler: () => void;
};

export type ArticlePafeHeaderProps = {
  title: string;
  subtitle: string;
  name: string;
  date: string;
  updatedate: string;
};

export type ArticlePageMainContentProps = {
  id: string;
  img: string;
  text: string;
};

export type ArticlePreviewProps = {
  article: Article;
};

export type ArticleCommentsProps = {
  comments: ArticleComments;
};

export type CommentFormProps = {
  open: boolean;
  closeHandler: () => void;
  changeCommentHandler: (text: string) => void;
  saveCommentHandler: () => void;
};

export type CommentViewProps = {
  user: User;
  text: string;
};

export type CommentFormContainerProps = {
  open: boolean;
  saveComment: (comment: string) => void;
  closeHandler: () => void;
};
