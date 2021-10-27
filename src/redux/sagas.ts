import { takeLatest, put, call } from "redux-saga/effects"
import {fetchTodos, hideFetchingLoader, setFetchedTodos, showFetchingLoader} from "./actionCreators/todosActions";
import {TodoStatusEnum} from "../enums/TodoStatusEnum";

export function* sagaWatcher() {
  yield takeLatest(fetchTodos, todosFetchWorker);
}

/**
 * @todo change payload typing
 */
function* todosFetchWorker(action: any): any {
  yield put(showFetchingLoader())
  const options = []
  for (const [optionName, optionValue] of Object.entries(action.payload)) {
    if (optionValue === 0) {
      continue;
    }
    switch (optionName) {
      case 'completed':
        const completed = optionValue === TodoStatusEnum.COMPLETED;
        options.push(`${optionName}=${completed}`);
        break;
      case 'count':
        options.push(`_limit=${optionValue}`);
        break;
      case 'userId':
        options.push(`${optionName}=${optionValue}`);
        break;
      default:
        options.push(`${optionName}=${optionValue}`);
    }
  }
  const todos = yield call(fetchTodosFromApi, options.join("&"))
  yield put(setFetchedTodos(todos));
  yield put(hideFetchingLoader())
}

async function fetchTodosFromApi(options: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?${options}`);
  return await response.json()
}