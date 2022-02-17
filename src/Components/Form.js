import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, Row, Col } from "react-bootstrap";
import '../App.css';
import BookDataService from "../Util/BookDataContext"



const AddBook = ({ id, setBookId }) => {

    // States for the form fields
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");


    // State to handle error messages
    const [message, setMessage] = useState({ error: false, msg: "" });



    // 1) Handling Form Submit    
    const handleSubmit = async (e) => {
        e.preventDefault();  // prevents the page refreshing on submit
        setMessage("");
        if (name === "" || description === "" || contact === "" || email === "" || houseNo === "" || street === "" || district === "" || city === "" || postalCode === "" || country === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newBook = {
            name,
            description,
            contact,
            email,
            houseNo,
            street,
            district,
            city,
            postalCode,
            country,
        };
        console.log(newBook);

        // if id is empty or undefined -> insert
        // if id is defined -> update

        try {
            if (id !== undefined && id !== "") {
                await BookDataService.updateBook(id, newBook);
                setBookId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await BookDataService.addBooks(newBook);
                setMessage({ error: false, msg: "New Record added successfully!" });
            }
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setName("");
        setDescription("");
        setContact("");
        setEmail("");
        setHouseNo("");
        setStreet("");
        setDistrict("");
        setCity("");
        setPostalCode("");
        setCountry("");
    };

    // 2) Update

    // 2.1) Fetch the record from the id
    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await BookDataService.getBook(id);
            console.log("the record is :", docSnap.data());
            setName(docSnap.data().name);
            setDescription(docSnap.data().description);
            setContact(docSnap.data().contact);
            setEmail(docSnap.data().email);
            setHouseNo(docSnap.data().houseNo);
            setStreet(docSnap.data().street);
            setDistrict(docSnap.data().district);
            setCity(docSnap.data().city);
            setPostalCode(docSnap.data().postalCode);
            setCountry(docSnap.data().country);

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    };

    // 2.2) Insert or Update indentifier
    // If id is undefined or empty -> The form acts as 'insert'
    // If id is defined -> The form acts as 'update'
    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);


    return (
        <>
            <div className="p-4 box">

                {/* -------------- Alert Box START -------------- */}
                {message?.msg && (
                    <Alert
                        variant={message?.error ? "danger" : "success"}
                        dismissible
                        onClose={() => setMessage("")}
                    >
                        {message?.msg}
                    </Alert>
                )}
                {/* -------------- Alert Box END -------------- */}

                {/* --------------Form START -------------- */}
                <Form onSubmit={handleSubmit} className='rounded p-4 p-sm-4 border'>
                    <h1 className='font-weight-bold text-center pb-4'>
                        Data Form
                    </h1>
                    <Form.Group className="mb-3" controlId="formBookTitle">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Company Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBookAuthor">
                        <Form.Label>Description</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBookTitle">
                        <Form.Label>Contact Number</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="tel"
                                placeholder="Contact Number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBookAuthor">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Row className="mb-1">
                        <Form.Group as={Col} className="mb-3" controlId="formBookTitle">
                            <Form.Label>House Number</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    placeholder="Number"
                                    value={houseNo}
                                    onChange={(e) => setHouseNo(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formBookAuthor">
                            <Form.Label>Street</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Street"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-1">
                        <Form.Group as={Col} className="mb-3" controlId="formBookAuthor">
                            <Form.Label>City</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formBookTitle">
                            <Form.Label>District</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="District"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBookTitle">
                        <Form.Label>Postal Code</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder="Postal Code"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBookAuthor">
                        <Form.Label>Country</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Add/ Update
                        </Button>
                    </div>
                </Form>
                {/* --------------Form END -------------- */}
            </div>
        </>
    );
};

export default AddBook;