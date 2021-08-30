import React from 'react';
import './NavBarComponent.css';
import { Link } from 'react-router-dom';
// import { FaInstagram } from 'react-icons/fa'
// import { FaFacebookSquare } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import mercadolibre from '../Carousel/Img/mercadolibre.png';
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
                        <Nav.Link as={Link} to={"/Contact"}>Contacto</Nav.Link>
                        <Nav.Link href="https://www.facebook.com/Roma-muebles-110762931290216/">
                            <ImFacebook color="white" />
                        </Nav.Link>
                        <Nav.Link className="meliLogo-NavBar"
                            href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img alt="mercado libre" src={mercadolibre} width="70px" height="20 px" />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default NavBarComponent

