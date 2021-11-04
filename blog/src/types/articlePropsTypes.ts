import { Article } from "./articleTypes";
import { User } from "./userTypes";

export type ArticlePageProps = {
  id: string;
  article: Article;
  user: User;
  likeHandler: () => void;
  addToBookmarksHandler: () => void;
};

export type ArticlePageFooterProps = {
  id: string;
  likes: Array<number>;
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
