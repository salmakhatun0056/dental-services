import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
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
                    <CustomLink to='/login'>Login</CustomLink>
                    <CustomLink to="/register">Register</CustomLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;