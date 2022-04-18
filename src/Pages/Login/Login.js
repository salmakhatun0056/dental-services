import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadSpinner from '../Home/LoadSpinner/LoadSpinner';
import SocialLogin from '../Home/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        console.log(password, email)
        event.preventDefault()
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <LoadSpinner></LoadSpinner>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }
    return (
        <div>
            <h1 className='text-info text-center mt-4'>Please Login</h1>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>New to Dental Service ? <Link to='/register' className='text-info pe-auto text-decoration-none'>Please Register </Link></p>

                <p>Forget password? <button onClick={resetPassword} className='text-info btn btn-link pe-auto text-decoration-none'>Reset password </button></p>
                {error && <p className='text-danger pe-auto'>{error.message}</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;