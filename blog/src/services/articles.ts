import { MAX_WORDS_IN_CARD } from "../constants/article";

export function createTextPreview(text: string): string {
  return text.slice(0, MAX_WORDS_IN_CARD) + "...";
}

export function tagsArrToStr(tags: string[]): string {
  return tags.join(" , ");
}
