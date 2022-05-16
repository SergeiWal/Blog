import axios from "axios";
import { SignUpPayload } from "../store/reducers/signUpReducer";
import { getRequestPayload } from "../globalTypes";
import {
  AddArticlePayload,
  ArticlePayload,
  BookmarkPayload,
  DeleteLikePayload,
  DeleteTagPayload,
  DeleteUSerPayload,
  GetCommentsPayload,
  getLikeCountPayload,
  isExistPayload,
  SaveBookmarkPayload,
  SaveCommentPayload,
  saveLikePayload,
  SignInUpPayload,
  TagPayload,
  UpdateUserStatus,
} from "../store/requestsPayloads";

const instance = axios.create({});

instance.interceptors.response.use((response) => response.data);

export const getArticles = async ({ token }: getRequestPayload) => {
  return await instance.get("/articles", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getArticlesById = async ({ id, token }: ArticlePayload) => {
  return await instance.get(`/articles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addArticle = async ({ article, token }: AddArticlePayload) => {
  await instance.post("/articles", article, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteArticle = async ({ id, token }: ArticlePayload) => {
  await instance.delete(`/articles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getComments = async ({ id, token }: GetCommentsPayload) => {
  return await instance.get(`/comments/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const saveComment = async ({
  token,
  ...comment
}: SaveCommentPayload) => {
  return await instance.post("/comments", comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUsers = async ({ token }: getRequestPayload) => {
  return await instance.get(`/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUser = async (token: string) => {
  return await instance.get(`/auth`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = async ({ id, token }: DeleteUSerPayload) => {
  await instance.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateStatusForUser = async ({
  user: { _id },
  token,
}: UpdateUserStatus) => {
  await instance.patch(`/users/activate/${_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getTags = async ({ token }: getRequestPayload) => {
  return await instance.get("/tags", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addTag = async ({ token, tag }: TagPayload) => {
  return await instance.post(
    `/tags/${tag}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteTag = async ({ id, token }: DeleteTagPayload) => {
  console.log("delete");
  await instance.delete(`/tags/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const isLikeExist = async ({
  like: { user, article },
  token,
}: isExistPayload) => {
  return await instance.get(`/likes/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getLikeCount = async ({ id, token }: getLikeCountPayload) => {
  return await instance.get(`/likes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const saveLike = async ({ like, token }: saveLikePayload) => {
  await instance.post("/likes", like, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteLike = async ({
  like: { user, article },
  token,
}: DeleteLikePayload) => {
  await instance.delete(`/likes/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const isBookmark = async ({
  bookmark: { user, article },
  token,
}: BookmarkPayload) => {
  return await instance.get(`/bookmarks/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const saveBookmark = async ({
  bookmark,
  token,
}: SaveBookmarkPayload) => {
  await instance.post("/bookmarks", bookmark, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteBookmark = async ({
  bookmark: { user, article },
  token,
}: BookmarkPayload) => {
  await instance.delete(`/bookmarks/${article}/user/${user}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const signIn = async (payload: SignInUpPayload) => {
  return await instance.post(`/auth/login`, payload);
};

export const signUp = async (payload: SignUpPayload) => {
  return await instance.post(`/users`, payload);
};
