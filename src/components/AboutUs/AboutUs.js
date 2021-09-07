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
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E67E22" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,80C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
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
                            <b>Roma Muebles</b> es una empresa familiar, dedicada al diseño y construcción de muebles artesanales.
                            <br /> <br />
                            Garantía de fábrica, usamos materiales de calidad premium en cada uno de nuestros productos.
                            <br />
                            Consulta por nuestra gran variedad de productos,
                            <br />
                            brindamos asesoramiento personalizado para cada una de tus compras.
                            <br /> <br />
                            <h2 className="presupuestoLink">
                                <b>
                                    <a className="presupuestoLink"
                                        href="https://wa.me/9541130666726"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Comunicate con nosotros<br /> pedí tu  presupuesto!
                                    </a>
                                </b>
                            </h2>
                            <div className="aboutDescription">
                                <a className="btn-presupuesto"
                                    href="https://wa.me/9541130666726"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <p className="btn-text"> Pedi tu presupuesto</p>
                                </a>
                                <a className="btn-followUs" href="https://www.facebook.com/Roma-muebles-110762931290216/"> <p className="btn-text">Visitanos en Facebook</p></a>
                                <a className="btn-MeLi"
                                    href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <p
                                        className="btn-text"><img alt="mercado libre" src={mercadolibre} width="85px" height="30 px" />
                                    </p>
                                </a>
                            </div>
                        </h4>
                    </div>
                </div>
                {/* <div className="aboutDescription">
                    <a className="btn-presupuesto"
                        href="https://wa.me/9541130666726"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <p className="btn-text"> Pedi tu presupuesto</p>
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
                </div> */}
            </div>
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs