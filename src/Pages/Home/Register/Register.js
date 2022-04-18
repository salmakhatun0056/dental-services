import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (event) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
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

                <p>Already Have an account ? <Link to='/login' className='text-info pe-auto text-decoration-none'>Please login </Link></p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    {error && <p className='text-danger pe-auto'>{error.message}</p>}
                    {loading && <p className='text-danger pe-auto'>loading...</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;