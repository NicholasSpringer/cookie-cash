import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Transfer extends React.Component {
  render() {
    return (
      <Row flexGrow={1} horizontal="center">
        <TransferForm />
      </Row>
    )
  }
}



class TransferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Send CookieCash To:
          <input
            name="Receiver"
            type="select"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Amount:
          <input
            name="Amount"
            type="number"
            value={0}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}