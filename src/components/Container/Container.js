import { React, useEffect } from 'react';
import './Container.css'
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Carrousel } from '../Carousel/Carrousel'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'
import { SiWhatsapp } from "react-icons/si";
import { Product } from '../ProductContainer/Product/Product';
// import quality from '../Carousel/Img/qualityIcon.png';

export const Container = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
            {/* <div className="bannerStripeContainer">
                <h1 className="bannerStripeContainerText">
                    <b> Roma Muebles</b>
                </h1>
                <h1 className="bannerStripeContainerText">
                    Atención personalizada<br />
                    Calidad Premium
                    <span>
                        <img alt="calidad" className="qualityIcon-Img" fluid src={quality} width="55px" height="50px" />
                    </span>
                </h1>
            </div> */}
            <Carrousel />
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container