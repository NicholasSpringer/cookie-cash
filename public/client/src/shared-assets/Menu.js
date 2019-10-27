import React from 'react';
import { Row } from 'simple-flexbox';
import { Link } from "react-router-dom";


export default class Sidebar extends React.Component {
    render() {
        return (
            <Row
                id="navBar">
                <Link to="/jobs" class="navButton">Jobs</Link>
                <Link to="/shop" class="navButton">Shop</Link>
                <Link to="/bonds" class="navButton">Bonds</Link>
                <Link to="/history" class="navButton">History</Link>
                <Link to="/transfer" class="navButton">Transfer</Link>
            </Row>
        )
    }
}