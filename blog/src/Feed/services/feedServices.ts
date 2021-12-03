import { Article } from "../../article/types/articleTypes";
import { Tag } from "../../dashboard/types";

const findTagsAtArticle = (article: Article, filters: Tag[]): boolean => {
  for (let filter of filters) {
    if (article.tags.indexOf(filter) !== -1) {
      return true;
    }
  }
  return false;
};

export const selectArticlesByFilters = (
  articles: Article[],
  filters: Tag[]
): Article[] => {
  const resultArticles = articles.filter((item) => {
    return findTagsAtArticle(item, filters);
  });
  return resultArticles;
};
