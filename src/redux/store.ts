import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { sagaWatcher } from "./sagas";
import { rootReducer } from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middlewares),
});

sagaMiddleware.run(sagaWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
