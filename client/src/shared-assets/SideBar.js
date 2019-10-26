import React from 'react';
import { Column, Row } from 'simple-flexbox';

export default class Sidebar extends React.Component {
    render() {
        return (
            <Column
                style={{ width: '20%', backgroundColor: "green" }}
                horizontal='center'
                justifyContent="space-evenly"
                alignSelf="stretch">
                <span> Page 1 </span>
                <span> Page 2 </span>
                <span> Page 3 </span>
                <span> Page 4 </span>
                <span> Page 5 </span>
            </Column>
        )
    }
}