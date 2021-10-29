import { put } from "@redux-saga/core/effects";
import { getArticleAction } from "../actions/articleActions";

const getArticles = async () => {
  const response = await fetch("http://localhost:3004/artcles");
  const data = await response.json();
  console.log(data);
  return data;
};

export default function* TestSaga() {
  //const data: Promise<any> =
  yield getArticles();

  //yield put({ type: "GET_ARTICLE" , payloads:data.});
}
