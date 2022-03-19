import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function DetailsModal({ title, body, cancelBtn, confirmBtn, handleConfirm, showModal, setShowModal, defaultEventHandler }) {
    return (
        // <div className='confirmation_box' onKeyPress={(e) => { e.preventDefault(); if (e.key === "Enter") { defaultEventHandler() } }}>
        <Modal show={showModal} centered fullscreen={false} size='lg' onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title><h1>{title}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: "70vh", minHeight: '70vh', overflow: 'auto' }}>
                <div className='d-flex justify-content-center'>
                    {body}
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                {confirmBtn &&
                    <Button variant="primary" size="lg" onClick={() => { handleConfirm(true); setShowModal(false) }}>
                        {confirmBtn ? confirmBtn : "Continue"}
                    </Button>}
                {cancelBtn &&
                    <Button variant="secondary" size="lg" onClick={() => setShowModal(false)}>
                        {cancelBtn ? cancelBtn : "Go Back"}
                    </Button>
                }

            </Modal.Footer> */}
        </Modal>
        // </div>
    );
}
