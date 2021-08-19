import React from 'react';
import './ContactInfo.css';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';

// import paymentIcon from '../Carousel/Img/payment.png';

export const ContactInfo = () => {
    return (
        // <div className="main-contact-info">
        //     <div className="container">
        //         <br />
        //         <div className="row">
        //             <div className="col">
        //                 <h4><b>Ubicación:</b></h4>
        //                 <ui className="list-unstyled">
        //                     <li> <h4><MdLocationOn /><b>Jose C. Paz. GBA</b></h4></li>
        //                 </ui>
        //             </div>
        //             <div className="col">
        //                 <h4><b>Correo y redes sociales:</b></h4>
        //                 <ui className="list-unstyled">
        //                     <li><h4><MdEmail /><b>romamuebles@gmail.com</b> </h4></li>
        //                     <li> <h4><FaFacebookSquare /><b>Roma Muebles</b></h4></li>
        //                 </ui>
        //             </div>
        //             <div className="col">
        //                 <h4><b>Teléfonos:</b></h4>
        //                 <ui className="list-unstyled">
        //                     <a className="contactInfoLinks"
        //                         href="https://wa.me/2348100000000"
        //                         target="_blank"
        //                         rel="noopener noreferrer" >
        //                         <h4><SiWhatsapp /><b> 1130666726</b> </h4>
        //                     </a>
        //                     <a className="contactInfoLinks"
        //                         href="https://wa.me/2348100000000"
        //                         target="_blank"
        //                         rel="noopener noreferrer" >
        //                         <h4><SiWhatsapp /><b> 1121897830</b> </h4>
        //                     </a>
        //                     <li> <h4><MdLocalPhone /><b> 1175273793</b> </h4></li>
        //                 </ui>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="contactContainer">
            <div class="contact-info">
                <div class="contactCard">
                    <i class="card-icon"><MdEmail /> </i>
                    <p>email@domain.com</p>
                </div>

                <div class="contactCard">
                    <i class="card-icon"><MdLocalPhone /></i>
                    <p>+000000000000</p>
                </div>

                <div class="contactCard">
                    <i class="card-icon"><MdLocationOn /></i>
                    <p>New York, USA</p>
                </div>
            </div>
        </div>
















    )
}
export default ContactInfo