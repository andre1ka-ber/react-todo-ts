import {RootState} from "../store";

export const all = (state: RootState) => state.app;
export const appTheme = (state: RootState) => all(state).theme;