import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";


export default class Jobs extends React.Component {

    jobs = [{
        name: "this is something",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv"
    },
    {
        name: "Do your goddamn homework",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv"
    },
    {
        name: "Meh this is anohter work",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv"
    },
    {
        name: "this is hilarious",
        status: "Available",
        desc: "Blah Blah Blah Blahv Blah Blah Blah Blahv Blah Blah Blah Blahv"
    }]

    render() {
        return (
            <Column
                style={{ height: "100%", width: "100%" }}
                horizontal="stretch"
                vertical="start">
                <h3 style={{ textAlign: "center" }}> Jobs page </h3>
                
                {this.jobs.map((j) => <JobsSlide job = {j}/>)}
                
            </Column>
        )
    }
}

class JobsSlide extends React.Component {
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
                    <h3> {this.props.job.name} </h3>
                    <Row style={{ marginBottom: 10 }}>
                        <span> Status </span>
                        <span style={{ backgroundColor: "green", marginLeft: 15 }}> {this.props.job.status} </span>
                    </Row>
                    <span> {this.props.job.desc} </span>
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