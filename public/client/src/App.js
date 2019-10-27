import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/home"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}