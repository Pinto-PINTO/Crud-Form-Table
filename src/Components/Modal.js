import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './Form';

function ModalTag(props) {

    // State to grab the book id
    const [bookId, setBookId] = useState("");

    const getBookIdHandler = (id) => {
        console.log("The id of doc to be edited: ", id);
        setBookId(id);
    }

    return (

        // --------------------- Modal START ---------------------
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {/* ----------------- Edit Form START ----------------- */}
                <AddBook id={bookId} setBookId={setBookId} />
                {/* ----------------- Edit Form end ----------------- */}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        // --------------------- Modal END ---------------------
    );
}

export default ModalTag