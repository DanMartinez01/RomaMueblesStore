import React from 'react';
import './Tables.css';
import { NavBar } from '../NavBar/NavBar';
import { Banner } from '../Banner/Banner';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';
import { SiWhatsapp } from "react-icons/si";

import image5 from '../Carousel/Img/5.jpg';
// import image6 from '../Carousel/Img/6.jpg';


export const Tables = () => {

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
                    src={image5}
                    alt="First slide"
                />
                <div className="productDescription">
                    <h3>
                        <b>
                            Mesas de luz para camas
                        </b>
                    </h3>
                    <br />
                    <br />
                    <div className="descriptionText">
                        <p>
                            <h4><b>Medidas:</b></h4>
                            <b>
                                Alto: 0,37 cm
                                <br />
                                Ancho: 0,30
                                <br />
                                Profundidad: 0,30
                                <br />
                            </b>
                        </p>
                    </div>
                </div>

            </div>
            <div className="product">
                <img className="productImage"
                    // width="20%"
                    // height="20%"
                    src={image5}
                    alt="First slide"
                />
                <div className="productDescription">
                    <h3>
                        <b>
                            Mesas de luz para camas
                        </b>
                    </h3>
                    <br />
                    <br />
                    <div className="descriptionText">
                        <p>
                            <h4><b>Medidas:</b></h4>
                            <b>
                                Alto: 0,37 cm
                                <br />
                                Ancho: 0,30
                                <br />
                                Profundidad: 0,30
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
export default Tables