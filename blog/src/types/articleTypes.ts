export type Article = {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: string;
  updatedate: string;
  name: string;
  tags: Array<string>;
  likes: Array<number>;
  comments: ArticleComments;
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
  id: number;
  author: number;
  text: string;
};

export type ArticleComments = Array<ArticleComment>;
