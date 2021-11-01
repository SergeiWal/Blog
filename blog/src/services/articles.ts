import { MAX_WORDS_IN_CARD } from "../constants/article";
import { Article } from "../types/articleTypes";

export function createTextPreview(text: string): string {
  return text.slice(0, MAX_WORDS_IN_CARD) + "...";
}

export function tagsArrToStr(tags: string[]): string {
  return tags.join(" , ");
}

export const requestToApi = (
  path: string,
  callback: (article: Article) => void
) => {
  fetch(path)
    .then((request) => request.json())
    .then((data) => {
      callback(data);
    });
};
