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
        <div className="contactContainer">
            <div class="contact-info">
                <div class="contactCard">
                    <i class="card-icon"><MdEmail /> </i>
                    <br />
                    <a className="footerLinks" target="_blank" rel="noreferrer"
                        href="https://www.facebook.com/Roma-muebles-110762931290216/">
                        <h5><FaFacebookSquare color="white" /> Roma Muebles</h5>
                    </a>
                    <p>nestoraquino1984@gmail.com</p>
                </div>
                <div class="contactCard">
                    <i class="card-icon"><MdLocalPhone /></i>
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491130666726"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <p><SiWhatsapp /> 1130666726</p>
                    </a>
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491121897830"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <p><SiWhatsapp /> 1121897830</p>
                    </a>
                    <a className="contactInfoLinks"
                        href="https://wa.me/5491144140293"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <p><SiWhatsapp /> 1144140293</p>
                    </a>
                    <p><MdLocalPhone /> 1175273793</p>
                </div>
                <div class="contactCard">
                    <i class="card-icon"><MdLocationOn /></i>
                    <br />
                    <br />
                    <h4>José C. Paz GBA</h4>
                </div>
            </div>
        </div>
    )
}
export default ContactInfo