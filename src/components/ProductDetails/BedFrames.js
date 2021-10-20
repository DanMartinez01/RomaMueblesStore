import { React, useEffect } from 'react';
import './productStyles.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';


import image7 from '../Carousel/Img/7.jpg';
import image9 from '../Carousel/Img/9.jpg';
import { SiWhatsapp } from 'react-icons/si';


export const BedFrames = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                <h1>Respaldos</h1>
            </div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="imgContainer">
                                <img src={image7} className="productPhoto"
                                    alt="respaldo para cama"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3><b>Respaldo completo <br />con mesita de luz</b></h3>
                                <h3 className="productPrice">Art #08</h3>
                                <h3 className="productPrice">Melamina MDF </h3>
                                <div className="descriptionText">
                                    <h3 className="productPrice"><b>Medidas: </b></h3>
                                    <p className="colorText">
                                        <b>Colores:</b><br />
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            Consulte por otros colores y medidas
                                        </b>
                                    </p>
                                </div>
                                <div className="buttonDiv">
                                    <button className="buttonGoCart">
                                        <a className="buttonGoCart"
                                            href="https://wa.me/5491130666726"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Comprar
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div>
                            <div className="imgContainer">
                                <img src={image9} className="productPhoto"
                                    alt="respaldo para cama"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3><b>Respaldo de melamina </b></h3>
                                <h3 className="productPrice">Art #09 </h3>
                                <h3 className="productPrice">Melamina MDF </h3>
                                <div className="descriptionText">
                                    <h3 className="productPrice"><b>Medidas: 1.80 x 1.13 cm</b></h3>
                                    <p className="colorText">
                                        <b>Colores:</b><br />
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            Consulte por otros colores y medidas
                                        </b>
                                    </p>
                                </div>
                                <div className="buttonDiv">
                                    <button className="buttonGoCart">
                                        <a className="buttonGoCart"
                                            href="https://wa.me/5491130666726"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Comprar
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default BedFrames