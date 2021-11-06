import { Article, ArticleComments } from "./articleTypes";
import { User } from "./userTypes";

export type ArticlePageProps = {
  article: Article;
  user: User;
  likeHandler: () => void;
  addToBookmarksHandler: () => void;
};

export type ArticlePageFooterProps = {
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
  id: number;
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
  saveComment: (comment: string) => void;
};

export type CommentViewProps = {
  user: User;
  text: string;
};
