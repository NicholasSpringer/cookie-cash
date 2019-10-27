import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Modal from 'react-modal';

export default class LoadingModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="Minimal Modal Example">
                <Column 
                horizontal="center" 
                vertical="center" 
                alignSelf="stretch">
                    <img
                        src={require('../shared-assets/icon.png')}
                        style={{ width: "200px", height: "200px", padding: 20, marginTop: 130 }} />
                        <span>One moment! We're getting there...</span>
                </Column>
            </Modal>
        )
    }
}