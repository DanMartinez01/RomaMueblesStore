import React from 'react';
import './Contact.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { ContactBanner } from '../Contact/ContactBanner/ContactBanner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { ContactInfo } from './ContactInfo/ContactInfo';

export const Contact = () => {
    return (
        <div>
            <NavBarComponent />
            <div className="bannerStripe">
                <h1>Contacto</h1>
            </div>
            <ContactBanner />
            <ContactInfo />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact