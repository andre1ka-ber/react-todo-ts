import React, {useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import NavigationList from "./components/Navigation/NavigationList";
import Main from "./views/Main";
import FetchedTodos from "./views/FetchedTodos";
import CompletedTodos from "./views/CompletedTodos";
import {useSelector} from "react-redux";
import {appTheme} from "./redux/selectors/appSelectors";

const App: React.FC = () => {
    const theme = useSelector(appTheme)

    useEffect(() => {
      const rootHtmlElement = document.querySelector("html") as HTMLElement;
      if (theme === "light") {
        rootHtmlElement.classList.add("dark")
      } else {
        rootHtmlElement.classList.remove("dark")
      }
    }, [theme])

    return (
      <div className={"main"}>
        <NavigationList />
        <div className={"todo-wrapper"}>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route path={"/completed"} component={CompletedTodos} />
            <Route path={"/fetched"} component={FetchedTodos} />
          </Switch>
        </div>
      </div>
    );
}

export default App;
