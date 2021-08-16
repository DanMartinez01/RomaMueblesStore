import React from 'react';
import './Footer.css';
import { ImFacebook } from 'react-icons/im';
// import { Link } from 'react-router-dom';
// import { FaFacebookSquare } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
// import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

// import paymentIcon from '../Carousel/Img/payment.png';

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Roma Muebles</h4>
                        <ui className="list-unstyled">
                            <li className="footerLinks" >
                                <SiWhatsapp color="white" /> 1130666726
                            </li>
                            <a className="footerLinks" target="_blank" rel="noreferrer"
                                href="https://www.facebook.com/Roma-muebles-110762931290216/">
                                <ImFacebook color="white" /> Facebook
                            </a>
                            <br />
                            <li>
                                <MdLocationOn color="white" /> Jose C. Paz GBA
                            </li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    {/* <div className="col">
                        <h4>Links Utiles</h4>
                        <ui className="list-unstyled">

                            <Link className="footerLinks" to='/Contact'>Contacto</Link>
                            <br />
                            <Link className="footerLinks" to='/AboutUs'>Nosotros</Link>
                            <br />
                            <a className="footerLinks" target="_blank" rel="noreferrer"
                                href="https://www.facebook.com/Roma-muebles-110762931290216/">
                                Seguinos
                            </a>

                        </ui>
                    </div> */}
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Roma Muebles
                    </p>
                </div>
            </div>
        </div>
    )
}