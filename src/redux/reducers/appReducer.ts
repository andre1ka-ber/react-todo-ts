import {createReducer} from "@reduxjs/toolkit";
import {
  changeAppTheme, disableModalLoading,
  displayModal,
  enableModalLoading,
  hideModal,
  setModalContent
} from "../actionCreators/appActions";

type ThemeTypes = "light" | "dark"

interface AppReducerState {
  theme: ThemeTypes;
  modal: {
    shouldDisplay: boolean;
    content: any;
    loading: boolean;
  }
}

const initialState: AppReducerState = {
  theme: localStorage.getItem("app-theme") as ThemeTypes ?? "light",
  modal: {
    shouldDisplay: false,
    content: "",
    loading: false
  }
}

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAppTheme, (state) => {
      state.theme === "light" ? state.theme = "dark" : state.theme = "light";
      localStorage.setItem("app-theme", state.theme);
    })
    .addCase(displayModal, (state) => {
      state.modal.shouldDisplay = true;
    })
    .addCase(hideModal, (state) => {
      state.modal.shouldDisplay = false;
    })
    .addCase(setModalContent, (state, action) => {
      state.modal.content = action.payload;
    })
    .addCase(enableModalLoading, (state) => {
      state.modal.loading = true;
    })
    .addCase(disableModalLoading, (state) => {
      state.modal.loading = false;
    })
})