import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';

import { SiWhatsapp } from 'react-icons/si';

import image4 from '../Carousel/Img/4.jpg';

export const AboutUs = () => {

    return (
        <div>
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
            <div>
                <div className="aboutUsContainer">
                    <div className="aboutUsImgContainer">
                        <h3> <b>Quienes somos</b></h3>
                        <img
                            className="aboutUsImage"
                            width="50%"
                            height="50%"
                            src={image4}
                            alt="First slide"
                        />
                    </div>

                    <div className="aboutDescription">
                        <p><b>Roma Muebles es una empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        {/* <br /> */}
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.</b></p>
                        <br />
                        <p><button className="buttonGoCart">Pedi tu presupuesto</button></p>
                        <br />

                    </div>

                </div>
            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs