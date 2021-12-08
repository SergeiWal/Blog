import { User } from "../../authorization/types/userTypes";
import { Tag } from "../../dashboard/types";

export type Article = {
  _id: string;
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: Date;
  updateDate: Date;
  author: User;
  tags: Tag[];
};

export type Articles = Array<Article>;

export type ArticleParamsType = {
  id: string;
};

export type ListGeneratorParams = {
  data: JSX.Element[];
  index: number;
  style: React.CSSProperties;
};

export type ArticleComment = {
  _id?: string;
  article: Article;
  author: User;
  text: string;
};

export type NewComment = {
  author: User;
  text: string;
};

export type ArticleComments = Array<ArticleComment>;
