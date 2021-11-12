import { MAX_WORDS_IN_CARD } from "../constants/article";
import { Article, Articles } from "../types/articleTypes";
import { DEFAULT_ARTICLE } from "../constants/article";
import { User } from "../../authorization/types/userTypes";

export function createTextPreview(text: string): string {
  return text.slice(0, MAX_WORDS_IN_CARD) + "...";
}

export function tagsArrToStr(tags: string[]): string {
  return tags.join(" , ");
}

export const getButtonColorForCollection = (
  collection: Array<string>,
  id: string
) => {
  return collection.includes(id) ? "success" : "inherit";
};

export const findArticle = (articles: Articles, id: string): Article => {
  return articles.find((article) => article.id === id) || DEFAULT_ARTICLE;
};

export const like = (article: Article, user: User): Article => {
  if (article.likes.includes(user.id)) {
    const index = article.likes.indexOf(user.id);
    article.likes.splice(index, 1);
  } else {
    article.likes.push(user.id);
  }
  return article;
};

export const bookmark = (user: User, articleId: string): User => {
  if (user.bookmarks.includes(articleId)) {
    const index = user.bookmarks.indexOf(articleId);
    user.bookmarks.splice(index, 1);
  } else {
    user.bookmarks.push(articleId);
  }
  return user;
};
