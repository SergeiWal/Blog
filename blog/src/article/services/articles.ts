import { MAX_WORDS_IN_CARD } from "../constants/article";
import { Article, Articles } from "../types/articleTypes";
import { DEFAULT_ARTICLE } from "../constants/article";
import { User } from "../../authorization/types/userTypes";
import { Tag } from "../../dashboard/types";

export function createTextPreview(text: string): string {
  return text.slice(0, MAX_WORDS_IN_CARD) + "...";
}

export function tagsArrToStr(tags: Tag[]): string {
  return tags.map((tag) => tag.name).join(" , ");
}

export const getButtonColorForCollection = (
  collection: Array<string>,
  item: string
) => {
  return collection.includes(item) ? "success" : "inherit";
};

export const findArticle = (articles: Articles, id: string): Article => {
  return articles.find((article) => article._id === id) || DEFAULT_ARTICLE;
};

export const like = (article: Article, user: User): Article => {
  if (article.likes.includes(user._id)) {
    const index = article.likes.indexOf(user._id);
    article.likes.splice(index, 1);
  } else {
    article.likes.push(user._id);
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
