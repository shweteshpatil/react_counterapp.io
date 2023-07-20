import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
            

    
    <NavLink className="nav-link" to="/home">Home</NavLink>
    <NavLink className="nav-link" to="/form">Form</NavLink>
    <NavLink className="nav-link" to="/services">Services</NavLink>
    <NavLink className="nav-link" to="/movies">Movies</NavLink>
    <NavLink className="nav-link" to="/parent">Parent</NavLink>
    <NavLink className="nav-link" to="/countdown">Countdown</NavLink>
  
    
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;








    
