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
};

export type Articles = Array<Article>;

export type ArticlePreviewProps = {
  article: Article;
};
