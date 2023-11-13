import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../NavBar/logo'

function NavBar() {
  return (
    <>
      <Navbar bg="black" variant="black" fixed="top" className="w-100">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link style={{ color: 'white' }} href="#home">INDUMENTARIA</Nav.Link>
            <Nav.Link style={{ color: 'white' }}  href="#features">SUPLEMENTOS</Nav.Link>
            <Nav.Link style={{ color: 'white' }}  href="#pricing">EQUIPAMIENTO</Nav.Link>
            <Nav.Link style={{ color: 'white' }}  href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </>
  );
}

export default NavBar;