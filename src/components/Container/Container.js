import React from 'react';
// import './Container.css'
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner'
import { Carrousel } from '../Carousel/Carrousel'
// import { ProductContainer } from '../ProductContainer/ProductContainer'
import { InfoSection } from '../InfoSection/InfoSection'
import { Footer } from '../Footer/Footer'
import { SiWhatsapp } from "react-icons/si";
import { Product } from '../ProductContainer/Product/Product';

export const Container = () => {

    return (
        <div className="page-container">
            <div>
                <a
                    href="https://wa.me/2348100000000"
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
            <Banner />
            <Carrousel />
            {/* <ProductContainer /> */}
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Container