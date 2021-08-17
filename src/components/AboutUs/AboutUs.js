import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import image8 from '../Carousel/Img/8.jpg';

export const AboutUs = () => {

    return (
        <div>
            <NavBarComponent />
            <Banner />
            <div>
                <div className="aboutUsContainer">
                    <div className="aboutUsImgContainer">
                        <h3> <b>Quienes somos</b></h3>
                        <img
                            className="aboutUsImage"
                            width="80%"
                            height="80%"
                            src={image8}
                            alt="First slide"
                        />
                    </div>

                    <div className="aboutDescription">
                        <p><b>Roma Muebles es una empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        {/* <br /> */}
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.</b></p>
                        <br />
                        <p><button className="buttonGoCart">Pedi tu presupuesto</button></p>
                        {/* <br />
                        <br /> */}
                        <p><button className="btn-followUs">Seguinos en Facebook!</button></p>
                    </div>

                </div>
            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs