import React from 'react';
import './Contact.css';
import { SiWhatsapp } from 'react-icons/si'

import { NavBarComponent } from '../NavBar/NavBarComponent';
import { ContactBanner } from '../Contact/ContactBanner/ContactBanner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { ContactInfo } from './ContactInfo/ContactInfo';

export const Contact = () => {
    return (
        <div>
            <div>
                <a
                    href="https://wa.me/2348100000000"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa fa-whatsapp whatsapp-icon">
                        <SiWhatsapp />
                    </i>
                </a>
            </div>
            <NavBarComponent />
            <ContactBanner />
            <ContactInfo />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact