import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Sidebar from "../shared-assets/SideBar"
import Header from "../shared-assets/HeaderBanner"

export default class Home extends React.Component {
  render() {
    return (
      <Column
        style={{ height: '100vh', backgroundColor: "white" }}>
        <Header/>
        <Row vertical='center' flexGrow={1}>
        <Sidebar/>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Column>
    )
  }
}