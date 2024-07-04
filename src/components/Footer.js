import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Navbar.Text>
                        &copy; 2024 Rahul Sureshrao Chavan. All rights reserved.
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;
