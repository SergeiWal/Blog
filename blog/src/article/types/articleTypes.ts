import { User } from "../../authorization/types/userTypes";

export type Article = {
  _id: string;
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: Date;
  updateDate: Date;
  author: User;
  tags: Array<string>;
  likes: Array<string>;
  //comments: ArticleComments;
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
  id: string;
  author: User;
  text: string;
};

export type NewComment = {
  author: User;
  text: string;
};

export type ArticleComments = Array<ArticleComment>;
