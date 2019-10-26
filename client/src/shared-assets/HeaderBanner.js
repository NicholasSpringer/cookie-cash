import React from 'react';
import { Column, Row } from 'simple-flexbox';

export default class Banner extends React.Component {
    render() {
        return (
            <Row
                horizontal='start'
                style={{ backgroundColor: "green" }}>
                <h1 style={{ marginLeft: "30px" }}>CookieCash</h1>
            </Row>
        )
    }
}