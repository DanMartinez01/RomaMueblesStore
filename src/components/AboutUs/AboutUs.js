import React from 'react';
import './AboutUs.css';
// import { Link } from 'react-router-dom';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
// import image11 from '../Carousel/Img/11.jpg';
import image10 from '../Carousel/Img/10.jpg';


export const AboutUs = () => {

    return (
        <div>
            <NavBarComponent />
            <div className="bannerStripe">
                <h1 className="bannerStripeText">
                    {/* <span> <Link className="infoSectionLink" to='/'>Roma muebles</Link></span> */}
                    Nosotros
                </h1>
            </div>
            <div>
                <div className="aboutUsContainer">
                    <div className="aboutUsImgContainer">
                        <h3> <b>Quienes somos</b></h3>
                        <img
                            className="aboutUsImage"
                            width="80%"
                            height="80%"
                            src={image10}
                            alt="First slide"
                        />
                    </div>

                    <div className="aboutDescription">
                        <p><b>Roma Muebles es una empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        {/* <br /> */}
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.</b></p>
                        <br />
                        <p><button className="buttonGoCart">
                            <a className="buttonGoCart"
                                href="https://wa.me/9541130666726"
                                target="_blank"
                                rel="noopener noreferrer" >
                                Pedi tu presupuesto!
                            </a>
                        </button></p>
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