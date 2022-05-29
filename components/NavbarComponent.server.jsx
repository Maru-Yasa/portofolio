import Link from "next/link";
import { useEffect, useState } from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { motion } from "framer-motion";
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
      <Navbar collapseOnSelect className="my-bg" variant="">
        <Container>
          <motion.div animate={{opacity:1}} initial={{opacity:0}} whileHover={{scale:1.1}} whileTap={{ scale:0.9 }} href="#home" className="text-orange navbar-brand fw-bold">
            <Link href="/" >
              Maru-Yasa
            </Link>
          </motion.div>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="me-auto my-text">
              <Link href="/" passHref>
                <Nav.Link className="my-text">Profile</Nav.Link>
              </Link>
              <NavDropdown title="Others" id="basic-nav-dropdown">
                <Link href="/blogs" passHref>
                  <NavDropdown.Item>Blogs</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.2">Tools</NavDropdown.Item>
                <NavDropdown.Divider />
                <Link href="/admin" passHref>
                  <NavDropdown.Item>Admin</NavDropdown.Item>
                </Link>              
              </NavDropdown>
            </Nav>            
          </Navbar.Collapse>

          <Nav className="ml-auto">
            <span onClick={handleClick} className="fs-4 text-warning"> <i className={icon}></i> </span>
          </Nav>
        </Container>
      </Navbar>
    
)

}

export default NavbarComponent