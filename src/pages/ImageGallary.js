// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Image } from 'react-bootstrap';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 10;

    useEffect(() => {
        fetchImages();
     }, []);

    const fetchImages = async () => {
        setLoading(true);
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${perPage}`);
        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data]);
        setLoading(false);
        setPage((prevPage) => prevPage + 1);
    };

    // Infinite scroll logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            fetchImages();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Container className="mt-5">
            <h1 className="my-4 text-center">Infinite Scroll Gallery with Lazy Loading</h1>
            <Row xs={1} sm={2} md={3} lg={4}>
                {images.map((image) => (
                    <Col key={image.id} className="mb-4">
                        <Image src={image.download_url} alt={image.author} fluid />
                    </Col>
                ))}
            </Row>
            {loading && (
                <div className="text-center mt-3">
                    <Spinner animation="border" />
                </div>
            )}
        </Container>
    );
};

export default ImageGallery;
