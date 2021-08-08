import React from 'react';
import './ProductDetails.css';
import { NavBar } from '../NavBar/NavBar';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from "react-icons/si";

import image6 from '../Carousel/Img/6.jpg';

export const ProductDetails = () => {

    return (
        <div>
            <NavBar />
            <Banner />
            <div className="product">
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
                <img className="productImage"
                    src={image6}
                    alt="First slide"
                />
                <div className="productDescription">
                    <h3>
                        <b>Cama Box con 6 cajones en total.
                            Distribución: 4 cajones laterales + 2 cajones frontales + Baulera Interna
                        </b>
                    </h3>
                    <br />
                    <br />
                    <div className="descriptionText">
                        <p>
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


                </div>
            </div>
            <InfoSection />
            <Footer />
        </div>
    )
}
export default ProductDetails