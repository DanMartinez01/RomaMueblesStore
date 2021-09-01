import React from 'react';
import './Contact.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E67E22" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,80C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <ContactInfo />
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact