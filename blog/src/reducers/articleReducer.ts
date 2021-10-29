import { createSlice } from "@reduxjs/toolkit";

export type Article = {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  img: string;
  date: string;
  updatedate: string;
  name: string;
  tags: Array<string>;
};

type Articles = Array<Article>;

const defaultArticles: Articles = [];

export const articleSlice = createSlice({
  name: "article",
  initialState: defaultArticles,
  reducers: {},
});

export default articleSlice.reducer;
