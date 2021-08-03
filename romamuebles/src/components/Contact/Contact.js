import React from 'react';
import './Contact.css';
import Lottie from 'react-lottie';
import call from '../../assets/Lottie/call.json';
import { SiWhatsapp } from "react-icons/si";
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';


export const Contact = () => {
    const defaultOptions = {

        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',

        }
    }

    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <a
                        href="https://wa.me/5491160482934"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiWhatsapp />
                    </a>
                </div>

                <div className="lottieAnimation">
                    <Lottie options={{
                        animationData: call, ...defaultOptions,
                    }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact