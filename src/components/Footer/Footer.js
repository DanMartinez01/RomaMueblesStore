import React from 'react';
import './Footer.css';
import { ImFacebook } from 'react-icons/im';
// import { Link } from 'react-router-dom';
// import { FaFacebookSquare } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
// import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

import visa from '../Carousel/Img/visa.png';
import mastercard from '../Carousel/Img/mastercard.png';
import mercadopago from '../Carousel/Img/mercadopago.png';
import pagofacil from '../Carousel/Img/pagofacil.png';

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
                    <div>
                        <img
                            alt="visa"
                            src={visa}
                            fluid
                            width="50px"
                            height="30px"
                        />
                        <img
                            alt="master card"
                            src={mastercard}
                            fluid
                            width="30px"
                            height="30px"
                        />
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