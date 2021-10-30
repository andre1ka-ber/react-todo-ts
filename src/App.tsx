import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import NavigationList from "./components/Navigation/NavigationList";
import Main from "./views/Main";
import FetchedTodos from "./views/FetchedTodos";
import CompletedTodos from "./views/CompletedTodos";
import { appTheme, shouldDisplayModal } from "./redux/selectors/appSelectors";

import "react-toastify/dist/ReactToastify.css";
import CustomModal from "./components/CustomModal";

const App: React.FC = () => {
  const theme = useSelector(appTheme);
  const displayModal = useSelector(shouldDisplayModal);

  useEffect(() => {
    const rootHtmlElement = document.querySelector("html") as HTMLElement;
    if (theme === "dark") {
      rootHtmlElement.classList.add("dark");
    } else {
      rootHtmlElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="main">
        <NavigationList />
        <div className="todo-wrapper">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/completed" component={CompletedTodos} />
            <Route path="/fetched" component={FetchedTodos} />
          </Switch>
        </div>
        <ToastContainer theme={theme} progressClassName="bg-yellow-500" />
      </div>
      {displayModal
        ? <CustomModal />
        : null}
    </>
  );
};

export default App;
