import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";

export default class History extends React.Component {
    transactions = [{
        type: "Bond",
        timestamp: "Oct 26 11:16",
        desc: "Bond Purchased: Short Term"
    },
    {
        type: "Purchase",
        timestamp: "Oct 26 11:16",
        desc: "Brownie: 10 cookies"
    },
    {
        type: "Transfer",
        timestamp: "Oct 30 11:16",
        desc: "Transferred 5 cookies to Sophia"
    },
    {
        type: "Purchase",
        timestamp: "Oct 26 11:16",
        desc: "Pizza: 8 cookies"
    }]

    render() {
        return (
            <Column
                class="jobColumn"
                horizontal="stretch"
                vertical="start">
                <h1 class="pageBanner">  Past Transactions </h1>
                {this.transactions.map((i) => <TransactionSlide transaction={i} />)}
            </Column>
        )
    }

}

class TransactionSlide extends React.Component {
    render() {
        var imageSrc;
        if (this.props.transaction.type == "Bond") {
            imageSrc = require('../shared-assets/BondImage.svg')
        } else if (this.props.transaction.type == "Purchase") {
            imageSrc = require('../shared-assets/PurchaseImage.svg')
        } else if (this.props.transaction.type == "Transfer") {
            imageSrc = require('../shared-assets/TransferImage.svg')
        }
        return (
            <Row
                vertical="center"
                class="jobSlide">
                <img
                    src={imageSrc}
                    style={{ width: "60px", height: "60px", padding: 20 }} />
                <Column>
                    <h3> {this.props.transaction.type} </h3>
                    <Row style={{ marginBottom: 10 }}>
                        <span> Date </span>
                        <span style={{ backgroundColor: "gold", marginLeft: 15 }}>
                            {this.props.transaction.timestamp}
                        </span>
                    </Row>
                    <span> {this.props.transaction.desc} </span>
                </Column>
            </Row>
        )
    }
}