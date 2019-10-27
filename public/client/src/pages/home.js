import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Header from "../shared-assets/HeaderBanner"
import Menu from "../shared-assets/Menu"
import Jobs from "./jobs"
import Shop from "./shop"
import History from "./history"
import Bonds from "./bonds"
import Transfer from "./transfer"
import {
  Switch,
  Route
} from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Column
        horizontal = "stretch"
        class="grandparentPanel"
        style = {{ height: '100vh'}}>
        <Header />
        <Menu />
          <Switch>
            <Route path="/jobs"> <Jobs /> </Route>
            <Route path="/shop"> <Shop /> </Route>
            <Route path="/transfer"> <Transfer /> </Route>
            <Route path="/bonds"> <Bonds /> </Route>
            <Route path="/history"> <History /> </Route>
            <Route path="/"> <Jobs /> </Route>
          </Switch>
      </Column>
    )
  }
}