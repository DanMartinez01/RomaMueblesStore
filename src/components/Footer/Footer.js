import React from 'react';
import './Footer.css';
import { ImFacebook } from 'react-icons/im';
import { SiWhatsapp } from "react-icons/si";
import { MdLocationOn } from 'react-icons/md';

import visa from '../Carousel/Img/visa2.png';
import mastercard from '../Carousel/Img/mastercard3.png';
import mercadopago from '../Carousel/Img/mercadopago.png';
import pagofacil from '../Carousel/Img/pagofacil.png';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Roma Muebles</h4>
                        <ui className="list-unstyled">
                            <a className="footerLinks"
                                href="https://wa.me/5491130666726"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <SiWhatsapp color="white" /> 1130666726
                            </a>
                            <br />
                            <a className="footerLinks" target="_blank" rel="noreferrer"
                                href="https://www.facebook.com/Roma-muebles-110762931290216/">
                                <ImFacebook color="white" /> Facebook
                            </a>
                            <br />
                            <a className="footerLinks" target="_blank" rel="noreferrer"
                                href="https://www.instagram.com/romamue21/">
                                <FaInstagram color="white" /> Instagram
                            </a>
                            <br />
                            <li>
                                <MdLocationOn color="white" /> Jose C. Paz GBA
                            </li>
                        </ui>
                    </div>
                    <div>

                        <img
                            alt="mercado pago"
                            src={mercadopago}
                            fluid
                            width="40px"
                            height="20px"
                        />
                        <img
                            alt="pago facil"
                            src={pagofacil}
                            fluid
                            width="40px"
                            height="20px"
                        />
                        <img
                            alt="visa"
                            src={visa}
                            fluid
                            width="40px"
                            height="20px"
                        />
                        <img
                            alt="master card"
                            src={mastercard}
                            fluid
                            width="35px"
                            height="20px"
                        />
                    </div>
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