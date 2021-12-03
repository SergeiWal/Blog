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

export const updateLikeArticle = async ({ _id, likes }: Article) => {
  await instance.patch(`/articles/${_id}`, { likes });
};

// export const updateCommentsArticle = async ({ id, comments }: Article) => {
//   await instance.patch(`/articles/${id}`, {
//     comments,
//   });
// };

export const deleteArticle = async (id: string) => {
  await instance.delete(`/articles/${id}`);
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
