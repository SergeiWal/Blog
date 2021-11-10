import { Article, ArticleComment } from "../types/articleTypes";
import { User } from "../types/userTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004",
});

export const getArticles = async () => {
  const response = await instance.get("/articles");
  return response.data;
};

export const getArticlesById = async (id: string) => {
  const response = await instance.get(`/articles/${id}`);
  return response.data;
};

export const likeArticle = async (article: Article, userId: string) => {
  article.likes.push(userId);
  await instance.put(`/articles/${article.id}`, article);
};

export const deleteLikeFromArticle = async (
  article: Article,
  userId: string
) => {
  const index: number = article.likes.indexOf(userId);
  article.likes.splice(index, 1);
  await instance.put(`/articles/${article.id}`, article);
};

export const saveComment = async (
  article: Article,
  comment: ArticleComment
) => {
  article.comments.push(comment);
  await instance.put(`/articles/${article.id}`, article);
};

export const getUserById = async (id: string) => {
  const response = await instance.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (user: User) => {
  await instance.put(`/users/${user.id}`, user);
};

export const addToBookmarks = async (user: User, articleId: string) => {
  user.bookmarks.push(articleId);
  await instance.put(`/users/${user.id}`, user);
};

export const deleteFromBookmarks = async (user: User, articleId: string) => {
  const index = user.bookmarks.indexOf(articleId);
  user.bookmarks.splice(index, 1);
  await instance.put(`/users/${user.id}`, user);
};
