import { ArticleComment } from "../article/types/articleTypes";
import { User } from "../authorization/types/userTypes";
import axios from "axios";
import { NewArticle } from "../createArticle/containers/createArticleContainer";
import {
  Bookmark,
  Like,
  NewBookmark,
} from "../article/types/articleActionsType";
import { SignInUpPayload } from "../store/reducers/authorizeReducer";
import { SignUpPayload } from "../store/reducers/signUpReducer";

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

instance.interceptors.response.use((response) => response.data);

export const getArticles = async () => {
  return await instance.get("/articles", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getArticlesById = async (id: string) => {
  return await instance.get(`/articles/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const addArticle = async (article: NewArticle) => {
  await instance.post("/articles", article, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteArticle = async (id: string) => {
  await instance.delete(`/articles/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getComments = async (article_id: string) => {
  return await instance.get(`/comments/${article_id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const saveComment = async (comment: ArticleComment) => {
  return await instance.post("/comments", comment, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getUsers = async () => {
  return await instance.get(`/users`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getUser = async (name: string) => {
  return await instance.get(`/users/username/${name}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteUser = async (id: string) => {
  await instance.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const updateBookmarkForUser = async ({ _id, bookmarks }: User) => {
  await instance.patch(
    `/users/${_id}`,
    { bookmarks },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

export const updateStatusForUser = async ({ _id }: User) => {
  await instance.patch(`/users/activate/${_id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getTags = async () => {
  return await instance.get("/tags", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const addTag = async (tag: string) => {
  return await instance.post(
    `/tags/${tag}`,
    {},
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

export const deleteTag = async (id: string) => {
  console.log("delete");
  await instance.delete(`/tags/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const isLikeExist = async ({ user, article }: Like) => {
  return await instance.get(`/likes/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const getLikeCount = async (id: number) => {
  return await instance.get(`/likes/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const saveLike = async (like: Like) => {
  await instance.post("/likes", like, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteLike = async ({ user, article }: Like) => {
  await instance.delete(`/likes/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const isBookmark = async ({ user, article }: Bookmark) => {
  return await instance.get(`/bookmarks/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const saveBookmark = async (bookmark: NewBookmark) => {
  await instance.post("/bookmarks", bookmark, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteBookmark = async ({ user, article }: Bookmark) => {
  await instance.delete(`/bookmarks/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const signIn = async (payload: SignInUpPayload) => {
  return await instance.post(`/auth/login`, payload);
};

export const signUp = async (payload: SignUpPayload) => {
  return await instance.post(`/users`, payload);
};
