import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')

    const handleRegister = (event) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        console.log(name, password, email)
        event.preventDefault()
    }
    return (
        <div>
            <h1 className='text-info text-center mt-5'>Please Registration</h1>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;