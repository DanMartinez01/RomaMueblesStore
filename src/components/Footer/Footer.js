import React from 'react';
import './Footer.css';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { SiWhatsapp } from "react-icons/si";
// import { MdEmail } from 'react-icons/md';
// import { MdLocationOn } from 'react-icons/md';

// import paymentIcon from '../Carousel/Img/payment.png';

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Roma Muebles</h4>
                        <ui className="list-unstyled">
                            <li>Te: 1130666726</li>
                            <li>Fb: Roma Muebles</li>
                            <li>Jose C. Paz GBA</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Links Utiles</h4>
                        <ui className="list-unstyled">
                            <li>Contacto</li>
                            <li>Nosotros</li>
                            <li>Seguinos</li>
                        </ui>
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