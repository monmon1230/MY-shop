import React from "react";
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import logoin from '../../../Images/login.png';
import cart from '../../../Images/cart.png'

export const NavBarLogin = () => {
  return(
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    <Container>
        <Navbar.Brand>
            <a href='/'>
                <img src={logo} alt="sfvs" className='logo' />
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
                type="search"
                placeholder="ابحث..."
                className="me-2 w-100 text-center"
                aria-label="Search"
            />
            <Nav className="me-auto">
                <Nav.Link href="/Login" className="nav-text d-flex mt-3 justify-content-center">
                    <img src={logoin} className="logoin-img" alt="sfvs" />
                    <p style={{ color: "white" }}>دخول</p>
                </Nav.Link>
                <Nav.Link href="/car" 
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={cart} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>العربه</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  
  
  ) 
};

export default NavBarLogin;
