import { Article } from "../../article/types/articleTypes";

export type User = {
  id: string;
  name: string;
  password: string;
  isAdmin: boolean;
  isBlocked: boolean;
  photo: string;
  posts: Array<Article>;
  bookmarks: Array<string>;
};
