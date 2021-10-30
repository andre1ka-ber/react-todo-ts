import { createAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";

export const fetchTodoUser = createAction("FETCH_TODO_USER", (id: number) => ({
  payload: { id },
}));
export const setFetchedUser = createAction(
  "SET_FETCHED_USER",
  (user: IUser) => ({ payload: user }),
);
