import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert, NavLink } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginSuccess } from '../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with actual API call
    const mockUser = { email };
    if (email === 'test@test.com' && password === 'password') {
      dispatch(loginSuccess(mockUser));
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/about'); // Redirect to About page
      }, 1000); // 1 seconds delay before redirection
    } else {
      dispatch(loginFailure('Invalid email or password'));
      setError('Invalid email or password');
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="bg-light p-4 rounded">
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="SCB Logo" style={{ height: "120px", width: "200px" }} />
              <h2 className="mt-2 mb-2 fw-bolder">Login</h2>
            </div>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="password" className="mt-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" className="text-center" style={{ width: "100%" }}>
                Login
              </Button>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="m-0 text-secondary">Don't Have An Account?&nbsp;</p>
                <NavLink className="text-primary pointer ml-2" onClick={() => navigate('/signup')}>
                  <strong>SignUp</strong>
                </NavLink>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
