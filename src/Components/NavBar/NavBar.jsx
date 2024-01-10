import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';  
import Logo from '../NavBar/logo';
import '../NavBar.css'; // Asegúrate de importar tu archivo CSS si tienes estilos adicionales.

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Logo />
          </NavLink>
          <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
          <NavLink to="/category/barras" className="nav-link">
          Barras
            </NavLink>
            <NavLink to="/category/pesas" className="nav-link">
          Pesas
            </NavLink>
            <NavLink to="/category/suplementos" className="nav-link">
          Suplementos
            </NavLink>
            <NavLink to="/category/accesorios" className="nav-link">
          Accesorios
            </NavLink>
            </Nav>
          <NavLink to="/cart" className="navbar-cart">
            <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;