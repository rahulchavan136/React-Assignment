import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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
                    <NavDropdown title="Assignment Lists" id="basic-nav-dropdown">
                        <NavDropdown.Item  as={NavLink} to="/login"> Login and Signup </NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/registration">Registration form</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/stepper">Stepper</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/">Carousels</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/accordion">Accordian</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/pagination">Pagination</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/multipletabs">Multiple Tabs</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/todo">ToDo List</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/">Responsive Navbar</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/ecommerce">E-commerce Product Filter</NavDropdown.Item>
                        <NavDropdown.Item  as={NavLink} to="/infiniteScroll">Infinite Scroll Gallery with Lazy Loading</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
