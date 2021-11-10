import { Article } from "./articleTypes";

export type User = {
  id: string;
  name: string;
  password: string;
  photo: string;
  posts: Array<Article>;
  bookmarks: Array<string>;
};
