import { Container, Navbar, Nav } from "react-bootstrap"
function NavbarComponent() {

    return (
    
        <Navbar className="my-bg-blue" variant="dark">
        <Container>
        <Navbar.Brand href="#home" className="my-text-orange fw-bold">Maru-Yasa</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    
)

}

export default NavbarComponent