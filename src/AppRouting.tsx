import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./views/Main";
import CompletedTodos from "./views/CompletedTodos";
import FetchedTodos from "./views/FetchedTodos";

const AppRouting: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/completed" component={CompletedTodos} />
    <Route path="/fetched" component={FetchedTodos} />
  </Switch>
);

export default AppRouting;
