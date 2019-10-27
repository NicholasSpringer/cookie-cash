import React from 'react';
import { Column, Row } from 'simple-flexbox';

export default class Banner extends React.Component {
    render() {
        return (
            <Row
                horizontal='start'
                id='banner'>
                    CookieCash
            </Row>
        )
    }
}