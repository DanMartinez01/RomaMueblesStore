import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

import paymentIcon from '../Carousel/Img/payment.png';
// export const Footer = () => {
//     return (

//         <footer className="footer">
//             <h3 className="footerText">Roma Muebles</h3>
//             <p className="footerText">
//                 <span className="iconSpan">
//                     <SiWhatsapp fontSize="large"
//                         color="white">
//                     </SiWhatsapp>
//                 </span>
//                 Te: 11223344
//             </p>
//             <p className="footerText">
//                 <span className="iconSpan">
//                     <MdEmail
//                         fontSize="large"
//                         color="white">
//                     </MdEmail>
//                 </span>
//                 Email: romamuebles@gmail.com
//             </p>
//             <p className="footerText">
//                 <span className="iconSpan">
//                     <FaFacebookSquare
//                         fontSize="large"
//                         color="white">
//                     </FaFacebookSquare>
//                 </span>
//                 Fb: Roma Muebles
//             </p>
//             <p className="footerText">
//                 <span>
//                     <MdLocationOn
//                         fontSize="large"
//                         color="white">
//                     </MdLocationOn>
//                 </span>
//                 Jose C. Paz GBA
//             </p>
//             {/* <div className="paymentMethodImg">
//                 <img
//                     src={paymentIcon}
//                     alt="medios de pago"
//                 />
//             </div> */}

//         </footer>
//     )
// }
export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Roma Muebles</h4>
                        <ui className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet South North</li>
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