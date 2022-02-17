import React from 'react'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Form, Col, Row } from 'react-bootstrap'

export default function DataForm() {
    return (

        <div className='background-overlay d-flex justify-content-center align-items-center'>
            <Form className='rounded p-4 p-sm-4'>
                <h1 className='font-weight-bold text-center pb-4'>
                    Data Form
                </h1>

                <Form.Group className="mb-3" controlId="formCompanyName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyMobile">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Contact Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompanyAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter Address" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCompanyCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="City" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCompanyState">
                        <Form.Label>State/Avenue</Form.Label>
                        <Form.Control placeholder="State/Avenue" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="number" placeholder="Enter Postal Code" />
                </Form.Group>

                <Button type="submit" className='btn-lg btn-dark btn-span mt-4'>
                    Add
                </Button>
            </Form>
        </div>

        // Next Create Nested Menus
        // Refer
        // 1) https://stackoverflow.com/questions/63297109/nested-sidebar-menu-with-material-ui-and-reactjs
        // 2) https://www.google.com/search?q=nested+menu+item+react&sxsrf=APq-WBtVG8RzRto8qrG7Ai51P4JK7CwKIw%3A1644691234538&ei=Iv8HYrG1IM2cseMPwq6V2Aw&ved=0ahUKEwixzrKm6Pr1AhVNTmwGHUJXBcsQ4dUDCA4&uact=5&oq=nested+menu+item+react&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgUIABCABEoECEEYAEoECEYYAFCKAVj5CWD5DmgBcAF4AIABZogB_gOSAQM1LjGYAQCgAQHIAQjAAQE&sclient=gws-wiz
        // 3) https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap
        // 4) https://react-bootstrap.github.io/components/dropdowns/



    );
}