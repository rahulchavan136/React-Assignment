import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect className="custom-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="custom-brand">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                    <Nav className="me-auto custom-nav">
                        <Nav.Link as={NavLink} className="custom-link" to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="custom-link" to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} className="custom-link" to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} className="custom-link" to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
