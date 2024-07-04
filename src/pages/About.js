import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">
              Rahul Sureshrao Chavan
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-center">React JS Developer</Card.Title>
              <Card.Text className="text-center">
                <a href="https://rahul-chavan-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                  https://rahul-chavan-portfolio.vercel.app/
                </a>
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <strong>Email: </strong> rahulc.dev13@gmail.com
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Phone: </strong> +91-8806440725
                </ListGroupItem>
                <ListGroupItem>
                  <strong>LinkedIn: </strong> 
                  <a href="https://www.linkedin.com/in/rahul194" target="_blank" rel="noopener noreferrer">
                    www.linkedin.com/in/rahul194
                  </a>
                </ListGroupItem>
              </ListGroup>
              <Card.Text className="mt-3">
                <strong>Certifications: </strong>
                <ul>
                  <li>Udemy: React - The Complete Guide-Hooks, React Router, Redux</li>
                  <li>Namaste React Course By NamasteDev.com</li>
                  <li>Web Development ( NEC Certified )</li>
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Education: </strong>
                <ul>
                  <li>CSMSS College of Polytechnic Aurangabad</li>
                  <li>10th SSC 05/2011 Shree Sainath School Waluj, Aurangabad</li>
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Technical Skills: </strong>
                <ul>
                  <li>ReactJS, JavaScript, Redux, Redux Toolkit, HTML/CSS</li>
                  <li>Micro-Frontend Service, Single SPA, Material UI, Bootstrap, TailwindCss</li>
                  <li>Jest Testing, Mysql, Github, Linux, npm, yarn, Webpack</li>
                  <li>Azure DevTools, Vercel, AWS Amplify, S3, EC2 Services, Agile Methodology</li>
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Experience: </strong>
                <ul>
                <li>
                    <strong>CAPGEMINI | BANGALORE, KARNATAKA</strong>
                    <p>MAY 2024 - CURRENT</p>
                  </li>
                  <li>
                    <strong>SIMPLIFY HEALTHCARE | PUNE, MAHARASHTRA</strong>
                    <p>Sep 2023 - March 2024</p>
                  </li>
                  <li>
                    <strong>SKYLEX TECHNOLOGY | PUNE, MAHARASHTRA</strong>
                    <p>Aug 2019 - Aug 2023</p>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
