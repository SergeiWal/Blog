import { Article, ArticleComment } from "../article/types/articleTypes";
import { User } from "../authorization/types/userTypes";
import axios from "axios";
import { NewArticle } from "../createArticle/containers/createArticleContainer";
import {
  Bookmark,
  Like,
  NewBookmark,
} from "../article/types/articleActionsType";

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

export const addArticle = async (article: NewArticle) => {
  await instance.post("/articles", article);
};

export const deleteArticle = async (id: string) => {
  await instance.delete(`/articles/${id}`);
};

export const getComments = async (article_id: string) => {
  const response = await instance.get(`/comments/${article_id}`);
  return response.data;
};

export const saveComment = async (comment: ArticleComment) => {
  const response = await instance.post("/comments", comment);
  return response.data;
};

export const getUsers = async () => {
  const response = await instance.get(`/users`);
  return response.data;
};

export const getUser = async (name: string) => {
  const response = await instance.get(`/users/username/${name}`);
  return response.data;
};

export const deleteUser = async (id: string) => {
  await instance.delete(`/users/${id}`);
};

export const updateBookmarkForUser = async ({ _id, bookmarks }: User) => {
  await instance.patch(`/users/${_id}`, { bookmarks });
};

export const updateStatusForUser = async ({ _id }: User) => {
  await instance.patch(`/users/activate/${_id}`);
};

export const getTags = async () => {
  const response = await instance.get("/tags");
  return response.data;
};

export const addTag = async (tag: string) => {
  const response = await instance.post(`/tags/${tag}`);
  return response.data;
};

export const deleteTag = async (id: string) => {
  await instance.delete(`/tags/${id}`);
};

export const isLikeExist = async ({ user, article }: Like) => {
  const response = await instance.get(`/likes/${article}/user/${user}`);
  return response.data;
};

export const getLikeCount = async (id: number) => {
  const response = await instance.get(`/likes/${id}`);
  return response.data;
};

export const saveLike = async (like: Like) => {
  await instance.post("/likes", like);
};

export const deleteLike = async ({ user, article }: Like) => {
  await instance.delete(`/likes/${article}/user/${user}`);
};

export const isBookmark = async ({ user, article }: Bookmark) => {
  const response = await instance.get(`/bookmarks/${article}/user/${user}`);
  return response.data;
};

export const saveBookmark = async (bookmark: NewBookmark) => {
  await instance.post("/bookmarks", bookmark);
};

export const deleteBookmark = async ({ user, article }: Bookmark) => {
  await instance.delete(`/bookmarks/${article}/user/${user}`);
};
