import { React, useEffect } from 'react';
import './Beds.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

import image3 from '../Carousel/Img/3.jpg';
// import image4 from '../Carousel/Img/4.jpg';
import image13 from '../Carousel/Img/13.jpg';
import { SiWhatsapp } from 'react-icons/si';

export const Beds = () => {
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
                <h1>Camas</h1>
            </div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <img src={image3} className="productPhoto"
                                        alt="cama box 2 plazas"
                                    />
                                </div>
                                <h3>
                                    <b>Cama Box con 6 cajones en total<br />
                                    </b>
                                </h3>
                                <p className="productName">
                                    Art #01 <br />
                                    Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales + Baulera Interna
                                </p>
                                <h4 className="productPrice"><b>Precio efectivo: $ 25.000</b></h4>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
                                        <b>
                                            2 plazas: 140cm x 190cm
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

                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <img src={image3} className="productPhoto"
                                        alt="cama box queen"
                                    />
                                </div>
                                <h3>
                                    <b>Cama Box con 6 cajones en total<br />

                                    </b>
                                </h3>
                                <p className="productName">
                                    Art #02<br />
                                    Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales + Baulera Interna
                                </p>
                                <h4 className="productPrice"><b>Precio efectivo: $ 30.000</b></h4>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
                                        <b>
                                            Queen: 160cm x1.90/200cm
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
                        <div className="productBox">
                            <div className="productContainer" >
                                <div className="imgContainer">
                                    <img src={image13} className="productPhoto"
                                        alt="cama box 1 plaza"
                                    />
                                </div>
                                <h3>
                                    <b>Cama Box con 6 cajones en total<br />
                                    </b>
                                </h3>
                                <p className="productName">
                                    Art #03 <br />
                                    Distribución:<br />
                                    4 cajones laterales + 2 cajones frontales
                                </p>
                                <h4 className="productPrice"><b>Precio efectivo: $ 20.000</b></h4>
                                <div className="descriptionText">
                                    <p className="productPrice">
                                        <h4><b>Medidas:</b></h4>
                                        <b>
                                            1 1/2 plaza
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
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Beds
