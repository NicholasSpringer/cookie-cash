import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Sidebar extends React.Component {
    render() {
        return (
            <Column flexGrow={1} horizontal="center">
                <h3> Jobs page </h3>
                <span> eventually stuff will find their way here </span>
            </Column>
        )
    }
}