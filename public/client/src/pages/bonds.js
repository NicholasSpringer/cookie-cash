import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";


export default class Bonds extends React.Component {

    bonds = [{
        time: 12,
        yield: 64,
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
    },
    {
        time: 135,
        yield: 5343,
        desc: "this is a thing",
    },
    {
        time: 1234,
        yield: 876,
        desc: "this is another bond",
    },
    {
        time: 12,
        yield: 23,
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv",
    }]

    render() {
        return (
            <Column
                class="jobColumn"
                horizontal="stretch"
                vertical="start">
                <h1 class="pageBanner"> Bonds </h1>

                <Row>
                    <Column
                        style={{ margin: 10, backgroundColor: "grey", flexGrow: 1, paddingBottom: 10 }}
                        horizontal="center">
                        <h1>Long Term</h1>
                        <span>Description of long term thingy</span>
                    </Column>
                    <Column
                        style={{ margin: 10, backgroundColor: "grey", flexGrow: 1, paddingBottom: 10 }}
                        horizontal="center">
                        <h1>Medium Term</h1>
                        <span>Description of meduim term thingy</span>
                    </Column>
                    <Column
                        style={{ margin: 10, backgroundColor: "grey", flexGrow: 1, paddingBottom: 10 }}
                        horizontal="center">
                        <h1>Short Term</h1>
                        <span>Description of short term thingy</span>
                    </Column>
                </Row>

                {this.bonds.map((b) => <BondSlide bond={b} />)}

                <button class="myButton">Create New Bond</button>

            </Column>
        )
    }
}

class BondSlide extends React.Component {
    render() {
        return (
            <Row
                vertical="center"
                class="jobSlide">
                <Column>
                    <span> Yield: {this.props.bond.yield} </span>
                    <Row style={{ marginBottom: 10 }}>
                        <span> Available in: </span>
                        <span style={{ backgroundColor: "gold", marginLeft: 15 }}> {this.props.bond.time} days</span>
                    </Row>
                    <span> {this.props.desc} </span>
                </Column>
            </Row>
        )
    }
}