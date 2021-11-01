import { put, call } from "redux-saga/effects";
import { loadArticleAction } from "../actions/articleActions";
import { Article } from "../types/articleTypes";

const getArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:3004/artcles");
  const data = await response.json();
  return data;
};

function* getArticleSagaWorker() {
  const data: Article[] = yield call(getArticles);
  yield put(loadArticleAction(data));
}

export default function* rootSaga() {
  yield getArticleSagaWorker();
}
