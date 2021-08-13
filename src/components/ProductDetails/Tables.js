import React from 'react';
import './Tables.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

import image5 from '../Carousel/Img/5.jpg';
// import image6 from '../Carousel/Img/6.jpg';


export const Tables = () => {

    return (
        <div>
            <NavBarComponent />
            <Banner />
            <div>
                <a
                    href="https://wa.me/5491160482934"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiWhatsapp />
                </a>
            </div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="imgContainer">
                                <img src={image5} className="productPhoto"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Cama Box con 6 cajones en total.<br />

                                    </b>
                                </h3>
                                <p className="productName"> Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales + Baulera Interna
                                </p>
                                {/* <p className="productName">Cama Box</p> */}
                                <p className="productPrice"><b>Precio:</b></p>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
                                        <b>
                                            1 Plaza
                                            <br />
                                            1 1/2 Plaza
                                            <br />
                                            2 plazas (140cm x 190cm).
                                            <br />
                                            Queen (160cm x1.90/200cm).
                                            <br />
                                            2 1/2 (180cm x 200cm).
                                            <br />
                                            King (200cm x 200cm)
                                        </b>
                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            <span class="dot-black"></span> Negro
                                            <br />
                                            <span class="dot-lg-brown"></span>Cedro
                                            <br />
                                            <span class="dot-dk-brown"></span>Wengue
                                        </b>
                                    </p>
                                </div>
                                <button className="buttonGoCart">
                                    <Link className="buttonGoCart" to='/CartView'>Comprar</Link>
                                </button>
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
                                    <b>Cama Box con 6 cajones en total.<br />
                                    </b>
                                </h3>
                                <p className="productName"> Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales + Baulera Interna
                                </p>
                                {/* <p className="productName">Cama Box</p> */}
                                <p className="productPrice"><b>Precio:</b></p>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
                                        <b>
                                            1 Plaza
                                            <br />
                                            1 1/2 Plaza
                                            <br />
                                            2 plazas (140cm x 190cm).
                                            <br />
                                            Queen (160cm x1.90/200cm).
                                            <br />
                                            2 1/2 (180cm x 200cm).
                                            <br />
                                            King (200cm x 200cm)
                                        </b>
                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco
                                            <br />
                                            <span class="dot-black"></span> Negro
                                            <br />
                                            <span class="dot-lg-brown"></span>Cedro
                                            <br />
                                            <span class="dot-dk-brown"></span>Wengue
                                        </b>
                                    </p>
                                </div>
                                <button className="buttonGoCart">
                                    <Link className="buttonGoCart" to='/CartView'>Comprar</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InfoSection />
            <Footer />
        </div>
    )
}
export default Tables