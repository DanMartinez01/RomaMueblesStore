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
        <div className='setContainer'>
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
                <h1>/Combos</h1>
            </div>
            <h3 className="comboDescription"><b>Ahorrá llevando el combo!</b></h3>
            <p className="comboDescription">Consulte por otros colores y modelos</p>
            <div className="ComboWrapper">
                <div className="CardCombo">
                    <div className="ProductsImg">
                        <img src={image3} className="ComboImg"
                            alt="cama box con cajones"
                            width="250px"
                            height="150px"
                        />
                        <img src={image6} className="ComboImg"
                            alt="mesa de luz flotante"
                            width="150px"
                            height="100px"
                        />
                        <img src={image9} className="ComboImg"
                            alt="mesa de luz flotante"
                            width="150px"
                            height="100px"
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
                <div className="CardCombo" >
                    <div className="ProductsImg">
                        <img src={image3} className="ComboImg"
                            alt="cama box con cajones"
                            width="250px"
                            height="150px"
                        />
                        <img src={image6} className="ComboImg"
                            alt="mesa de luz flotante"
                            width="150px"
                            height="100px"
                        />
                    </div>

                    <h3>
                        Cama + Mesas de luz
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
            </div>
            <Product />
            <InfoSection />
            <Footer />
        </div>
    )
}
export default Sets