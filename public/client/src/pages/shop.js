import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";

export default class Shop extends React.Component {

    items = [{
        name: "this is something",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
        price: 23432
    },
    {
        name: "Do your goddamn homework",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
        price: 134
    },
    {
        name: "Meh this is anohter work",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
        price: 856
    },
    {
        name: "this is hilarious",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
        price: 564
    }]

    render() {
        return (
            <Column
                class="jobColumn"
                horizontal="stretch"
                vertical="start">
                <h1 class="pageBanner"> Shop </h1>
                {this.items.map((i) => <ItemSlide item = {i}/>)}
            </Column>
        )
    }
}

class ItemSlide extends React.Component {
    render() {
        return (
            <Row
                vertical="center"
                class="jobSlide">
                <Column>
                        <span class="jobName"> {this.props.item.name} </span>
                    <Row>
                        <span class="jobDesc">Price: {this.props.item.price} cookies</span>
                    </Row>
                        <span class="jobDesc"> {this.props.item.desc} </span>
                    <Row>
                        <button class="myButton">Complete</button>
                    </Row>
                </Column>
            </Row>
        )
    }
}