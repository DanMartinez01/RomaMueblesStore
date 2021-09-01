import React from 'react';
import './AboutUs.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from 'react-icons/si';
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
                        <h4>

                            Somos  una empresa familiar, dedicada al diseño y construccion de muebles artesanales <br />
                            Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.
                            <br /><br />
                            Consulta por nuestra gran variedad de productos, <br />brindamos asesoramiento personalizado para cada una de tus compras. <br /> <br />
                            Garantia de fabrica, usamos materiales de calidad premium
                            <br />
                            <br />
                            <h2><b>Comunicate con nosotros, pedi tu presupuesto!</b></h2>

                        </h4>
                    </div>
                </div>
                <div className="aboutDescription">

                    <a className="btn-presupuesto"
                        href="https://wa.me/9541130666726"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <p className="btn-text"> Pedi tu presupuesto sin cargo</p>
                    </a>
                    <a className="btn-followUs" href="https://www.facebook.com/Roma-muebles-110762931290216/"> <p className="btn-text">Seguinos en Facebook</p></a>
                    <a className="btn-MeLi"
                        href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                        target="_blank"
                        rel="noopener noreferrer">
                        <p
                            className="btn-text"><img alt="mercado libre" src={mercadolibre} width="85px" height="30 px" />
                        </p>
                    </a>
                </div>
            </div>
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs