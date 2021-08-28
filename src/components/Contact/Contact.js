import React from 'react';
import './Contact.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { SiWhatsapp } from 'react-icons/si';

export const Contact = () => {
    return (
        <div>
            <div>
                <a
                    href="https://wa.me/5491130666726"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className=" whatsapp-icon">
                        <SiWhatsapp size="large" />
                    </i>
                </a>
            </div>
            <NavBarComponent />
            <div className="bannerStripe">
                <h1>Contactanos!</h1>
            </div>
            {/* <ContactBanner /> */}
            <ContactInfo />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact