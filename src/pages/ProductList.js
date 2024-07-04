import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './ProductList.css'; // Import custom CSS for styling

const ProductList = ({ products }) => {
    return (
        <Row className='mt-4'>
            {products.map((product) => (
                <Col key={product.id} sm={4} className="mb-3">
                    <Card className="product-card">
                        <div className="image-container">
                            <Card.Img variant="top" src={product.image} className="product-image" />
                        </div>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className="product-description">
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                <strong>${product.price}</strong>
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating: {product.rating.rate}</strong>
                            </Card.Text>
                            <Button variant="primary">Buy</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
