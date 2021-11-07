import { RootState } from "../store";

export const all = (state: RootState) => state.app;
export const appTheme = (state: RootState) => all(state).theme;

export const modalState = (state: RootState) => all(state).modal;
//  prettier-ignore
export const shouldDisplayModal = (state: RootState) => modalState(state).shouldDisplay;

export const modalContent = (state: RootState) => modalState(state).content;
export const modalLoading = (state: RootState) => modalState(state).loading;
