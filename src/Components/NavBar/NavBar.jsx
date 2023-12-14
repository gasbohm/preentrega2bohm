import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';  
import Logo from '../NavBar/logo';
import '../NavBar.css'; // Asegúrate de importar tu archivo CSS si tienes estilos adicionales.

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/category/barras" className={`nav-link ${location.pathname.includes('/category/barras') ? 'active' : ''}`}>Barras</Link>
            <Link to="/category/bici" className={`nav-link ${location.pathname.includes('/category/bici') ? 'active' : ''}`}>Bicis</Link>
            <Link to="/category/pesas" className={`nav-link ${location.pathname.includes('/category/pesas') ? 'active' : ''}`}>Pesas</Link>
            <Link to="/category/suplementos" className={`nav-link ${location.pathname.includes('/category/suplementos') ? 'active' : ''}`}>Suplementos</Link>
            <Link to="/category/accesorios" className={`nav-link ${location.pathname.includes('/category/accesorios') ? 'active' : ''}`}>Accesorios</Link>
          </Nav>
          <Nav>
            <Link to="/cart" className="nav-link">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
