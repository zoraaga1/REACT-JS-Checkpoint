import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">ZoraaShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#support">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h2 className="text-center mb-4 text-secondary">Explore Our Collection</h2>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://placekitten.com/300/200" />
              <Card.Body>
                <Card.Title>Cat Haven</Card.Title>
                <Card.Text>Discover peace with this adorable feline friend.</Card.Text>
                <Button variant="outline-primary" size="sm">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://placekitten.com/301/200" />
              <Card.Body>
                <Card.Title>Whisker World</Card.Title>
                <Card.Text>Adventure awaits with every soft purr and meow.</Card.Text>
                <Button variant="outline-success" size="sm">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://placekitten.com/302/200" />
              <Card.Body>
                <Card.Title>Fur Paradise</Card.Title>
                <Card.Text>Perfect choice for cozy vibes and cuteness overload.</Card.Text>
                <Button variant="outline-warning" size="sm">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
