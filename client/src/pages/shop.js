import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter, Route, Link } from "react-router-dom";


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
                style={{ height: "100%", width: "100%" }}
                horizontal="stretch"
                vertical="start">
                <h3 style={{ textAlign: "center" }}> Jobs page </h3>
                
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
                style={{
                    borderBottom: "5px",
                    borderColor: "grey",
                    margin: "10px",
                    backgroundColor: "grey",
                }}>
                <img
                    src={require('../shared-assets/DefualtJobImage.png')}
                    style={{ width: "60px", height: "60px", padding: 20 }} />
                <Column>
                    <h3> {this.props.item.name} </h3>
                    <Row style={{ marginBottom: 10 }}>
                        <span> Price </span>
                        <span style={{ backgroundColor: "gold", marginLeft: 15 }}> {this.props.item.price} </span>
                    </Row>
                    <span> {this.props.item.desc} </span>
                    <Row horizontal="center">
                        <button style={{ padding: 15, margin: 10 }}>
                            Complete
                            </button>
                    </Row>
                </Column>
            </Row>
        )
    }
}