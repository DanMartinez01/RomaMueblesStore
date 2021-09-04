import React from 'react';
import './Sets.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';


import image3 from '../Carousel/Img/3.jpg';
import image5 from '../Carousel/Img/5.jpg';
import image9 from '../Carousel/Img/9.jpg';
import { SiWhatsapp } from 'react-icons/si';

export const Sets = () => {

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
                <h1>Combos</h1>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E67E22" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,80C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
            <h3 className="comboDescription">Cama + Mesas de luz + Respaldo <br /> $
                <br />
                <button className="buttonGoCart">
                    <a className="buttonGoCart"
                        href="https://wa.me/5491130666726"
                        target="_blank"
                        rel="noopener noreferrer">
                        Lo quiero
                    </a>
                </button>
                <br />
                <h5 className="comboDescription">Consulte por otros colores y modelos</h5>
            </h3>

            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <img src={image3} className="productPhoto"
                                alt="cama box con cajones"
                            />
                            <div className="productContainer" >
                                <h3>
                                    <b>Cama Box con cajones<br />

                                    </b>
                                </h3>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>

                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco

                                        </b>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <img src={image5} className="productPhoto"
                                alt="mesa de luz flotante"
                            />
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />

                                    </b>
                                </h3>
                                {/* <p className="productName"> Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales + Baulera Interna
                                </p> */}
                                {/* <p className="productName">Cama Box</p> */}
                                {/* <p className="productPrice"><b>Precio:</b></p> */}
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>

                                    </p>
                                </div>
                                <div className="descriptionText">
                                    <p className="colorText">
                                        <h4><b>Colores:</b></h4>
                                        <b>
                                            <span class="dot-white"></span>Blanco

                                        </b>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="card">
                        <div>
                            <img src={image9} className="productPhoto"
                                alt="respaldo de cama"
                            />
                            <div className="productContainer" >
                                <h3>
                                    <b>Respaldo<br />

                                    </b>
                                </h3>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
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
                                        </b>
                                    </p>
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
export default Sets