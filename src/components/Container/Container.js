import React from 'react';
import './Container.css'
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Carrousel } from '../Carousel/Carrousel'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'
import { SiWhatsapp } from "react-icons/si";
import { Product } from '../ProductContainer/Product/Product';
import quality from '../Carousel/Img/qualityIcon.png';

export const Container = () => {

    return (
        <div className="page-container">
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
            <div className="bannerStripeContainer">
                <h1 className="bannerStripeContainerText">

                    Atención personalizada
                    <br />
                    Calidad Premium
                    <span>
                        <img alt="calidad" className="qualityIcon-Img" fluid src={quality} width="55px" height="50px" />
                    </span>
                </h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E67E22" fill-opacity="1" d="M0,224L34.3,197.3C68.6,171,137,117,206,112C274.3,107,343,149,411,176C480,203,549,213,617,197.3C685.7,181,754,139,823,112C891.4,85,960,75,1029,90.7C1097.1,107,1166,149,1234,176C1302.9,203,1371,213,1406,218.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            <Carrousel />
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container