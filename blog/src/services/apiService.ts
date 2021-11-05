import { Article, ArticleComment } from "../types/articleTypes";
import { User } from "../types/userTypes";

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:3004/articles");
  const data = await response.json();
  return data;
};

export const getArticlesById = async (id: number): Promise<Article> => {
  const response = await fetch(`http://localhost:3004/articles/${id}`);
  const data = await response.json();
  return data;
};

export const likeArticle = async (article: Article, userId: number) => {
  article.likes.push(userId);
  await fetch(`http://localhost:3004/articles/${article.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
};

export const deleteLikeFromArticle = async (
  article: Article,
  userId: number
) => {
  const index: number = article.likes.indexOf(userId);
  article.likes.splice(index, 1);
  await fetch(`http://localhost:3004/articles/${article.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
};

export const saveComment = async (
  article: Article,
  comment: ArticleComment
) => {
  article.comments.push(comment);
  await fetch(`http://localhost:3004/articles/${article.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await fetch("http://localhost:3004/users/1");
  const data = await response.json();
  return data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await fetch(`http://localhost:3004/users/${id}`);
  const data = await response.json();
  return data;
};

export const addToBookmarks = async (user: User, articleId: number) => {
  user.bookmarks.push(articleId);
  await fetch(`http://localhost:3004/users/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

export const deleteFromBookmarks = async (user: User, articleId: number) => {
  const index = user.bookmarks.indexOf(articleId);
  user.bookmarks.splice(index, 1);
  await fetch(`http://localhost:3004/users/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
