import { Articles, ArticleComment } from "../types/articleTypes";

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

export function deleteLikeFromArticles(
  articles: Articles,
  articleId: number,
  userId: number
) {
  for (let article of articles) {
    const index: number = article.likes.indexOf(userId);
    if (article.id === articleId && index != -1) {
      article.likes.splice(index, 1);
      break;
    }
  }
  return articles;
}

export default function saveCommentForArticle(
  articleId: number,
  articles: Articles,
  comment: ArticleComment
) {
  for (let article of articles) {
    if (article.id === articleId) {
      article.comments.push(comment);
      return articles;
    }
  }
  return articles;
}
