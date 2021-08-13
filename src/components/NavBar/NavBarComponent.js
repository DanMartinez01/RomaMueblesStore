import React from 'react';
import './NavBarComponent.css';
import { Link } from 'react-router-dom';
// import { FaInstagram } from 'react-icons/fa'
// import { FaFacebookSquare } from 'react-icons/fa';
import { Nav, Navbar, Container } from 'react-bootstrap';

export const NavBarComponent = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Roma Muebles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to={"/Beds"}>Camas</Nav.Link>
                        <Nav.Link as={Link} to={"/Tables"}>Mesas de luz</Nav.Link>
                        <Nav.Link as={Link} to={"/BedFrames"}>Respaldos</Nav.Link>
                        <Nav.Link as={Link} to={"/Sets"}>Combos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/AboutUs"}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={"/Contact"}>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default NavBarComponent

