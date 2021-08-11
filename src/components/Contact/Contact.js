import React from 'react';
import './Contact.css';
// import Lottie from 'react-lottie';
// import call from '../../assets/Lottie/call.json';

import { NavBarComponent } from '../NavBar/NavBarComponent';
import { ContactBanner } from '../Contact/ContactBanner/ContactBanner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { ContactInfo } from './ContactInfo/ContactInfo';



export const Contact = () => {


    return (
        <div>
            <NavBarComponent />
            <div>
                <h3>Contacto</h3>
            </div>
            <ContactBanner />
            <ContactInfo />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact