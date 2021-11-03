import { RootState } from "../store";

export const all = (state: RootState) => state.app;
export const appTheme = (state: RootState) => all(state).theme;

export const shouldDisplayModal = (state: RootState) => all(state).modal.shouldDisplay;
export const modalContent = (state: RootState) => all(state).modal.content;
export const modalLoading = (state: RootState) => all(state).modal.loading;
