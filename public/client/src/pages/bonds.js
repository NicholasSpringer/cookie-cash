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
                style={{ height: "100%", width: "100%", margin: 20 }}
                horizontal="stretch"
                vertical="start">
                <h3 style={{ textAlign: "center" }}> Bonds page </h3>

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
                        <h1>Meduim Term</h1>
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

                <button style={{ padding: 10 }}>Create New Bond</button>

            </Column>
        )
    }
}

class BondSlide extends React.Component {
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