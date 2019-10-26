import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Sidebar from "../shared-assets/SideBar"
import Header from "../shared-assets/HeaderBanner"
import Jobs from "./jobs"
import Shop from "./shop"
import History from "./history"
import Bonds from "./bonds"
import Transfer from "./transfer"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Column
        style={{ height: '100vh', backgroundColor: "white" }}>
        <Header />
        <Row vertical='center' flexGrow={1}>
          <Sidebar />
          <Switch>
            <Route path="/jobs"> <Jobs /> </Route>
            <Route path="/shop"> <Shop /> </Route>
            <Route path="/transfer"> <Transfer /> </Route>
            <Route path="/bonds"> <Bonds /> </Route>
            <Route path="/history"> <History /> </Route>
          </Switch>
        </Row>
      </Column>
    )
  }
}