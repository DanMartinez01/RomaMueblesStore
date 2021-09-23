import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from 'react-icons/si';
import image15 from '../Carousel/Img/15.jpg';
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
                            src={image15}
                            alt="cama box con cajones"
                        />
                    </div>
                    <div className="aboutUsText">
                        <h4>
                            <b>Roma Muebles</b> es una empresa familiar, dedicada al diseño y construcción de muebles artesanales.
                            <br /> <br />
                            <b>Garantía de fábrica:</b> usamos materiales de calidad premium en cada uno de nuestros productos.
                            <br /> <br />
                            <b>Asesoramiento personalizado:</b> consulta por nuestra variedad de modelosc, colores y medidas.
                            <br /> <br />
                            <div className="presupuestoLink">
                                <b>
                                    <a className="presupuestoLink"
                                        href="https://wa.me/9541130666726"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Comunicate con nosotros<br /> pedí tu  presupuesto!
                                    </a>
                                </b>
                                <br /> <br />
                                <b>Encontranos en Mercado Libre</b><br />
                                <a className="btn-MeLi"
                                    href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="mercado libre" src={mercadolibre} width="85px" height="30 px" />
                                </a>
                            </div>
                        </h4>
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