import { Container, Navbar, Nav } from "react-bootstrap"
function NavbarComponent() {

    return (
    
        <Navbar className="my-bg-blue" variant="dark">
        <Container>
        <Navbar.Brand href="#home" className="my-text-orange fw-bold">Maru-Yasa</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/#profile">Profile</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    
)

}

export default NavbarComponent