import React from 'react';
import './Sets.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';

import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

import image3 from '../Carousel/Img/3.jpg';
import image5 from '../Carousel/Img/5.jpg';
import image9 from '../Carousel/Img/9.jpg';

export const Sets = () => {

    return (
        <div>
            <NavBarComponent />
            <div className="bannerStripe">
                <h1>Combos</h1>
            </div>
            <h3 className="comboDescription">Cama-Mesas de luz-Respaldo<br />Precio: $
                <br />
                <button className="buttonGoCart">
                    <Link className="buttonGoCart" to='/CartView'>Lo quiero</Link>
                </button>
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
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Sets