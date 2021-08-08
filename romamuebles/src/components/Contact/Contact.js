import React from 'react';
import './Contact.css';
// import Lottie from 'react-lottie';
// import call from '../../assets/Lottie/call.json';
import { SiWhatsapp } from "react-icons/si";
import { NavBar } from '../NavBar/NavBar';
import { ContactBanner } from '../Contact/ContactBanner/ContactBanner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';



export const Contact = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice',
    //     }
    // }

    return (
        <div>
            <NavBar />
            <ContactBanner />
            <div>
                <div>
                    <a
                        href="https://wa.me/5491160482934"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiWhatsapp className="whatsapp-icon" />
                    </a>
                </div>
                {/* 
                <div className="lottieAnimation">
                    <Lottie options={{
                        animationData: call, ...defaultOptions,
                    }}
                    />
                </div> */}
                <h3>Ubicacion:</h3>

            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Contact