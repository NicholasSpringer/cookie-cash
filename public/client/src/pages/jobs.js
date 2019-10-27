import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";
import Loader from '../shared-assets/loadingModal'
import LoadingModal from '../shared-assets/loadingModal';


export default class Jobs extends React.Component {

    fetch_url1 = "http://localhost:3000/api/get_available_jobs?parent_id=parent1"
    fetch_url2 = "http://localhost:3000/api/get_pending_jobs?parent_id=parent1"

    constructor(props){
        super(props);
        this.state = {
            pendingJobs: [],
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

                {this.state.availJobs.map((j) => <JobsSlide job = {j}/>)}

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