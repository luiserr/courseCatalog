import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {

  return (
    <Navbar className="navbar-custom" variant="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <div className="navbar-logo">
            📚
          </div>
          <div>
            <span className="brand-text-pink">Saber</span>
            <span className="brand-text-dark">MEX</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Espacio para centrar los elementos de la derecha */}
          </Nav>
          
          <Nav className="d-flex align-items-center">
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="nav-link-custom"
            >
              Contacto
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/courses" 
              className="nav-link-custom"
            >
              Oferta Académica
            </Nav.Link>
            
            <Button className="navbar-btn-custom">
              Iniciar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;