import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from 'react-icons/si';
// import image4 from '../Carousel/Img/4.jpg';
import image11 from '../Carousel/Img/11.jpg';
import mercadolibre from '../Carousel/Img/mercadolibre.png';


export const AboutUs = () => {

    return (
        <div>
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
            <div className="bannerStripe">
                <h1 className="bannerStripeText">
                    Nosotros
                </h1>
            </div>
            <div>
                <div className="aboutUsContainer">
                    <div className="aboutUsImgContainer">

                        <img
                            className="aboutUsImage"
                            width="100%"
                            src={image11}
                            alt="cama box con cajones"
                        />
                    </div>
                    <div className="aboutUsText">
                        <p><b>Roma Muebles es una empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.</b></p>
                        <br />
                    </div>
                    <div className="aboutDescription">
                        <p>
                            <button className="buttonGoCart">
                                <a className="buttonGoCart"
                                    href="https://wa.me/9541130666726"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    Pedi tu presupuesto
                                </a>
                            </button>
                        </p>
                        <p>
                            <button className="btn-followUs">
                                Seguinos en Facebook
                            </button>
                        </p>
                        <p>
                            <button className="btn-MeLi" >
                                <a
                                    href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <span>
                                        <img alt="mercado libre" src={mercadolibre} width="80%" height="8%" fluid />
                                    </span>
                                </a>
                            </button>
                        </p>
                    </div>

                </div>
            </div>
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs