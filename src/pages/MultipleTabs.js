import React from 'react';
import { Tabs, Tab, Container, Row, Col, Card } from 'react-bootstrap';

const MultipleTabs = () => {
    const categories = {
        Animals: [
            'animal1.webp',
            'animal2.jpg',
            'animal3.jpg',
            'animal1.webp',
            'animal2.jpg',
            'animal3.jpg',
        ],
        Nature: [
            'nature1.jpg',
            'nature2.jpg',
            'nature3.jpg',
            'nature1.jpg',
            'nature2.jpg',
            'nature3.jpg'
        ],
        Architecture: [
            'architechture1.webp',
            'architechture2.jpg',
            'architechture3.jpg',
            'architechture1.webp',
            'architechture2.jpg',
            'architechture3.jpg'
        ]
    };

    return (
        <Container className="mt-4">
        <Tabs defaultActiveKey="Animals" id="image-tabs">
            {Object.keys(categories).map(category => (
                <Tab eventKey={category} title={category} key={category}>
                    <Row className="mt-3">
                        {categories[category].map((image, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card className="shadow-sm" style={{ transition: 'transform 0.3s' }}>
                                    <Card.Img
                                        variant="top"
                                        // src={`images/${image}`}
                                        src={`${process.env.PUBLIC_URL}/images/${image}`}
                                        alt={image}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        onMouseEnter={(e) => (e.currentTarget.parentNode.style.transform = 'scale(1.05)')}
                                        onMouseLeave={(e) => (e.currentTarget.parentNode.style.transform = 'scale(1)')}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Tab>
            ))}
        </Tabs>
    </Container>
    );
};

export default MultipleTabs;
