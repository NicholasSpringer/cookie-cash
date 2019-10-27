import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Modal from 'react-modal';

export default class LoadingModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="Minimal Modal Example">
                <Column horizontal="center" vertical="center">
                    <img
                        src={require('../shared-assets/icon.png')}
                        style={{ width: "60px", height: "60px", padding: 20 }} />
                </Column>
            </Modal>
        )
    }
}