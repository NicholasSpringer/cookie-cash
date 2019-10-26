import React from 'react';
import { Column, Row } from 'simple-flexbox';

export default class Home extends React.Component {
  render() {
    return (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>CookieCash</h1>
        </Row>
        <Row vertical='center'>
          <Column style={{ width: '20%' }} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Column>
    )
  }
}