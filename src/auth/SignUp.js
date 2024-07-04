import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, NavLink } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupFailure, signupSuccess } from '../redux/authSlice';
 
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual API call
    const mockUser = { username, email };
    if (username && email && password) {
      dispatch(signupSuccess(mockUser));
      navigate('/login');
    } else {
      dispatch(signupFailure('All fields are required'));
      setError('All fields are required');
    }
  };

  return (
    <Container className="mt-3 mb-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="bg-light p-4 rounded">
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="SCB Logo" style={{ height: "120px", width: "200px" }} />
              <h2 className="mt-2 mb-2 fw-bolder">SignUp</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="fw-bold">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="password" className="mt-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              {error && <p className="text-danger">{error}</p>}
              <Button variant="success" type="submit" style={{ width: "100%" }}>
                Sign Up
              </Button>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="m-0 text-secondary">Already have an account?&nbsp;</p>
                <NavLink className="text-primary pointer ml-2" onClick={() => navigate('/')}>
                <strong>Login</strong>
                </NavLink>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
