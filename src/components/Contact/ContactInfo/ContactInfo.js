import React from 'react';
import './ContactInfo.css';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
import { MdEmail, MdLocationOn, MdLocalPhone } from 'react-icons/md';

export const ContactInfo = () => {
    return (
        <div className="contactContainer">
            <div class="contact-info">
                <div class="contactCard">
                    <i class="card-icon"><MdEmail /> </i>
                    <br />
                    <a className="contactInfoLinks" target="_blank" rel="noreferrer"
                        href="https://www.instagram.com/romamue21/">
                        <h6><FaInstagram size="18px" /> Instagram </h6>
                    </a>
                    <a className="contactInfoLinks" target="_blank" rel="noreferrer"
                        href="https://www.facebook.com/Roma-muebles-110762931290216/">
                        <h6><FaFacebookSquare size="18px" /> Roma Muebles</h6>
                    </a>
                    <h7><MdEmail size="16px" />nestoraquino1984@gmail.com</h7>
                </div>
                <div class="contactCard">
                    <i class="card-icon"><MdLocalPhone /></i>
                    <br />
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491130666726"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <h7><SiWhatsapp /> 1130666726</h7>
                    </a>
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491121897830"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <h7><SiWhatsapp /> 1121897830</h7>
                    </a>
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491144140293"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <h7><SiWhatsapp /> 1144140293</h7>
                    </a>
                    <h7><MdLocalPhone size="22px" /> 1175273793</h7>
                </div>
                <div class="contactCard">
                    <i class="card-icon"><MdLocationOn /></i>
                    <br /><br />
                    <h4>José C. Paz GBA</h4>
                    <br />
                </div>
            </div>
        </div>
    )
}
export default ContactInfo