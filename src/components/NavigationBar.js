import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const NavigationBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect shadow='lg'>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-primary">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="fw-bold">Home</Nav.Link>
            {loggedIn && (
              <>
                <Nav.Link as={NavLink} to="/about" className="fw-bold">About Me</Nav.Link>
                <NavDropdown title="React Assignment Lists" id="basic-nav-dropdown" className="fw-bold">
                  <NavDropdown.Item as={NavLink} to="/registration">Registration form</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/stepper">Stepper</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/">Carousels</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/accordion">Accordion</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/pagination">Pagination</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/multipletabs">Multiple Tabs</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/todo">ToDo List</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/">Responsive Navbar</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/ecommerce">E-commerce Product Filter</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/infiniteScroll">Infinite Scroll Gallery</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          {loggedIn ? (
            <Nav.Link as={NavLink} to="#" className="fw-bold" onClick={handleLogout}>
              <span style={{ fontSize: "13px", color: "gray" }}>Welcome, {user?.email} &nbsp;&nbsp;&nbsp;</span> <FaUserAlt style={{ marginBottom: "4px" }} /> Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/login" className="fw-bold">
              <FaUserAlt style={{ marginBottom: "4px" }} /> Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
