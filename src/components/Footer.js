import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    const getYear = new Date()
    let year = getYear.getFullYear()
    console.log(year,"year");
    
    return (
        <div className='mt-5'>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Navbar.Text>
                        &copy; {year} Rahul Sureshrao Chavan. All rights reserved.
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;
