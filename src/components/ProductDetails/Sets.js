import { React, useEffect } from 'react';
import './Sets.css';
import { NavBarComponent } from '../NavBar/NavBarComponent';
import { Product } from '../ProductContainer/Product/Product';
import { InfoSection } from '../InfoSection/InfoSection';
import { Footer } from '../Footer/Footer';


import image3 from '../Carousel/Img/3.jpg';
import image6 from '../Carousel/Img/6.jpg';
import image9 from '../Carousel/Img/9.jpg';
import { SiWhatsapp } from 'react-icons/si';

export const Sets = () => {
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
                <h1>Combos</h1>
            </div>
            <h3 className="comboDescription"><b>Ahorrá llevando el combo!</b>
                <br />
                <h5 className="comboDescription">Consulte por otros colores y modelos</h5>
            </h3>
            <div className="ComboWrapper">
                <h3><b>Combo 1</b></h3>
                <div>
                    <div className="ProductsCard">
                        <img src={image3} className="ComboImg"
                            alt="cama box con cajones"
                        />
                        <img src={image6} className="ComboImg"
                            alt="mesa de luz flotante"
                        />
                        <img src={image9} className="ComboImg"
                            alt="mesa de luz flotante"
                        />
                    </div>

                    <h3>
                        Cama + Mesas de luz + Respaldo
                    </h3>
                    <div className="descriptionText">
                        <div className="buttonDiv">
                            <button className="buttonGoCart">
                                <a className="buttonGoCart"
                                    href="https://wa.me/5491130666726"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Lo quiero
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ComboWrapper">
                    <h3><b>Combo 2</b></h3>
                    <div className="ProductsCard">
                        <img src={image3} className="ComboImg"
                            alt="cama box con cajones"
                        />
                        <img src={image6} className="ComboImg"
                            alt="mesa de luz flotante"
                        />
                    </div>

                    <h3>
                        Cama + Mesas de luz
                    </h3>
                </div>
                <div className="descriptionText">
                    <div className="buttonDiv">
                        <button className="buttonGoCart">
                            <a className="buttonGoCart"
                                href="https://wa.me/5491130666726"
                                target="_blank"
                                rel="noopener noreferrer">
                                Lo quiero
                            </a>
                        </button>
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