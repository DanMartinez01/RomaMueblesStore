import React from 'react';
import './BedFrames.css';
import { NavBar } from '../NavBar/NavBar';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from "react-icons/si";

import image7 from '../Carousel/Img/7.jpg';



export const BedFrames = () => {

    return (
        <div>
            <NavBar />
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
            <div className="product">
                <img className="productImage"
                    src={image7}
                    alt="First slide"
                />
                <div className="productDescription">
                    <h3>
                        <b>
                            Respaldo completo con mesa de luz
                        </b>
                    </h3>
                    <br />
                    <br />
                    <div className="descriptionText">
                        <p>
                            <h4><b>Medidas:</b></h4>
                            <b>
                                Respaldo completo con mesa de luz
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
            <div className="product">
                <img className="productImage"
                    // width="20%"
                    // height="20%"
                    src={image7}
                    alt="First slide"
                />
                <div className="productDescription">
                    <h3>
                        <b>
                            Respaldo completo con mesa de luz
                        </b>
                    </h3>
                    <br />
                    <br />
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
export default BedFrames