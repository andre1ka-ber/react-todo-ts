import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import NavigationList from "./components/NavigationList";
import Main from "./views/Main";
import FetchedTodos from "./views/FetchedTodos";
import CompletedTodos from "./views/CompletedTodos";

const App: React.FC = () => {
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
