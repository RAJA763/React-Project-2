import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SAMSUNG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:'50px'}}>
          <Nav className="me-auto nav-item">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobile">Mobile</Nav.Link>
            <Nav.Link href="/laptop">Laptop</Nav.Link>
            <Nav.Link href="/tab">Tab</Nav.Link>
            <Nav.Link href="/watch">Watch</Nav.Link>
            <Nav.Link href="/about">AboutUs</Nav.Link>
            <Nav.Link href="/contact">ContactUs</Nav.Link>
          </Nav>   
          <Button variant="outline-info">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;