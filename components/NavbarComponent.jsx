import { useEffect, useState } from "react"
import { Container, Navbar, Nav, Button } from "react-bootstrap"
function NavbarComponent({themeToggler, theme}) {
    const [themeC, setThemeC] = useState(theme);
    let icon = 'bi bi-brightness-high-fill'
    let color = 'text-warning'

    const handleClick = () => {
      themeC === 'dark' ? setThemeC('light') : setThemeC('dark')
    }

    const darkMode = () => {
      color = 'text-warning'
      icon = 'bi bi-brightness-high-fill'
    }

    const lightMode = () => {
      color = 'text-navy'
      icon = "bi bi-moon-stars-fill"
    }
    useEffect(() => {
      themeToggler(themeC)
    }, [themeC, themeToggler])

    themeC === 'light' ?  lightMode() : darkMode() 

    return (
    
      <Navbar className="my-bg" variant="">
        <Container>
          <Navbar.Brand href="#home" className="text-orange fw-bold">Maru-Yasa</Navbar.Brand>
          <Nav className="me-auto my-text">
            <Nav.Link className="my-text" href="/#profile">Profile</Nav.Link>
            <Nav.Link className="my-text" href="/#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <span onClick={handleClick} className="fs-4 text-warning"> <i className={icon}></i> </span>
          </Nav>
        </Container>
      </Navbar>
    
)

}

export default NavbarComponent