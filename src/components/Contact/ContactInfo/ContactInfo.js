import React from 'react';
import './ContactInfo.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';

// import paymentIcon from '../Carousel/Img/payment.png';

export const ContactInfo = () => {
    return (
        <div className="main-contact-info">
            <div className="container">
                <h2><b>Contacto</b></h2>
                <br />
                <div className="row">
                    <div className="col">
                        <h4><b>Roma Muebles</b></h4>
                        <ui className="list-unstyled">
                            <li><h4><MdEmail /> romamuebles@gmail.com</h4></li>
                            <li> <h4><MdLocationOn /> Jose C. Paz. GBA</h4></li>
                            <li> <h4><FaFacebookSquare /> Roma Muebles</h4></li>
                        </ui>
                    </div>
                    <div className="col">
                        <h4><b>Teléfonos</b></h4>
                        <ui className="list-unstyled">
                            <li> <h4><SiWhatsapp /> 1130666726</h4></li>
                            <li> <h4><SiWhatsapp /> 1121897830</h4></li>
                            <li> <h4><MdLocalPhone /> 1175273793</h4></li>
                        </ui>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="row">
                    <p className="col-sm">
                        {/* &copy;{new Date().getFullYear()} Roma Muebles */}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo