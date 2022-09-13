import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ANY REACT APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">MIS POKEMONES</Nav.Link>
            <Nav.Link href="#pricing">LOS MAS CONOCIDOS</Nav.Link>
            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Azules</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rojos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Amarillos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mas raros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Crear Pokemon</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Tus pokemones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
    )
}

export default NavBar;