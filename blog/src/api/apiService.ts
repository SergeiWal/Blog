import { Article } from "../article/types/articleTypes";
import { User } from "../authorization/types/userTypes";
import axios from "axios";
import { NewArticle } from "../createArticle/containers/createArticleContainer";

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

export const updateLikeArticle = async ({ id, likes }: Article) => {
  await instance.patch(`/articles/${id}`, { likes });
};

export const updateCommentsArticle = async ({ id, comments }: Article) => {
  await instance.patch(`/articles/${id}`, {
    comments,
  });
};

export const deleteArticle = async (id: string) => {
  await instance.delete(`/articles/${id}`);
};

export const getUser = async (id: string) => {
  const response = await instance.get(`/users/${id}`);
  return response.data;
};

export const updateBookmarkForUser = async ({ id, bookmarks }: User) => {
  await instance.patch(`/users/${id}`, { bookmarks });
};
