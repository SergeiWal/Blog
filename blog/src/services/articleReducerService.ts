import { Articles } from "../types/articleTypes";

export function likeArticles(
  articles: Articles,
  articleId: number,
  userId: number
) {
  for (let article of articles) {
    if (article.id === articleId) {
      article.likes.push(userId);
      break;
    }
  }

  return articles;
}
