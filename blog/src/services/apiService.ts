import { Article } from "../types/articleTypes";
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

export const updateArticle = async (article: Article) => {
  await instance.put(`/articles/${article.id}`, article);
};

export const getUserById = async (id: string) => {
  const response = await instance.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (user: User) => {
  await instance.put(`/users/${user.id}`, user);
};
