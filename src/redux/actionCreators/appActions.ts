import { createAction } from "@reduxjs/toolkit";

export const changeAppTheme = createAction("CHANGE_APP_THEME");

export const displayModal = createAction("DISPLAY_MODAL");
export const hideModal = createAction("HIDE_MODAL");
export const enableModalLoading = createAction("ENABLE_MODAL_LOADING");
export const disableModalLoading = createAction("DISABLE_MODAL_LOADING");
export const setModalContent = createAction(
  "SET_MODAL_CONTENT",
  (content: any) => ({
    payload: content,
  }),
);
