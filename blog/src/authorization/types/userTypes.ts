import { Article } from "../../article/types/articleTypes";

export type User = {
  _id: string;
  name: string;
  password: string;
  roles: string[];
  activate: boolean;
  photo: string;
  posts: Array<Article>;
  bookmarks: Array<string>;
};
