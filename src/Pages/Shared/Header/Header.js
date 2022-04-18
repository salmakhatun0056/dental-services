import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className='fs-5 text' collapseOnSelect sticky="top" expand="lg" bg="info" variant="light">
            <Container>
                <CustomLink to="/home">Home</CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/checkout">Checkout</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>

                    </Nav>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/register">Register</CustomLink>
                    {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                        :
                        <CustomLink to="login">
                            Login
                        </CustomLink>}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;