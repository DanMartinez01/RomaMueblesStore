import React from 'react';
import './InfoSection.css';
// import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const InfoSection = () => {
    return (
        // <div className="infoSection">
        //     <div className="infoText">
        //         <p><b>Horarios de atencion</b></p>
        //         <p>Lun a Vier de 10 a 19</p>
        //         <p>Sábados de 10 a 18</p>
        //         <p>Dom:Cerrado</p>
        //     </div>
        //     <div className="infoText" >
        //         <p><b>Informacion Util</b></p>
        //         <p>Home</p>
        //         <p>Nosotros</p>
        //         <p>Contacto</p>
        //     </div>
        //     <div className="infoText" >
        //         <p><b>Productos</b></p>
        //         <p>Camas</p>
        //         <p>Mesas</p>
        //         <p>Combos</p>
        //     </div>

        // </div >

        <div className="main-info-section">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4><b>Horarios de atención</b></h4>
                        <ui className="list-unstyled">
                            <li>Lun a Vier de 10 a 19</li>
                            <li>Sábados de 10 a 18</li>
                            <li>Dom: Cerrado</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4><b>Productos</b></h4>
                        <ui className="list-unstyled">
                            {/* <Nav.Link as={Link} to={"/Beds"}>Camas</Nav.Link>
                            <Nav.Link as={Link} to={"/Tables"}>Mesas de luz</Nav.Link>
                            <Nav.Link as={Link} to={"/BedFrames"}>Respaldos</Nav.Link>
                            <Nav.Link as={Link} to={"/Sets"}>Combos</Nav.Link> */}
                            <Link className="infoSectionLink" to='/Beds'>Camas</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Tables'>Mesas de luz</Link>
                            <br />
                            <Link className="infoSectionLink" to='/BedFrames'>Respaldos</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Sets'>Combos</Link>
                        </ui>
                    </div>
                    <div className="col">
                        <h4><b>Links Utiles</b></h4>
                        <ui className="list-unstyled">
                            <Link className="infoSectionLink" to='/'>Home</Link>
                            <br />
                            <Link className="infoSectionLink" to='/AboutUs'>Nosotros</Link>
                            <br />
                            <Link className="infoSectionLink" to='/Contact'>Contacto</Link>
                            <br />
                            <a className="infoSectionLink" target="_blank" rel="noreferrer"
                                href="https://www.facebook.com/Roma-muebles-110762931290216/">
                                Seguinos
                            </a>
                        </ui>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
export default InfoSection