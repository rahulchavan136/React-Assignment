import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProductFilter = ({ categories, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [rating, setRating] = useState(0);

    const handleFilter = () => {
        onFilter({
            category: selectedCategory,
            priceRange,
            rating,
        });
    };

    return (
        <Form>
            <Form.Group as={Row} controlId="category">
                <Form.Label column sm={2}><strong>Category</strong></Form.Label>
                <Col sm={10}>
                    <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">All</option>
                        {categories.map((category, idx) => (
                            <option key={idx} value={category}>{category}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="priceRange">
                <Form.Label column sm={2}><strong>Price Range</strong></Form.Label>
                <Col sm={10}>
                    <Form.Range
                        type="range"
                        value={priceRange[1]}
                        min="0"
                        max="1000"
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    />
                    <Form.Text><strong>Up to ${priceRange[1]}</strong></Form.Text>
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId="rating">
                <Form.Label column sm={2}><strong>Rating</strong></Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="number"
                        value={rating}
                        min="0"
                        max="5"
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                </Col>
            </Form.Group>
            <br />
            <Button variant="primary" onClick={handleFilter}>
                Apply Filter
            </Button>
        </Form>
    );
};

export default ProductFilter;
