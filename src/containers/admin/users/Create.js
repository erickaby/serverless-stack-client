import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap'

export default function AdminUsersCreate() {

    async function submit() {
        const user = {
            // email: 
        }
    }

    return (
        <>
            <p>User Create</p>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Temp Password
                    </Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}