import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BiErrorCircle } from 'react-icons/bi'; // Example: Using BiErrorCircle icon from react-icons

const PageNotFound = () => {
  return (
    <Container className="mt-4 text-center">
      <Row>
        <Col>
          <Image
            src={`${process.env.PUBLIC_URL}/images/error_images.png`} // Replace with your error image path
            fluid
            className="mb-4"
            alt="Error Image"
          />
          <h3><BiErrorCircle className="text-danger" size={38} style={{marginBottom:"4px"}} /> PAGE NOT FOUND ..!</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
