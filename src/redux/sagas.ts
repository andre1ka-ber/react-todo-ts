import { takeEvery, put, call } from "redux-saga/effects"
import {fetchTodos, setFetchedTodos} from "./actionCreators/todosActions";

export function* sagaWatcher() {
  yield takeEvery(fetchTodos.type, sagaFetchWorker);
}

function* sagaFetchWorker(): any {
  const todos = yield call(fetchTodosFromApi)
  yield put(setFetchedTodos(todos));
}

async function fetchTodosFromApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json()
}