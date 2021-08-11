import React from 'react';
// import './Container.css'
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner'
import { Carrousel } from '../Carousel/Carrousel'
import { ProductContainer } from '../ProductContainer/ProductContainer'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'
import { SiWhatsapp } from "react-icons/si";

export const Container = () => {

    return (
        <div class="page-container">
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
            <Banner />
            <Carrousel />
            <ProductContainer />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container