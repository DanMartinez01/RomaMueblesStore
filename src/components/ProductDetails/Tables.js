import { React, useEffect } from 'react';
import './productStyles.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

import image5 from '../Carousel/Img/5.jpg';
import image6 from '../Carousel/Img/6.jpg';
import image8 from '../Carousel/Img/8.jpg';
import { SiWhatsapp } from 'react-icons/si';


export const Tables = () => {
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
                <h1>/Mesas de luz</h1>
            </div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="imgContainer">
                                <img src={image6}
                                    width="300px"
                                    height="200px"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />
                                    </b>
                                </h3>
                                <p className="productName">
                                    Art #05
                                </p>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <b>Medidas: <br />35 cm ancho x 22 cm alto x 32 cm profundidad</b>
                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            Consulte por otros colores
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
                                <img src={image8}
                                    width="300px"
                                    height="200px"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />
                                    </b>
                                </h3>
                                <p className="productName">
                                    Art #06
                                </p>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <b>Medidas: <br />45 cm ancho x 32 cm alto x 35 cm profundidad</b>
                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            Consulte por otros colores
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
                                <img src={image5} className="productPhoto"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />
                                    </b>
                                </h3>

                                <p className="productName">Art #07</p>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <b>Medidas:<br />35 cm ancho x 22 cm alto x 32 cm profundidad</b>
                                        <b>

                                        </b>
                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            Consulte por otros colores
                                        </b>
                                    </p>
                                </div>
                                <div className="buttonDiv">
                                    <button className="buttonGoCart">
                                        <Link className="buttonGoCart" to='/CartView'>Comprar</Link>
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
export default Tables