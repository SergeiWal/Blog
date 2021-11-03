import { Article } from "./articleTypes";

export type User = {
  id: number;
  name: string;
  password: string;
  photo: string;
  posts: Array<Article>;
  bookmarks: Array<number>;
};
