import { takeLatest, put, call } from "redux-saga/effects"
import {fetchTodos, hideFetchingLoader, setFetchedTodos, showFetchingLoader} from "./actionCreators/todosActions";
import {TodoStatusEnum} from "../enums/TodoStatusEnum";
import {fetchTodoUser} from "./actionCreators/fetchTodosActions";
import {disableModalLoading, enableModalLoading, setModalContent} from "./actionCreators/appActions";

export function* sagaWatcher() {
  yield takeLatest(fetchTodos, todosFetchWorker);
  yield takeLatest(fetchTodoUser, fetchTodoUserWorker)
}

/**
 * @todo change payload typing
 */
function* todosFetchWorker(action: any): any {
  yield put(showFetchingLoader())
  const options = yield defineFetchingTodoOptions(action.payload)
  const todos = yield call(fetchTodosFromApi, options)
  yield put(setFetchedTodos(todos));
  yield put(hideFetchingLoader())
}

function* fetchTodoUserWorker (action: any): any {
  yield put(enableModalLoading())
  const user = yield call(fetchUserData, action.payload.id)
  yield put(setModalContent(user))
  yield put(disableModalLoading())
}

async function fetchTodosFromApi(options: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?${options}`);
  return await response.json()
}

async function fetchUserData(userId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return await response.json()
}

function defineFetchingTodoOptions(object: Record<string, number>): string {
  const options = []
  for (const [optionName, optionValue] of Object.entries(object)) {
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
      default:
        options.push(`${optionName}=${optionValue}`);
    }
  }
  return options.join("&");
}