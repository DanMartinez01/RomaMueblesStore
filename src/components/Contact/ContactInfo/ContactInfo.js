import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";
import './ContactInfo.css';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
import { MdEmail, MdLocationOn, MdLocalPhone } from 'react-icons/md';

export const ContactInfo = () => {
    const animatedContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }


    const animatedItem = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 },
    }
    return (
        <div className="contactContainer">
            <motion.ol
                variants={animatedContainer}
                initial="hidden"
                animate="show"
                class="contact-info">
                <motion.li variants={animatedItem}
                    whileInView={{ opacity: 1 }}
                    class="contactCard">
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
                </motion.li>
                <motion.li variants={animatedItem}
                    whileInView={{ opacity: 1 }}
                    class="contactCard">
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
                        <h7><SiWhatsapp /> 1144140297</h7>
                    </a>
                    <h7><MdLocalPhone size="18px" /> 1175273793</h7>
                </motion.li>
                <motion.li variants={animatedItem}
                    whileInView={{ opacity: 1 }}
                    class="contactCard">
                    <i class="card-icon"><MdLocationOn /></i>
                    <br /><br />
                    <h4>José C. Paz GBA</h4>
                    <br />
                </motion.li>
            </motion.ol>
        </div>
    )
}
export default ContactInfo