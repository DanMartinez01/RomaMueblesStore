import React from 'react';
import './NavBarComponent.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im';
import { Nav, Navbar, Container } from 'react-bootstrap';

export const NavBarComponent = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand as={Link} to={"/"}><h3>Roma Muebles</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/Camas"}>Camas</Nav.Link>
                        <Nav.Link as={Link} to={"/Mesasdeluz"}>Mesas de luz</Nav.Link>
                        <Nav.Link as={Link} to={"/Respaldos"}>Respaldos</Nav.Link>
                        <Nav.Link as={Link} to={"/Combos"}>Combos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/Nosotros"}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={"/Contacto"}>Contacto</Nav.Link>
                        <Nav.Link href="https://www.facebook.com/Roma-muebles-110762931290216/">
                            <ImFacebook color="white" />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/romamue21/">
                            <FaInstagram color="white" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default NavBarComponent

