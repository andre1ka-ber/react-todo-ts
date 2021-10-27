import {createReducer} from "@reduxjs/toolkit";
import {changeAppTheme} from "../actionCreators/appActions";

type ThemeTypes = "light" | "dark"

interface AppReducerState {
  theme: ThemeTypes
}

const initialState: AppReducerState = {
  theme: localStorage.getItem("app-theme") as ThemeTypes ?? "light"
}

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAppTheme, (state, action) => {
      state.theme === "light" ? state.theme = "dark" : state.theme = "light";
      localStorage.setItem("app-theme", state.theme);
    })
})