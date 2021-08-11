import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';


import image4 from '../Carousel/Img/4.jpg';

export const AboutUs = () => {

    return (
        <div>
            <NavBarComponent />
            <Banner />
            <div>
                <div className="product">

                    <img
                        className="productImage"
                        width="50%"
                        height="20%"
                        src={image4}
                        alt="First slide"
                    />
                    <div className="aboutDescription">
                        <h3> <b>Quienes somos</b></h3>
                        <p><b>Empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        <br />
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente</b></p>
                        <br />
                        <p><b> Desde hace mas de 10 años junto a vos.</b></p>
                    </div>
                </div>
            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs