import React from 'react';
import './ContactBanner.css';
import contactImg from '../../Carousel/Img/contactBanner.jpg';

export const ContactBanner = () => {


    return (
        <div >
            <img className="contactBanner-img"
                width="100%"
                height="20%"
                src={contactImg}
                alt="contact info"
            />
        </div>
    )
}

export default ContactBanner