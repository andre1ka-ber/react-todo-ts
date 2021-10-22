import React from 'react';
import './App.css';
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import NavigationList from "./components/NavigationList";
import Main from "./views/Main";
import CompletedTodos from "./views/CompletedTodos";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
      <div className={"main"}>
        <NavigationList />
        <div className={"todo-wrapper"}>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route path={"/completed"} component={CompletedTodos} />
          </Switch>
        </div>
      </div>
    );
}

export default App;
