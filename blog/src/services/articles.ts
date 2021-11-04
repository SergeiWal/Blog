import { MAX_WORDS_IN_CARD } from "../constants/article";
import { Article, Articles } from "../types/articleTypes";
import { DEFAULT_ARTICLE } from "../constants/article";

export function createTextPreview(text: string): string {
  return text.slice(0, MAX_WORDS_IN_CARD) + "...";
}

export function tagsArrToStr(tags: string[]): string {
  return tags.join(" , ");
}

export const getButtonColorForCollection = (
  collection: Array<number>,
  id: number
) => {
  return collection.includes(id) ? "success" : "inherit";
};

export const findArticle = (articles: Articles, id: number): Article =>
  articles.find((article) => article.id === id) || DEFAULT_ARTICLE;
