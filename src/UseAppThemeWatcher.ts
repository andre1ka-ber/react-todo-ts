import { useEffect } from "react";
import { useSelector } from "react-redux";
import { appTheme } from "./redux/selectors/appSelectors";

const useAppThemeWatcher = (): void => {
  const theme = useSelector(appTheme);

  useEffect(() => {
    const rootHtmlElement = document.querySelector("html") as HTMLElement;
    if (theme === "dark") {
      rootHtmlElement.classList.add("dark");
      return;
    }
    rootHtmlElement.classList.remove("dark");
  }, [theme]);
};

export default useAppThemeWatcher;
