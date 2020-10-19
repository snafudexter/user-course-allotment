import React from 'react';
import { Button, Modal } from 'react-bootstrap'

const DeleteModal = (props) => {

    const { title, show, handleClose, handleAccept } = props;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>{`Delete ${title}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
          </Button>
                <Button variant="danger" onClick={handleAccept}>
                    Delete
          </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;