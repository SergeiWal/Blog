import { Article } from "../types/articleTypes";
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

export const getCurrentUser = async (): Promise<User> => {
  const response = await fetch("http://localhost:3004/users/1");
  const data = await response.json();
  return data;
};