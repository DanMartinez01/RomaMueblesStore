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
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4><b>Roma Muebles</b></h4>
                        <ui className="list-unstyled">
                            <li><MdEmail />romamuebles@gmail.com</li>
                            <li><MdLocationOn />Jose C. Paz. GBA</li>
                            <li><FaFacebookSquare />Roma Muebles</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4><b>Teléfonos</b></h4>
                        <ui className="list-unstyled">
                            <li><SiWhatsapp />1130666726</li>
                            <li><SiWhatsapp />1121897830</li>
                            <li><MdLocalPhone />1175273793</li>
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