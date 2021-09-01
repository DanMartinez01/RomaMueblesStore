import React from 'react';
import './Tables.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

import image5 from '../Carousel/Img/5.jpg';
import image6 from '../Carousel/Img/6.jpg';
import image8 from '../Carousel/Img/8.jpg';
import { SiWhatsapp } from 'react-icons/si';


export const Tables = () => {

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
                <h1>Mesas de luz</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E67E22" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,128C480,117,600,75,720,80C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="imgContainer">
                                <img src={image6} className="productPhoto"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />

                                    </b>
                                </h3>
                                <p className="productName"> Distribución:<br />

                                </p>
                                <p className="productPrice"><b>Precio:</b></p>
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
                                            <span class="dot-black"></span> Negro
                                            <br />
                                            <span class="dot-lg-brown"></span>Cedro
                                            <br />
                                            <span class="dot-dk-brown"></span>Wengue
                                        </b>
                                    </p>
                                </div>
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
                <div className="product">
                    <div className="card">
                        <div>
                            <div className="imgContainer">
                                <img src={image8} className="productPhoto"
                                    alt="mesa de luz flotante"
                                />
                            </div>
                            <div className="productContainer" >
                                <h3>
                                    <b>Mesa de luz flotante<br />
                                    </b>
                                </h3>
                                <p className="productName"> Distribución:<br />

                                </p>
                                <p className="productPrice"><b>Precio:</b></p>
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
                                            <span class="dot-black"></span> Negro
                                            <br />
                                            <span class="dot-lg-brown"></span>Cedro
                                            <br />
                                            <span class="dot-dk-brown"></span>Wengue
                                        </b>
                                    </p>
                                </div>
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
                                <p className="productName"> Distribución:<br />

                                </p>
                                {/* <p className="productName">Cama Box</p> */}
                                <p className="productPrice"><b>Precio:</b></p>
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