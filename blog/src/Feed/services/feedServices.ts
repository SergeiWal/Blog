import { Article } from "../../article/types/articleTypes";

const findTagsAtArticle = (article: Article, filters: string[]): boolean => {
  for (let filter of filters) {
    if (article.tags.indexOf(filter) !== -1) {
      return true;
    }
  }
  return false;
};

export const selectArticlesByFilters = (
  articles: Article[],
  filters: string[]
): Article[] => {
  const resultArticles = articles.filter((item) => {
    return findTagsAtArticle(item, filters);
  });
  return resultArticles;
};
