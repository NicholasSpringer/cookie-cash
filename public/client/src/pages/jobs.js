import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";
import Loader from '../shared-assets/loadingModal'
import LoadingModal from '../shared-assets/loadingModal';


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

    constructor(props){
        super(props);
        this.state = {
            availJobs: [],
            isLoading: false
        }
    }

    render() {
        return (
            <Column
                class="jobColumn"
                horizontal="stretch"
                vertical="start">
                <h1 class="pageBanner"> Jobs </h1>

                {this.jobs.map((j) => <JobsSlide job = {j}/>)}

                <LoadingModal isOpen = {this.state.isLoading}/>

            </Column>
        )
    }
}

class JobsSlide extends React.Component {
    render() {
        return (
            <Row
                class="jobSlide"
                vertical="center">
                <Column>
                        <span class="jobName"> {this.props.job.name} </span>
                    <Row>
                        <span class="jobDesc">Status: <span class="jobStatus"> {this.props.job.status} </span></span>
                    </Row>
                        <span class="jobDesc"> {this.props.job.desc} </span>
                    <Row>
                        <button class="myButton">Complete</button>
                    </Row>
                </Column>
            </Row>
        )
    }
}