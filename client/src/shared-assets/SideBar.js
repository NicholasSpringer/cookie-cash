import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Sidebar extends React.Component {
    render() {
        return (
            <Column
                style={{ width: '20%', backgroundColor: "green" }}
                horizontal='center'
                justifyContent="space-evenly"
                alignSelf="stretch">
                <Link to="/jobs">Jobs</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/bonds">Bonds</Link>
                <Link to="/history">History</Link>
            </Column>
        )
    }
}