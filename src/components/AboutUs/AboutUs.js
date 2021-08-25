import React from 'react';
import './AboutUs.css';
// import { Link } from 'react-router-dom';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import image4 from '../Carousel/Img/4.jpg';
import mercadolibre from '../Carousel/Img/mercadolibre.png';


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
                        <h3><b>Quienes somos</b></h3>
                        <img
                            className="aboutUsImage"
                            width="100%"
                            src={image4}
                            alt="roma muebles"
                        />
                    </div>

                    <div className="aboutDescription">
                        <p><b>Roma Muebles es una empresa familiar, dedicada a diseño y construccion de muebles artesanales</b></p>
                        {/* <br /> */}
                        <p><b>Nos enorgullece cada uno de nuestros productos y satisfacer al cliente.</b></p>
                        <br />
                        <p>
                            <button className="buttonGoCart">
                                <a className="buttonGoCart"
                                    href="https://wa.me/9541130666726"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    Pedi tu presupuesto!
                                </a>
                            </button>
                        </p>
                        <p>
                            <button className="btn-followUs">
                                Seguinos en Facebook!
                            </button>
                        </p>
                        <p>
                            <button className="btn-MeLi">
                                <a className="btn-MeLi"
                                    href="https://articulo.mercadolibre.com.ar/MLA-928703577-cama-box-para-sommier-con-6-cajones-2-mesitas-de-luz-_JM?fbclid=IwAR0TGn9Darz5s6bttBamnLggvSrt-_cFY2HAP7j6mU8hR1Ir3wIdMaO_Kiw"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    {/* Compra por Mercado Libre */}
                                </a>
                                <br />
                                <img alt="mercado libre" src={mercadolibre} width="110px" fluid />
                            </button>
                        </p>
                    </div>

                </div>
            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default AboutUs